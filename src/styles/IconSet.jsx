import { IoTimeOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { IoCartOutline, IoHeart } from 'react-icons/io5';

import { MdEventAvailable } from 'react-icons/md';

import { BsAward } from 'react-icons/bs';
import { LuBrush } from 'react-icons/lu';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';
import { FaRegFaceGrinStars } from 'react-icons/fa6';

import { FaRegCreditCard } from 'react-icons/fa6';
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2';
import { RiDeleteBinLine } from 'react-icons/ri';

const ICON_SET = {
  time: IoTimeOutline,
  search: IoIosSearch,
  cart: IoCartOutline,
  favorite: IoHeart,
  checkDate: MdEventAvailable,
  award: BsAward,
  brush: LuBrush,
  handmade: FaHandHoldingHeart,
  edit : GrDocument,
  event: FaRegFaceGrinStars,
  payments: FaRegCreditCard,
  plus: HiPlusSmall,
  minus: HiMinusSmall,
  delete: RiDeleteBinLine,
};

const CURRENT_COLOR = '#131313';

export const Icon = ({ name, size = 24, color = CURRENT_COLOR})=>{
const IconSet = ICON_SET[name];
return IconSet ? <IconSet size={size} color={color}/> : null;
};