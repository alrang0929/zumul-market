import React, { useEffect } from 'react';
// import { useProducts } from '../../api/product/hook/useProducts';
import ThumbSlider from './plugin/SwiperThumb';
import { ProductInfo } from './components/ProductInfo';
import { DivBox, FlexBox } from '../../styles/StyleBox';
import { useParams } from 'react-router-dom';
import useProductStore from '../../stores/product/useProductStore';
import { DetailInfo } from './components/DetailInfo';
import { BackButton } from '../../common/BackButton';

const ProductDetail = () => {
  const { id } = useParams(); // URL 파라미터로부터 productId 가져오기
  const { selectedProduct, fetchProductDetail, clearSelectedProduct } =
    useProductStore();

  useEffect(() => {
    console.log('id', id);
    fetchProductDetail(id); // 상품 상세 데이터 로드
    return () => clearSelectedProduct(); // 컴포넌트 언마운트 시 데이터 초기화
  }, [id, fetchProductDetail, clearSelectedProduct]);

  console.log('fetchProductDetail', fetchProductDetail);

  if (!selectedProduct) return <p>Loading...</p>;

  console.log('fetchProductDetail호출 후 selectedProduct', selectedProduct);

  return (
    <>
      <DivBox className="prooduct-detail-page">
        <FlexBox flexStyles={'ColumFlexBox'} gap={'L'} className="product-info-wrap">
          <BackButton />
          <FlexBox gap={'XL'} className="content-wrap" style={{paddingBottom:"5rem"}}>
            <ThumbSlider selectdata={selectedProduct} />
            <ProductInfo selectdata={selectedProduct} />
          </FlexBox>
        </FlexBox>
        <DivBox className="detail-image-wrap" >
          <DetailInfo selectdata={selectedProduct} />
        </DivBox>
        <DivBox className="userpick-list"></DivBox>
      </DivBox>
    </>
  );
};

export default ProductDetail;
