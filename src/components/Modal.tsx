import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  headerClass?: string;
  bodyClass?: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, header, headerClass, bodyClass, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Backdrop>
      <ModalWrapper>
        <ModalHeader className={headerClass}>
          <h2>{header}</h2>
          <CloseButton onClick={onClose}>
            <IoClose size={24} />
          </CloseButton>
        </ModalHeader>

        {/* Body */}
        <ModalBody className={bodyClass}>{children}</ModalBody>
      </ModalWrapper>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 60vw;
  max-width: 80vh;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 1.25rem;
  font-weight: 600;
  margin:0 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.3s ease;

  &:hover {
    color: #1f2937;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

export default Modal;
