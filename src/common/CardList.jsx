import React from 'react';
import BoardCard from './BoardCard';
import { ProductThumbCard } from './ProductThumbCard';

function CardList({ type, discript }) {
  const CARD_TYPE ={PRODUCT:'product', BOARD:'board'}; 
  return (
    <>
      <div
        className="card-list"
        style={{
          display: 'flex',
          gap: type === CARD_TYPE.PRODUCT ? '2.5rem' : '1rem',
          flexWrap: type === CARD_TYPE.PRODUCT ? 'nowrap' : 'wrap',
        }}
      >
        {type === CARD_TYPE.PRODUCT ? (
          <ProductThumbCard />
        ) : type === CARD_TYPE.BOARD ? (
          <BoardCard />
        ) : (
          <div>Invalid type</div>
        )}
      </div>
    </>
  );
}

export default CardList;
