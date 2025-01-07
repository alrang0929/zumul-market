import React from 'react';
import { DivBox } from '../../../styles/box';
import SubTitle from '../../../common/SubTitle';
import BoardCard from '../../../common/BoardCard';
import { cardData } from '../../../common/dummyDb';

function RequestList(props) {
  return (
    <>
      <DivBox className='reqiest-list'>
        <SubTitle
          subTitle={'지금 사람을 구하고 있어요!'}
          linkText={'더 보기+'}
        />
        <BoardCard selelcdata={cardData} slice={true} slicecount={6}/>
      </DivBox>
    </>
  );
}

export default RequestList;
