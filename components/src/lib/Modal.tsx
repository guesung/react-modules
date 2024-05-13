import { PropsWithChildren } from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalContextType } from "./ModalContext";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import ModalCloseButton from "./ModalCloseButton";
import Container from "./Container";
import useAnimation from "./hooks/useAnimation";
import styles from "./container.module.css";
import ModalAlert from "./ModalAlert";
import ConfirmButton from "./ConfirmButton";
import Prompt from "./Prompt";
import Title from "./Title";
import Description from "./Description";

export default function Modal({
  children,
  isOpen = false,
  onClose = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  mountAnimation = "",
  unMountAnimation = "",
  position = "center",
  animationTime = 300,
  size = "custom",
}: PropsWithChildren<Partial<ModalContextType>>) {
  const { open, closing } = useAnimation({
    unMountEvent: onClose,
    unMountAnimation,
    initialState: isOpen,
    animationTime,
  });

  const sizeClassName =
    size === "large"
      ? styles.large
      : size === "medium"
        ? styles.medium
        : size === "small"
          ? styles.small
          : "";

  const modalProps: ModalContextType = {
    isOpen,
    position,
    onClose,
    mountAnimation,
    unMountAnimation,
    animationTime,
    closing,
    open,
    sizeClassName,
    size,
  };

  return open ? (
    <ModalProvider value={modalProps}>{children}</ModalProvider>
  ) : null;
}

Modal.Portal = ModalPortal;
Modal.Backdrop = ModalBackdrop;
Modal.Container = Container;
Modal.CloseButton = ModalCloseButton;
Modal.Alert = ModalAlert;
Modal.ConfirmButton = ConfirmButton;
Modal.Prompt = Prompt;
Modal.Title = Title;
Modal.Description = Description;
