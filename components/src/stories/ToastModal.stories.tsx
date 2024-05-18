import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';

import { ToastModal } from '../lib';

const meta: Meta<typeof ToastModal> = {
  title: 'Modal',
  component: ToastModal,
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

export const ToastModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    modalTargetEl: null,
    position: { top: '100', left: '100' },
    isNeedAnimation: true,
    backgroundColor: { modal: 'rgb(248, 255, 188)' },
    contentsPadding: '1rem 0.875rem',
    children: (
      <div style={{ width: '300px', height: '2rem', textAlign: 'center' }}>
        <h2>toast modal</h2>
      </div>
    ),
  },
};
