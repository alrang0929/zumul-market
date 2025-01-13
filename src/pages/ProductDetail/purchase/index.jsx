import React from 'react'
import { DivBox } from '../../../styles/box'
import { PurchasedGoodsInfo } from './components/PurchasedGoodsInfo'
import { PaymentDetail } from './components/PaymentDetail'

export const PurchasePage = () => {
  return (
    <>
    <DivBox className='purchase-wrap' style={{display:"flex", gap:"2rem", padding:"10rem 0"}}>
    {/* 1. 구매상품 정보 */}
    <PurchasedGoodsInfo/>
    {/* 2. 결제 상세 */}
    <PaymentDetail/>
    </DivBox>
    </>
  )
}
