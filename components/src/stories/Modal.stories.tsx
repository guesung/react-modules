import { Meta, StoryObj } from '@storybook/react';
import { Modal, useModal } from '../lib/index';

import '../lib/styles/index.css';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    title: {
      control: 'text',
    },
    basicDescription: {
      control: 'text',
    },
    isCloseIcon: {
      control: 'boolean',
    },
    $size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    $position: {
      control: { type: 'radio', options: ['center', 'bottom'] },
    },

    children: { table: { disable: true } },
  },
};

export default meta;

const DefaultModal: StoryObj<typeof meta.args> = (args) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <Modal
          $size={args.$size}
          $position={args.$position}
          onCloseModal={closeModal}
        >
          <Modal.Header
            title={args.title}
            isCloseIcon={args.isCloseIcon}
            onCloseModal={closeModal}
          ></Modal.Header>
          <Modal.Content basicDescription={args.basicDescription} />
          <Modal.Footer>
            <Modal.Button type="button" $size="small" onClick={closeModal}>
              닫기
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export const SmallModal = DefaultModal.bind({});
SmallModal.args = {
  title: '작은 모달',
  basicDescription: '이것은 작은 사이즈의 모달입니다.',
  isCloseIcon: true,
  $size: 'small',
  $position: 'center',
};
SmallModal.argTypes = {
  $size: { table: { disable: true } },
};

export const MediumModal = DefaultModal.bind({});
MediumModal.args = {
  title: '중간 모달',
  basicDescription: '이것은 중간 사이즈의 모달입니다.',
  isCloseIcon: true,
  $size: 'medium',
  $position: 'center',
};
MediumModal.argTypes = {
  $size: { table: { disable: true } },
};

export const LargeModal = DefaultModal.bind({});
LargeModal.args = {
  title: '큰 모달',
  basicDescription: '이것은 큰 사이즈의 모달입니다.',
  isCloseIcon: true,
  $size: 'large',
  $position: 'center',
};
LargeModal.argTypes = {
  $size: { table: { disable: true } },
};

export const IconCloseModal = DefaultModal.bind({});
IconCloseModal.args = {
  title: '아이콘으로 닫기',
  basicDescription: '아이콘을 클릭하면 모달이 닫힙니다.',
  isCloseIcon: true,
  $position: 'center',
};

export const ButtonCloseModal = DefaultModal.bind({});
ButtonCloseModal.args = {
  title: '버튼으로 닫기',
  basicDescription: '닫기 버튼을 클릭하면 모달이 닫힙니다.',
  isCloseIcon: false,
  $size: 'medium',
  $position: 'center',
};
