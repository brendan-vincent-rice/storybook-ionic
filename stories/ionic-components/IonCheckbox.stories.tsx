import type { Meta, StoryObj } from '@storybook/react';
import { IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonCheckbox> = {
  title: 'Ionic/IonCheckbox',
  component: IonCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'space-between'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonCheckbox {...args} />
      <IonLabel>Default Checkbox</IonLabel>
    </IonItem>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonCheckbox {...args} />
      <IonLabel>Checked Checkbox</IonLabel>
    </IonItem>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonCheckbox {...args} />
      <IonLabel>Indeterminate Checkbox</IonLabel>
    </IonItem>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonCheckbox {...args} />
      <IonLabel>Disabled Checkbox</IonLabel>
    </IonItem>
  ),
};

export const Colored: Story = {
  args: {
    checked: true,
    color: 'success',
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonCheckbox {...args} />
      <IonLabel>Success Color</IonLabel>
    </IonItem>
  ),
};

export const JustifyEnd: Story = {
  args: {
    justify: 'end',
  },
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonLabel>Checkbox at End</IonLabel>
      <IonCheckbox {...args} />
    </IonItem>
  ),
};

export const CheckboxList: Story = {
  render: () => (
    <IonList style={{ width: '300px' }}>
      <IonItem>
        <IonCheckbox checked />
        <IonLabel>Completed Task</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox />
        <IonLabel>Pending Task</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox indeterminate />
        <IonLabel>Partially Complete</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox disabled />
        <IonLabel>Disabled Task</IonLabel>
      </IonItem>
    </IonList>
  ),
};

export const MultipleColors: Story = {
  render: () => (
    <IonList style={{ width: '300px' }}>
      <IonItem>
        <IonCheckbox checked color="primary" />
        <IonLabel>Primary</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox checked color="secondary" />
        <IonLabel>Secondary</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox checked color="success" />
        <IonLabel>Success</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox checked color="warning" />
        <IonLabel>Warning</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox checked color="danger" />
        <IonLabel>Danger</IonLabel>
      </IonItem>
    </IonList>
  ),
};