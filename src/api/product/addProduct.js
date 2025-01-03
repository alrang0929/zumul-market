// import supabase from '../supabaseClient';
import useUserStore from '../../stores/auth/useUserStore';
import { saveProductOption } from '../productOption/SaveProductOption';
import { saveProduct } from './saveProduct';
import { uploadFile } from './uploadProductFile';

export const onSubmit = async (data, navigator, options) => {
  const { user } = useUserStore.getState();
  const userId = user.id;

  try {
    // 1. 대표 이미지 업로드
    const imagePath = await uploadFile(data.title_image);
    if (!imagePath) throw new Error('대표 이미지 업로드 실패');

    // 2. 상세 이미지 업로드
    const detailImagesPath = [];
    if (data.detail_image) {
      const path = await uploadFile(data.detail_image);
      if (path) detailImagesPath.push(path);
    }

    // 3. product 테이블에 데이터 추가
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

      title_image: imagePath, // 대표 이미지 경로
      detail_image: detailImagesPath, // 상세 이미지 경로 배열
    };
    console.log(productData);

    const savedProduct = await saveProduct(productData);
    const productId = savedProduct[0].id;

    if (options.length > 0) {
      const optionData = options.map((option) => ({
        product_id: productId,
        name: option.name,
        add_cost: {
          price: option.price,
          stock: option.stock,
        },
      }));
      const savedOption = await Promise.all(
        optionData.map((opt) => saveProductOption(opt))
      );
    }

    if (savedProduct) {
      alert('상품이 성공적으로 등록되었습니다!');
      navigator('/user/productmanage');
    }
  } catch (error) {
    console.error('Error submitting product:', error);
    alert('상품 등록에 실패했습니다.');
  }
};
