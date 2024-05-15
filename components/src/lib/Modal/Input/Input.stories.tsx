import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Component/Input',
  component: Modal.Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal.Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    description: 'input label',
    onChange: action('onChange'),
  },
};
