import React from 'react';
import { DivBox } from '../../../styles/box';
import CardList from '../../../common/CardList';
import SubTitle from '../../../common/SubTitle';

function RequestList(props) {
  return (
    <>
      <DivBox className='reqiest-list'>
        <SubTitle
          subTitle={'지금 사람을 구하고 있어요!'}
          linkText={'더 보기+'}
        />
        <CardList type={'board'} />
      </DivBox>
    </>
  );
}

export default RequestList;
