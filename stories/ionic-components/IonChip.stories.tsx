import type { Meta, StoryObj } from '@storybook/react';
import { IonChip, IonLabel, IonIcon, IonAvatar } from '@ionic/react';
import { close, checkmark } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonChip> = {
  title: 'Ionic/Ion Chip',
  component: IonChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    outline: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <IonChip {...args}>
      <IonLabel>Basic Chip</IonLabel>
    </IonChip>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <IonChip {...args}>
      <IonIcon icon={checkmark} />
      <IonLabel>With Icon</IonLabel>
    </IonChip>
  ),
};

export const WithCloseIcon: Story = {
  render: (args) => (
    <IonChip {...args}>
      <IonLabel>Closable</IonLabel>
      <IonIcon icon={close} />
    </IonChip>
  ),
};

export const WithAvatar: Story = {
  render: (args) => (
    <IonChip {...args}>
      <IonAvatar>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" />
      </IonAvatar>
      <IonLabel>John Doe</IonLabel>
    </IonChip>
  ),
};

export const Colored: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <IonChip {...args}>
      <IonLabel>Primary Chip</IonLabel>
    </IonChip>
  ),
};

export const Outline: Story = {
  args: {
    outline: true,
    color: 'primary',
  },
  render: (args) => (
    <IonChip {...args}>
      <IonLabel>Outline Chip</IonLabel>
    </IonChip>
  ),
};

export const Multiple: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <IonChip color="primary">
        <IonLabel>JavaScript</IonLabel>
      </IonChip>
      <IonChip color="secondary">
        <IonLabel>React</IonLabel>
      </IonChip>
      <IonChip color="success">
        <IonIcon icon={checkmark} />
        <IonLabel>Ionic</IonLabel>
      </IonChip>
      <IonChip outline color="warning">
        <IonLabel>TypeScript</IonLabel>
        <IonIcon icon={close} />
      </IonChip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <IonChip {...args}>
      <IonLabel>Disabled Chip</IonLabel>
    </IonChip>
  ),
};