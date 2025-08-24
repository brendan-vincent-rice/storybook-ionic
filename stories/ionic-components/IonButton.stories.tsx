import type { Meta, StoryObj } from '@storybook/react';
import { IonButton } from '@ionic/react';

const meta: Meta<typeof IonButton> = {
  title: 'Ionic/Ion Button',
  component: IonButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    fill: {
      control: 'select',
      options: ['clear', 'outline', 'solid'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    shape: {
      control: 'select',
      options: ['round', 'default'],
    },
    expand: {
      control: 'select',
      options: ['full', 'block', 'default'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    fill: 'outline',
    color: 'primary',
    children: 'Outline Button',
  },
};

export const Clear: Story = {
  args: {
    fill: 'clear',
    color: 'primary',
    children: 'Clear Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Round: Story = {
  args: {
    shape: 'round',
    children: 'Round Button',
  },
};

export const FullWidth: Story = {
  args: {
    expand: 'full',
    children: 'Full Width Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};