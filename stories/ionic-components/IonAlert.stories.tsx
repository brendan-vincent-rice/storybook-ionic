import type { Meta, StoryObj } from '@storybook/react';
import { IonAlert, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const AlertWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <IonButton onClick={() => setIsOpen(true)}>Show Alert</IonButton>
      <IonAlert
        {...args}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

const meta: Meta<typeof IonAlert> = {
  title: 'Ionic/Ion Alert',
  component: IonAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
    },
    subHeader: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    backdropDismiss: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    header: 'Alert',
    message: 'This is a basic alert.',
    buttons: ['OK'],
  },
  render: (args) => <AlertWrapper {...args} />,
};

export const WithSubHeader: Story = {
  args: {
    header: 'Alert Header',
    subHeader: 'Alert Subtitle',
    message: 'This alert has a subtitle.',
    buttons: ['Cancel', 'OK'],
  },
  render: (args) => <AlertWrapper {...args} />,
};

export const Confirmation: Story = {
  args: {
    header: 'Confirm Action',
    message: 'Are you sure you want to delete this item?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        },
      },
    ],
  },
  render: (args) => <AlertWrapper {...args} />,
};

export const WithInput: Story = {
  args: {
    header: 'Enter Information',
    message: 'Please enter your name:',
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Your name',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'OK',
        handler: (data: any) => {
          console.log('Name entered:', data.name);
        },
      },
    ],
  },
  render: (args) => <AlertWrapper {...args} />,
};

export const MultipleInputs: Story = {
  args: {
    header: 'Login',
    inputs: [
      {
        name: 'username',
        type: 'text',
        placeholder: 'Username',
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Login',
        handler: (data: any) => {
          console.log('Login data:', data);
        },
      },
    ],
  },
  render: (args) => <AlertWrapper {...args} />,
};

export const RadioOptions: Story = {
  args: {
    header: 'Select Option',
    inputs: [
      {
        name: 'option',
        type: 'radio',
        label: 'Option 1',
        value: 'option1',
        checked: true,
      },
      {
        name: 'option',
        type: 'radio',
        label: 'Option 2',
        value: 'option2',
      },
      {
        name: 'option',
        type: 'radio',
        label: 'Option 3',
        value: 'option3',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'OK',
        handler: (data: any) => {
          console.log('Selected:', data);
        },
      },
    ],
  },
  render: (args) => <AlertWrapper {...args} />,
};