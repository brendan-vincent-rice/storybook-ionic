import type { Meta, StoryObj } from '@storybook/react';
import { IonProgressBar, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonProgressBar> = {
  title: 'Ionic/IonProgressBar',
  component: IonProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    buffer: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    type: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    reversed: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0.5,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <IonProgressBar {...args} />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    type: 'indeterminate',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <IonProgressBar {...args} />
    </div>
  ),
};

export const WithBuffer: Story = {
  args: {
    value: 0.4,
    buffer: 0.7,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <IonProgressBar {...args} />
    </div>
  ),
};

export const Colored: Story = {
  args: {
    value: 0.6,
    color: 'success',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <IonProgressBar {...args} />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <IonLabel>Loading (25%)</IonLabel>
        <IonProgressBar value={0.25} color="primary" />
      </div>
      <div>
        <IonLabel>Progress (50%)</IonLabel>
        <IonProgressBar value={0.5} color="secondary" />
      </div>
      <div>
        <IonLabel>Almost Done (75%)</IonLabel>
        <IonProgressBar value={0.75} color="warning" />
      </div>
      <div>
        <IonLabel>Complete (100%)</IonLabel>
        <IonProgressBar value={1.0} color="success" />
      </div>
      <div>
        <IonLabel>Processing...</IonLabel>
        <IonProgressBar type="indeterminate" color="medium" />
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IonItem>
        <IonLabel>
          <h3>Download Progress</h3>
          <p>50% complete</p>
        </IonLabel>
      </IonItem>
      <IonProgressBar value={0.5} color="primary" />
      
      <IonItem>
        <IonLabel>
          <h3>Upload Progress</h3>
          <p>Processing...</p>
        </IonLabel>
      </IonItem>
      <IonProgressBar type="indeterminate" color="secondary" />
    </div>
  ),
};