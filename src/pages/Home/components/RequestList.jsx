import React from 'react';
import SubTitle from '../../common/SubTitle';
import CardList from '../../common/CardList';

function RequestList(props) {
  return (
    <>
      <section className='reqiest-list'>
        <SubTitle
          subTitle={'지금 사람을 구하고 있어요!'}
          linkText={'더 보기+'}
        />
        <CardList type={'board'} />
      </section>
    </>
  );
}

export default RequestList;
