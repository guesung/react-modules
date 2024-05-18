import styled from 'styled-components';

const SubTitleContainer = styled.div`
  color: var(--sub-black-color);
  font-family: var(--font-Noto-Sans);
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
`;

interface ModalSubTitleType {
  subTitle: string;
}

function ModalSubTitle({ subTitle }: ModalSubTitleType) {
  return <SubTitleContainer>{subTitle}</SubTitleContainer>;
}

export default ModalSubTitle;
