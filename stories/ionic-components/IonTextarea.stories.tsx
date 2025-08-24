import type { Meta, StoryObj } from '@storybook/react';
import { IonTextarea, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonTextarea> = {
  title: 'Ionic/IonTextarea',
  component: IonTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
    },
    cols: {
      control: { type: 'number', min: 10, max: 100 },
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    maxlength: {
      control: { type: 'number' },
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    shape: {
      control: 'select',
      options: ['round'],
    },
    autoGrow: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonTextarea {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Tell us about yourself...',
    rows: 4,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Biography</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const AutoGrow: Story = {
  args: {
    placeholder: 'This textarea will grow as you type...',
    autoGrow: true,
    value: 'Start typing here and watch the textarea expand automatically as you add more lines of text.',
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Auto Growing</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const WithMaxLength: Story = {
  args: {
    placeholder: 'Maximum 100 characters...',
    maxlength: 100,
    value: 'This textarea has a maximum length of 100 characters.',
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Limited Text (100 chars)</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const FixedSize: Story = {
  args: {
    placeholder: 'Fixed size textarea...',
    rows: 6,
    cols: 40,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Fixed Size (6 rows)</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const Filled: Story = {
  args: {
    fill: 'solid',
    placeholder: 'Solid fill textarea...',
    rows: 3,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Solid Fill</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const Outline: Story = {
  args: {
    fill: 'outline',
    placeholder: 'Outline textarea...',
    rows: 3,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Outline Fill</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled',
    rows: 3,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Disabled Textarea</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const ReadOnly: Story = {
  args: {
    readonly: true,
    value: 'This textarea is read-only. You cannot edit this text.',
    rows: 3,
  },
  render: (args) => (
    <IonItem style={{ width: '350px' }}>
      <IonLabel position="stacked">Read Only</IonLabel>
      <IonTextarea {...args} />
    </IonItem>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <IonItem>
        <IonLabel position="stacked">Subject</IonLabel>
        <IonTextarea placeholder="Enter subject..." rows={1} />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Message</IonLabel>
        <IonTextarea 
          placeholder="Enter your message..." 
          rows={4} 
          maxlength={500}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Comments</IonLabel>
        <IonTextarea 
          placeholder="Additional comments..." 
          autoGrow 
          maxlength={200}
        />
      </IonItem>
    </div>
  ),
};