"use client";

import React from "react";
import {Modal} from "antd";

import {Badge} from "@/components/ui/badge";
import {ECode} from "@/app/codes/type";

interface ModalProps {
  code: ECode | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: React.ReactNode;
}

export const BaseModal: React.FC<ModalProps> = ({ open, onClose, children, code, title }) => {
  if (!open) return null;
  return (
    <Modal
      title={title}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={open}
      footer={null}
      onCancel={onClose}
    >
      {children}
    </Modal>
  );
};
