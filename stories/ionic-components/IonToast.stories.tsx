import type { Meta, StoryObj } from '@storybook/react';
import { IonToast, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const ToastWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <IonButton onClick={() => setIsOpen(true)}>Show Toast</IonButton>
      <IonToast
        {...args}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

const meta: Meta<typeof IonToast> = {
  title: 'Ionic/IonToast',
  component: IonToast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
    duration: {
      control: 'number',
    },
    position: {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    message: 'This is a basic toast message.',
    duration: 2000,
    position: 'bottom',
  },
  render: (args) => <ToastWrapper {...args} />,
};

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    duration: 3000,
    color: 'success',
    position: 'top',
  },
  render: (args) => <ToastWrapper {...args} />,
};

export const Error: Story = {
  args: {
    message: 'An error occurred. Please try again.',
    duration: 4000,
    color: 'danger',
    position: 'bottom',
  },
  render: (args) => <ToastWrapper {...args} />,
};

export const Warning: Story = {
  args: {
    message: 'Warning: This action cannot be undone.',
    duration: 3000,
    color: 'warning',
    position: 'middle',
  },
  render: (args) => <ToastWrapper {...args} />,
};

export const WithButton: Story = {
  args: {
    message: 'Toast with action button',
    duration: 5000,
    position: 'bottom',
    buttons: [
      {
        text: 'Undo',
        role: 'cancel',
        handler: () => {
          console.log('Undo clicked');
        },
      },
    ],
  },
  render: (args) => <ToastWrapper {...args} />,
};

export const WithIcon: Story = {
  args: {
    message: 'Message sent successfully',
    duration: 3000,
    position: 'bottom',
    color: 'success',
    buttons: [
      {
        icon: 'checkmark',
        side: 'start',
      },
      {
        text: 'Dismiss',
        role: 'cancel',
      },
    ],
  },
  render: (args) => <ToastWrapper {...args} />,
};

export const LongDuration: Story = {
  args: {
    message: 'This toast will stay visible for 10 seconds.',
    duration: 10000,
    position: 'top',
    color: 'primary',
  },
  render: (args) => <ToastWrapper {...args} />,
};