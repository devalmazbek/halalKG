"use client";

import React from "react";
import {Modal} from "antd";
import {ECode} from "@/app/codes/type";

interface ModalProps {
  code: ECode | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BaseModal: React.FC<ModalProps> = ({ open, onClose, children, code }) => {
  if (!open) return null;
  return (
    <Modal
      title={code?.code}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={open}
      footer={null}
      onCancel={onClose}
    >
      {children}
    </Modal>
  );
};
