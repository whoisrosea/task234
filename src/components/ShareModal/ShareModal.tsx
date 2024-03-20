import React, { FC } from "react";
import "./ShareModal.scss"; // Make sure to include the CSS file
import logo from "../../images/Group 1.svg";
import close from "../../images/close.svg";
import LogoComponent from "../LogoComponent/LogoComponent";

interface ShareModalProps {
  onClose: () => void;
}

const ShareModal: FC<ShareModalProps> = ({ onClose }) => {
  const hashtags = [
    { label: "#десерты", path: "/" },
    { label: "#исключительная атмосфера", path: "/" },
    { label: "#панкейки", path: "/" },
    { label: "#вафли", path: "/" },
  ];
  return (
    <div className="share-modal">
      <div className="share-modal__header">
        <img
          onClick={onClose}
          src={close}
          alt="close"
          className="share-modal__close-modal"
        ></img>

        <h2 className="share-modal__title">Коллекция Кубика</h2>

        <LogoComponent style={{marginBottom:24}} />
      </div>

      <div className="share-modal__footer">
        <div className="share-modal__link">https://cubic.rest/selection/20</div>
        <button className="share-modal__copy-button">Копировать ссылку</button>
      </div>
    </div>
  );
};

export default ShareModal;
