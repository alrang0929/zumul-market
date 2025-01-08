import React from 'react'
import SubTitle from '../../../common/SubTitle'
import { ProductThumbCard } from '../../../common/ProductThumbCard'
import { useProducts } from '../../../api/product/hook/useProducts'

export const ProductPickList = ({selectdata}) => {
    const { products } = useProducts();
  return (
    <div>
        <SubTitle subTitle={"김땡떙 작가님의 다른 작품들도 만나보세요!"} linkText={"더 보기"} link={"/product"} />
        <ProductThumbCard selectdata={products} slice={true} slicecount={4}/>
    </div>
  )
}
