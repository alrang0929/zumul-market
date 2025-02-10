import React from 'react'
import { Button } from '../styles/StyleButton'

export const DeleteButton = ({clickfn}) => {
  return (
    <Button 
    buttontype={'iconButton'}
    onClick={clickfn}
    ><img src="/images/icon_delete.png" alt="삭제 아이콘" /></Button>
  )
}
