import './styles.css';
import * as React from 'react';
import ArrowIcon from 'assets/images/Seta.svg';
const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>INICIE AGORA A SUA BUSCA</h6>
      </button>

      <div className="btn-icon-container">
        <img src={ArrowIcon} alt="Produto" />
      </div>
    </div>
  );
};

export default ButtonIcon;
