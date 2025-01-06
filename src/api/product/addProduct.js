import { saveProductOption } from "../productOption/SaveProductOption";
import { saveProduct } from "./saveProduct";
import { uploadFile } from "../../utils/uploadFile";
import useUserStore from "../../stores/auth/useUserStore";

export const onSubmit = async (data, navigator, options) => {
  const user = useUserStore((state) => state.user);
  const userId = user.id;

  try {
    console.log('Form Data:', data); // 데이터 확인
    console.log('Options:', options); // 전달된 options 확인

    // 대표 이미지 업로드
    const imagePath = await uploadFile({
      file: data.title_image, // 업로드할 파일
      type: 'product',          // 파일 타입
      buckit: 'product_img',        // 버킷 이름
    });
    
    if (!imagePath) throw new Error('대표 이미지 업로드 실패');

    // 상세 이미지 업로드
    const detailImagesPath = [];
    if (data.detail_image) {
      const path = await uploadFile({
        file: data.detail_image, // 업로드할 파일
        type: 'product',          // 파일 타입
        buckit: 'product_img',        // 버킷 이름
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
