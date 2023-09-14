import React from 'react'
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Group } from "@mantine/core";

function ModalForm({ modalOpen, setModalOpen, children, title }) {

  const handleClose = () => {
    setModalOpen(false);
  }
  return (
    <Modal
      opened={modalOpen}
      onClose={handleClose}
      title={title}
      size="lg"
      radius="md"
      centered
    >
      {children}
    </Modal>
  )
}

export default ModalForm;