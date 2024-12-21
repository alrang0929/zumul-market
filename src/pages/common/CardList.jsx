import React from 'react';
import { ProductCard } from './ProductCard';
import BoardCard from './BoardCard';

function CardList({ type }) {
  return (
    <>
      <div
        className="card-list"
        style={{
          display: 'flex',
          gap: type === 'product' ? '2.5rem' : '1rem',
          flexWrap: type === 'product' ? 'nowrap' : 'wrap',
        }}
      >
        {type === 'product' ? (
          <ProductCard />
        ) : type === 'board' ? (
          <BoardCard />
        ) : (
          <div>Invalid type</div>
        )}
      </div>
    </>
  );
}

export default CardList;
