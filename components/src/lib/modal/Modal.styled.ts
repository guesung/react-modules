import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.section<{
  size: "S" | "M" | "L";
  position: "top" | "center" | "bottom";
}>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  max-height: 90%;
  background-color: white;
  box-sizing: border-box;
  border: none;

  ${({ size }) => {
    switch (size) {
      case "S":
        return `
          width: 30%;
        `;
      case "M":
        return `
          width: 40%;
        `;
      case "L":
        return `
          width: 55%;
        `;
    }
  }}
  ${({ position }) => {
    switch (position) {
      case "top":
        return `
          top: 0;
          transform: translate(-50%, 0%);
        `;
      case "bottom":
        return `
          bottom: 0;
          transform: translate(-50%, 0%);
        `;
      case "center":
        return `
          top: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  }};
`;

export const ModalHeader = styled.header`
  display: flex;
  margin: 15px 5px;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-weight: bold;
`;

export const ModalTitle = styled.span`
  font-size: 1.2em;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    border: none;
  }
`;

export const ModalButton = styled.button<{
  size: "S" | "M" | "L";
}>`
  border: none;
  color: white;
  background-color: #333333;
  font-weight: bold;
  padding: 7px 10px;

  ${({ size }) => {
    switch (size) {
      case "S":
        return `
          width: 20%;
        `;
      case "M":
        return `
          width: 50%;
        `;
      case "L":
        return `
          width: 95%;
        `;
    }
  }}

  &:hover {
    border: none;
  }
`;

export const ModalContent = styled.main`
  margin: 20px 25px;
  text-align: left;
  max-height: 500px;
  overflow-wrap: break-word;
  overflow-y: auto;
`;

export const ModalLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
`;

export const ModalInput = styled.input`
  width: 95%;
  padding: 5px 8px;
  margin-bottom: 10px;
`;

export const ModalFooter = styled.footer<{
  align: "left" | "center" | "right";
}>`
  margin: 15px 5px;
  display: flex;
  gap: 15px;
  
  ${({ align }) => {
    switch (align) {
      case "left":
        return `
        justify-content: flex-start;
      `;
      case "center":
        return `
        justify-content: center;
      `;
      case "right":
        return `
        justify-content:  flex-end;
      `;
    }
  }}
`;
