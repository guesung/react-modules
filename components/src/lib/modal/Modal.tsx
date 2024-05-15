import {
  useRef,
  useEffect,
  HTMLAttributes,
  CSSProperties,
  ButtonHTMLAttributes,
} from "react";

import * as Styled from "./Modal.styled";

export interface ModalProps extends React.PropsWithChildren {
  children?: React.ReactNode;
  isOpen: boolean;
  size: "S" | "M" | "L";
  position: "top" | "bottom" | "center";
  onClose: () => void;
  style?: CSSProperties;
}

const Modal: React.FC<ModalProps> & {
  ModalHeader: ModalHeaderType;
  ModalTitle: ModalTitleType;
  ModalCloseButton: ModalCloseButtonType;
  ModalButton: ModalButtonType;
  ModalContent: ModalContentType;
  ModalInputLabel: ModalInputLabelType;
  ModalInput: ModalInputType;
  ModalFooter: ModalFooterType;
} = ({ children, isOpen, size, position, ...restProps }) => {
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModalHandler();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", keyListener);
    }

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  }, [isOpen]);

  const closeModalHandler = () => {
    if (restProps.onClose) {
      restProps.onClose();
    }
  };

  const clickBackDropHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === modalBackdropRef.current) {
      closeModalHandler();
    }
  };

  return (
    isOpen && (
      <Styled.ModalBackdrop
        ref={modalBackdropRef}
        onClick={clickBackDropHandler}
      >
        <Styled.ModalWrapper size={size} position={position} {...restProps}>
          {children}
        </Styled.ModalWrapper>
      </Styled.ModalBackdrop>
    )
  );
};

type ModalHeaderType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalHeader: ModalHeaderType = ({ children, ...restProps }) => {
  return <Styled.ModalHeader {...restProps}>{children}</Styled.ModalHeader>;
};

type ModalTitleType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
>;

const ModalTitle: ModalTitleType = ({ children, ...restProps }) => {
  return <Styled.ModalTitle {...restProps}>{children}</Styled.ModalTitle>;
};

type ModalCloseButtonType = React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;

const ModalCloseButton: ModalCloseButtonType = ({ children, ...restProps }) => {
  return (
    <Styled.ModalCloseButton {...restProps}>{children}</Styled.ModalCloseButton>
  );
};

type ModalButtonType = React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { size: "S" | "M" | "L" }
>;

const ModalButton: ModalButtonType = ({ size, children, ...restProps }) => {
  return (
    <Styled.ModalButton size={size} type="button" {...restProps}>
      {children}
    </Styled.ModalButton>
  );
};

type ModalContentType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalContent: ModalContentType = ({ children, ...restProps }) => {
  return <Styled.ModalContent {...restProps}>{children}</Styled.ModalContent>;
};

type ModalInputLabelType = React.FC<
  React.PropsWithChildren<
    React.HTMLAttributes<HTMLLabelElement> & {
      htmlFor?: string;
    }
  >
>;

const ModalInputLabel: ModalInputLabelType = ({
  htmlFor,
  children,
  ...restProps
}) => {
  return (
    <Styled.ModalLabel htmlFor={htmlFor} {...restProps}>
      {children}
    </Styled.ModalLabel>
  );
};

type ModalInputType = React.FC<
  React.PropsWithChildren<
    HTMLAttributes<HTMLElement> & {
      type: HTMLInputElement["type"];
      placeholder?: string;
    }
  >
>;

const ModalInput: ModalInputType = ({
  type,
  placeholder,
  children,
  ...restProps
}) => {
  return (
    <Styled.ModalInput type={type} placeholder={placeholder} {...restProps}>
      {children}
    </Styled.ModalInput>
  );
};

type ModalFooterType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
    align: "left" | "center" | "right";
  }
>;

const ModalFooter: ModalFooterType = ({ align, children, ...restProps }) => {
  return (
    <Styled.ModalFooter align={align} {...restProps}>
      {children}
    </Styled.ModalFooter>
  );
};

Modal.ModalHeader = ModalHeader;
Modal.ModalTitle = ModalTitle;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalButton = ModalButton;
Modal.ModalContent = ModalContent;
Modal.ModalInputLabel = ModalInputLabel;
Modal.ModalInput = ModalInput;
Modal.ModalFooter = ModalFooter;

export default Modal;
