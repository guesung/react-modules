import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ConfirmModal from '../lib/components/Modal/ConfirmModal/index';

import '../lib/styles/index.css';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Modal/Examples',
  component: ConfirmModal,
};

export default meta;

export const Confirm = ConfirmModal.bind({});
Confirm.args = {
  title: '확인/취소(Confirm) 모달',
  basicDescription: '사용자에게 선택지를 제공하고 확인 및 취소 버튼을 제공',
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
