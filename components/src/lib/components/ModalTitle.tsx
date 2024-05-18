import styled from 'styled-components';

const TitleContainer = styled.div`
  color: var(--black-color);
  font-family: var(--font-Noto-Sans-KR);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
`;

interface ModalTitleType {
  title: string;
}

function ModalTitle({ title }: ModalTitleType) {
  return <TitleContainer>{title}</TitleContainer>;
}

export default ModalTitle;
