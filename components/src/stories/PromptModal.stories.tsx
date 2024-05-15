import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PromptModal from '../lib/components/Modal/PromptModal/index';

import '../lib/styles/index.css';

const meta: Meta<typeof PromptModal> = {
  title: 'Modal/Examples',
  component: PromptModal,
};

export default meta;

export const Prompt = PromptModal.bind({});
Prompt.args = {
  title: '입력(Prompt) 모달',
  basicDescription:
    '사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼을 제공',
  isCloseIcon: false,
  $size: 'medium',
  $position: 'center',
  $buttonSize: 'small',
  $buttonBackgroundColor: '#FFFFFF',
  $buttonColor: '#000000',
  onModalClose: action('modalClose'),
  onConfirmButtonClick: action('confirmButtonClick'),
  onCancelButtonClick: action('cancelButtonClick'),
};
