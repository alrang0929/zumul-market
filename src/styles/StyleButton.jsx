import { useNavigate } from 'react-router-dom';
import './button.scss';

export default StyleButton = ({ buttonType, text, linkPath }) => {
  const nav = useNavigate();
  <button className={buttonType} onClick={() => nav(linkPath)}>
    {text}
  </button>;
};
