import React, { useEffect } from 'react';
// import { useProducts } from '../../api/product/hook/useProducts';
import ThumbSlider from './plugin/SwiperThumb';
import { ProductInfo } from './components/ProductInfo';
import './style/product_detail.scss';
import { DivBox } from '../../styles/box';
import { useParams } from 'react-router-dom';
import useProductStore from '../../stores/product/useProductStore';
import { DetailInfo } from './components/DetailInfo';
import { ProductPickList } from './components/ProductPickList';
import { useCartStore } from '../../stores/cart/useCartStore';
const ProductDetail = () => {
  const { addToCart } = useCartStore();
  const { id } = useParams(); // URL 파라미터로부터 productId 가져오기
  const { selectedProduct, fetchProductDetail, clearSelectedProduct } =
    useProductStore();

  useEffect(() => {
    console.log('id', id);
    fetchProductDetail(id); // 상품 상세 데이터 로드
    return () => clearSelectedProduct(); // 컴포넌트 언마운트 시 데이터 초기화
  }, [id, fetchProductDetail, clearSelectedProduct]);

  if (!selectedProduct) return <p>Loading...</p>;
  // console.log('디테일 페이지 selectedProduct', selectedProduct);

  return (
    <>
      <DivBox className="product-info-wrap">
        <ThumbSlider selectdata={selectedProduct} />
        <ProductInfo selectdata={selectedProduct} />
      </DivBox>
      <DivBox className="detail-image-wrap">
        <DetailInfo selectdata={selectedProduct} />
      </DivBox>
      <DivBox className="userpick-list">
        <ProductPickList />
      </DivBox>
    </>
  );
};

export default ProductDetail;
