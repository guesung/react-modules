import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';

import { BottomModal } from '../lib';

const meta: Meta<typeof BottomModal> = {
  title: 'Modal',
  component: BottomModal,
  argTypes: {
    setOpenModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BottomModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    modalTargetEl: null,
    children: (
      <>
        <h1>Bottom Modal</h1>
        <BottomModal.CloseButtonWrapper>
          <button>close</button>
        </BottomModal.CloseButtonWrapper>
      </>
    ),
  },
};
