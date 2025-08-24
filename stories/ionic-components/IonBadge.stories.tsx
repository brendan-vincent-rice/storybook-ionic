import type { Meta, StoryObj } from '@storybook/react';
import { IonBadge, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { mail, notifications, heart } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonBadge> = {
  title: 'Ionic/IonBadge',
  component: IonBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '1',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: '5',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: '10',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: '!',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    children: '99+',
  },
};

export const WithText: Story = {
  args: {
    color: 'secondary',
    children: 'NEW',
  },
};

export const OnItem: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonIcon icon={mail} slot="start" />
      <IonLabel>Messages</IonLabel>
      <IonBadge {...args} slot="end">5</IonBadge>
    </IonItem>
  ),
  args: {
    color: 'primary',
  },
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '250px' }}>
      <IonItem>
        <IonIcon icon={mail} slot="start" />
        <IonLabel>Email</IonLabel>
        <IonBadge color="primary" slot="end">12</IonBadge>
      </IonItem>
      <IonItem>
        <IonIcon icon={notifications} slot="start" />
        <IonLabel>Notifications</IonLabel>
        <IonBadge color="danger" slot="end">3</IonBadge>
      </IonItem>
      <IonItem>
        <IonIcon icon={heart} slot="start" />
        <IonLabel>Favorites</IonLabel>
        <IonBadge color="success" slot="end">25</IonBadge>
      </IonItem>
    </div>
  ),
};