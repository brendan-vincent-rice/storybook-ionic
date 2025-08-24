import type { Meta, StoryObj } from '@storybook/react';
import { IonDatetime, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonDatetime> = {
  title: 'Ionic/Ion Datetime',
  component: IonDatetime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    presentation: {
      control: 'select',
      options: ['date', 'time', 'date-time', 'time-date', 'month', 'month-year', 'year'],
    },
    preferWheel: {
      control: 'boolean',
    },
    showDefaultTitle: {
      control: 'boolean',
    },
    showDefaultButtons: {
      control: 'boolean',
    },
    showClearButton: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DateOnly: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
  },
};

export const TimeOnly: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'time',
  },
};

export const DateTime: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date-time',
  },
};

export const MonthYear: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'month-year',
  },
};

export const YearOnly: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'year',
  },
};

export const WithDefaultValue: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
    value: '2024-03-15',
  },
};

export const WithMinMax: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
    min: '2024-01-01',
    max: '2024-12-31',
    value: '2024-06-15',
  },
};

export const WheelPicker: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
    preferWheel: true,
  },
};

export const CustomTitle: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date-time',
    showDefaultTitle: true,
  },
};

export const NoButtons: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
    showDefaultButtons: false,
  },
};

export const WithClearButton: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
    showClearButton: true,
    value: '2024-03-15',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date',
    disabled: true,
    value: '2024-03-15',
  },
};

export const ReadOnly: Story = {
  render: (args) => (
    <div style={{ width: '350px' }}>
      <IonDatetime {...args} />
    </div>
  ),
  args: {
    presentation: 'date-time',
    readonly: true,
    value: '2024-03-15T14:30:00',
  },
};

export const MultipleFormats: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>Date Selection</h4>
        <IonDatetime presentation="date" value="2024-03-15" />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>Time Selection</h4>
        <IonDatetime presentation="time" value="14:30" />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>Month/Year Selection</h4>
        <IonDatetime presentation="month-year" value="2024-03" />
      </div>
    </div>
  ),
};

export const InItems: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <IonItem>
        <IonLabel>Date of Birth</IonLabel>
        <IonDatetime 
          presentation="date" 
          value="1990-06-15"
          slot="end"
          style={{ maxWidth: '120px' }}
        />
      </IonItem>
      
      <IonItem>
        <IonLabel>Appointment Time</IonLabel>
        <IonDatetime 
          presentation="time" 
          value="14:30"
          slot="end"
          style={{ maxWidth: '100px' }}
        />
      </IonItem>
      
      <IonItem>
        <IonLabel>Meeting Date & Time</IonLabel>
        <IonDatetime 
          presentation="date-time" 
          value="2024-03-20T16:00"
          slot="end"
          style={{ maxWidth: '180px' }}
        />
      </IonItem>
    </div>
  ),
};