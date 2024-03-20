import React, { useState } from "react";
import Modal from "../Modal/Modal";
import ShareModal from "../ShareModal/ShareModal";
import "./ShareComponent.scss"

const ShareComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="share-component">
      <h2 className="share-component__share-title" onClick={openModal}>
        Поделиться
      </h2>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ShareModal onClose={closeModal} />
      </Modal>
      <h2 className="share-component__map-title">Смотреть на карте</h2>
    </div>
  );
};

export default ShareComponent;
