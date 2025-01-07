import { uploadFile } from '../../utils/uploadFile';
import { saveProduct } from '../product/saveProduct';
import { saveProductOption } from '../productOption/SaveProductOption';

export const onSubmit = async (
  data,
  navigator,
  options,
  uploadedPaths,
  user
) => {
  const userId = user.id; // user 정보를 통해 userId 가져오기

  try {
    console.log('Form Data:', data); // 데이터 확인
    console.log('Options:', options); // 전달된 options 확인
    console.log('Uploaded Paths:', uploadedPaths); // 업로드된 파일 경로 확인

    // 대표 이미지 업로드
    const imagePath = await uploadFile({
      file: data.title_image,
      type: 'product',
      buckit: 'product_img',
    });

    if (!imagePath) throw new Error('대표 이미지 업로드 실패');

    // 상세 이미지 업로드
    const detailImagesPath = [];
    if (data.detail_image) {
      const path = await uploadFile({
        file: data.detail_image,
        type: 'product',
        buckit: 'product_img',
      });
      if (path) detailImagesPath.push(path);
    }

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
      title_image: imagePath,
      detail_image: detailImagesPath,
      thumb: uploadedPaths,
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
    navigator('/user/productmanage');
  } catch (error) {
    console.error('Error submitting product:', error);
    alert('상품 등록에 실패했습니다.');
  }
};
