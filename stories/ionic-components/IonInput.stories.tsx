import type { Meta, StoryObj } from '@storybook/react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonInput> = {
  title: 'Ionic/IonInput',
  component: IonInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    fill: {
      control: 'select',
      options: ['solid', 'outline'],
    },
    shape: {
      control: 'select',
      options: ['round'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    clearInput: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Enter your name',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Name</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Email</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Password</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const Filled: Story = {
  args: {
    fill: 'solid',
    placeholder: 'Solid fill',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Solid Input</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const Outline: Story = {
  args: {
    fill: 'outline',
    placeholder: 'Outline fill',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Outline Input</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const WithClearButton: Story = {
  args: {
    placeholder: 'Type to see clear button',
    clearInput: true,
    value: 'Clear me',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Input with Clear</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Disabled Input</IonLabel>
      <IonInput {...args} />
    </IonItem>
  ),
};