import { uploadFile } from '../../utils/uploadFile';
import { saveProduct } from '../product/saveProduct';
import { saveProductOption } from '../productOption/SaveProductOption';
import supabase from '../supabaseClient';

export const onSubmit = async (
  data,
  navigator,
  options,
  uploadedPaths,
  user
) => {
  const userId = user.id; // user 정보를 통해 userId 가져오기

  try {
    console.log('Form Data:', data);
    console.log('Options:', options);
    console.log('Uploaded Paths:', uploadedPaths);

    // 대표 이미지 업로드
    const imagePath = await uploadFile({
      userId: userId,
      file: data.title_image,
      type: 'product',
      bucket: 'product_img',
    });

    if (!imagePath) throw new Error('대표 이미지 업로드 실패');

    // 대표 이미지 Public URL 생성
    const { data: publicData } = supabase.storage
      .from('product_img')
      .getPublicUrl(imagePath);
    const publicImagePath = publicData?.publicUrl;

    if (!publicImagePath) throw new Error('대표 이미지 URL 생성 실패');

    // 썸네일 업로드
    const thumbnailPaths = [];
    if (data.uploadedThumbnails?.length > 0) {
      for (const file of data.uploadedThumbnails) {
        const path = await uploadFile({
          file,
          type: 'product',
          bucket: 'product_img',
        });
        if (path) {
          const { data: thumbPublicData } = supabase.storage
            .from('product_img')
            .getPublicUrl(path);
          thumbnailPaths.push(thumbPublicData?.publicUrl);
        }
      }
    }

    // 상세 이미지 업로드
    const detailImagePaths = [];
    if (data.uploadedDetailImages?.length > 0) {
      for (const file of data.uploadedDetailImages) {
        const path = await uploadFile({
          file,
          type: 'product',
          bucket: 'product_img',
        });
        if (path) {
          const { data: detailPublicData } = supabase.storage
            .from('product_img')
            .getPublicUrl(path);
          detailImagePaths.push(detailPublicData?.publicUrl);
        }
      }
    }

    // 상세 이미지 경로 처리
    const detailImagesPath = uploadedPaths.map((path) => ({
      path,
      type: 'detail',
    }));

    // product 테이블에 데이터 추가
    const productData = {
      title: data.title,
      category: data.category,
      sell_start: data.sell_start,
      sell_end: data.sell_end,
      sell_status: data.sellStatus,
      stock: data.stock,
      price: data.price,
      owner_id: userId,
      document: data.document,
      shipping_fee: data.shipping_fee,
      title_image: publicImagePath, // 변환된 URL 사용
      detail_image: detailImagesPath,
      thumb: thumbnailPaths, // thumbnailPaths 사용
    };

    console.log('Saving Product:', productData);

    const savedProduct = await saveProduct(productData);
    if (!savedProduct || !savedProduct[0]?.id) {
      throw new Error('상품 저장에 실패했습니다.');
    }

    const productId = savedProduct[0].id;

    // 옵션 데이터 추가
    if (Array.isArray(options) && options.length > 0) {
      const optionData = options.map((option) => ({
        product_id: productId,
        name: option.name,
        add_cost: {
          price: option.price,
          stock: option.stock,
        },
      }));

      console.log('Saving Options:', optionData);

      const savedOptions = await Promise.all(
        optionData.map((opt) => saveProductOption(opt))
      );
      console.log('Saved Options:', savedOptions);
    } else {
      console.log('No options to save.');
    }

    alert('상품이 성공적으로 등록되었습니다!');
    navigator('/user/manage');
  } catch (error) {
    console.error('Error submitting product:', error);
    alert('상품 등록에 실패했습니다.');
  }
};
