import type { FC, JSX, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../types/data-types";

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  title,
  children,
  onClose,
}): JSX.Element => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog open className="modal">
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    document.getElementById("modal")!,
  );
};

export default Modal;
