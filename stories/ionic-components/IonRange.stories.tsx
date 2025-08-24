import type { Meta, StoryObj } from '@storybook/react';
import { IonRange, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { volumeLow, volumeHigh, sunny } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonRange> = {
  title: 'Ionic/Ion Range',
  component: IonRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: 'boolean',
    },
    pin: {
      control: 'boolean',
    },
    snaps: {
      control: 'boolean',
    },
    ticks: {
      control: 'boolean',
    },
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
    value: 50,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <IonRange {...args} />
    </div>
  ),
};

export const WithLabels: Story = {
  args: {
    value: 25,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonIcon icon={volumeLow} slot="start" />
      <IonRange {...args} />
      <IonIcon icon={volumeHigh} slot="end" />
    </IonItem>
  ),
};

export const WithPin: Story = {
  args: {
    value: 75,
    pin: true,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <IonLabel>Range with Pin</IonLabel>
      <IonRange {...args} />
    </div>
  ),
};

export const WithSnaps: Story = {
  args: {
    value: 40,
    snaps: true,
    step: 20,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <IonLabel>Range with Snaps (step: 20)</IonLabel>
      <IonRange {...args} />
    </div>
  ),
};

export const WithTicks: Story = {
  args: {
    value: 60,
    ticks: true,
    snaps: true,
    step: 10,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <IonLabel>Range with Ticks</IonLabel>
      <IonRange {...args} />
    </div>
  ),
};

export const Colored: Story = {
  args: {
    value: 80,
    color: 'success',
    pin: true,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <IonLabel>Success Color</IonLabel>
      <IonRange {...args} />
    </div>
  ),
};

export const CustomRange: Story = {
  args: {
    min: -50,
    max: 50,
    value: 0,
    step: 5,
    pin: true,
    snaps: true,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <IonLabel>Custom Range (-50 to 50)</IonLabel>
      <IonRange {...args} />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <IonLabel>Volume</IonLabel>
        <IonItem>
          <IonIcon icon={volumeLow} slot="start" />
          <IonRange value={30} color="primary" />
          <IonIcon icon={volumeHigh} slot="end" />
        </IonItem>
      </div>
      <div>
        <IonLabel>Brightness</IonLabel>
        <IonItem>
          <IonIcon icon={sunny} slot="start" />
          <IonRange value={70} color="warning" />
          <IonIcon icon={sunny} slot="end" />
        </IonItem>
      </div>
      <div>
        <IonLabel>Temperature</IonLabel>
        <IonRange value={22} min={10} max={30} pin color="danger" />
      </div>
    </div>
  ),
};