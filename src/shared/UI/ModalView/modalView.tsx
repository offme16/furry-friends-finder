import React from "react";
import cls from "./modalView.module.scss";
import { ReactComponent as IconClose } from "../../assests/icon-close.svg";
import { Transition } from "react-transition-group";

interface ModalViewProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalView: React.FC<ModalViewProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const onWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains(cls.modalWrapper)) {
      onClose();
    }
  };
  return (
    <Transition in={isOpen} timeout={300} unmountOnExit>
      {(state) => (
        <div className={`${cls.modal} ${cls[`modal--${state}`]}`}>
          <div className={cls.modalWrapper} onClick={onWrapperClick}>
            <div
              className={`${cls.modalContent} ${cls[`modalContent--${state}`]}`}
            >
              <button className={cls.modalCloseButton} onClick={onClose}>
                <IconClose />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};
