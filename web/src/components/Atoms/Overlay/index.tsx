import React, { ComponentType } from 'react';

/* Componentes */
import Button from '../Button';

import './styles.css';

interface Icon {
  color: string;
  className: string;
  size: number;
}

interface Props {
  open: boolean;
  setOpen: Function;
  setClose: Function;
  Icon?: ComponentType<Icon>;
  text: string;
  status: boolean;
}

const Overlay: React.FC<Props> = ({ open, setOpen, setClose, Icon, text, status }) => {
  const buttonStyle = {
    marginTop: 20,
    background: !status && 'red'
  };

  function handleClose() {
    setOpen(false);
    status && setClose();
  };

  return (
    open ?
      (<div className="overlayDiv" >
        <div id="finished">
          {Icon ? <Icon color={status ? '#2FB86E' : 'red'} className="svg" size={98} /> : <p className='thereIsNoIcon'>There is no icon BRO, Import some and pass it through props BRO</p>}
          <h1>{text}</h1>
          <Button style={buttonStyle} onClick={handleClose} text={status ? 'Voltar para a página inicial' : 'Voltar !'} />
        </div>
      </div >)
      : null
  );
}

export default Overlay;