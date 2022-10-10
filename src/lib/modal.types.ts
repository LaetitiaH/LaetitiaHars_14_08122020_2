import { ReactElement } from "react";

export interface ModalProps {
  isShowing: boolean;
  onRequestClose?: () => void;
  clickClose?: boolean;
  escapeClose?: boolean;
  showClose?: boolean;
  closeText?: string;
  title?: string | null;
  closeClass?: string;
  modalClass?: string;
  overlayClass?: string;
  fadeDuration?: number;
  children?: ReactElement<any, any>;
}
