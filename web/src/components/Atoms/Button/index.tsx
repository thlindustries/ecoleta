import React from 'react';

import './styles.css';

interface Props {
  text?: string;
  onClick: Function;
  style?: Object;
}

const Button: React.FC<Props> = ({ text, onClick, style }) => {
  return (
    <div
      className='buttonRefined'
      style={style}
      onClick={() => { onClick() }}
    >
      <p>{text}</p>
    </div>
  );
}

export default Button;