import type { Meta, StoryObj } from '@storybook/react';
import { IonToggle, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonToggle> = {
  title: 'Ionic/Ion Toggle',
  component: IonToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Checked Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Disabled Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};

export const Primary: Story = {
  args: {
    color: 'primary',
    checked: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Primary Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};

export const Success: Story = {
  args: {
    color: 'success',
    checked: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Success Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};

export const Warning: Story = {
  args: {
    color: 'warning',
    checked: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Warning Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};

export const Danger: Story = {
  args: {
    color: 'danger',
    checked: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Danger Toggle</IonLabel>
      <IonToggle {...args} />
    </IonItem>
  ),
};