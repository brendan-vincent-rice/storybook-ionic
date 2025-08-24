import type { Meta, StoryObj } from '@storybook/react';
import { IonRadio, IonRadioGroup, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';

const meta: Meta<typeof IonRadio> = {
  title: 'Ionic/Ion Radio',
  component: IonRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    value: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonRadio {...args} />
      <IonLabel>Single Radio</IonLabel>
    </IonItem>
  ),
  args: {
    value: 'single',
  },
};

export const Checked: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonRadio {...args} />
      <IonLabel>Checked Radio</IonLabel>
    </IonItem>
  ),
  args: {
    checked: true,
    value: 'checked',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonRadio {...args} />
      <IonLabel>Disabled Radio</IonLabel>
    </IonItem>
  ),
  args: {
    disabled: true,
    value: 'disabled',
  },
};

export const Colored: Story = {
  render: (args) => (
    <IonItem style={{ width: '250px' }}>
      <IonRadio {...args} />
      <IonLabel>Success Color</IonLabel>
    </IonItem>
  ),
  args: {
    checked: true,
    color: 'success',
    value: 'success',
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    
    return (
      <IonRadioGroup 
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value)}
        style={{ width: '300px' }}
      >
        <IonList>
          <IonItem>
            <IonRadio value="option1" />
            <IonLabel>Option 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="option2" />
            <IonLabel>Option 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="option3" />
            <IonLabel>Option 3</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="option4" disabled />
            <IonLabel>Disabled Option</IonLabel>
          </IonItem>
        </IonList>
      </IonRadioGroup>
    );
  },
};

export const ColoredGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('primary');
    
    return (
      <IonRadioGroup 
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value)}
        style={{ width: '300px' }}
      >
        <IonList>
          <IonItem>
            <IonRadio value="primary" color="primary" />
            <IonLabel>Primary</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="secondary" color="secondary" />
            <IonLabel>Secondary</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="success" color="success" />
            <IonLabel>Success</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="warning" color="warning" />
            <IonLabel>Warning</IonLabel>
          </IonItem>
          <IonItem>
            <IonRadio value="danger" color="danger" />
            <IonLabel>Danger</IonLabel>
          </IonItem>
        </IonList>
      </IonRadioGroup>
    );
  },
};