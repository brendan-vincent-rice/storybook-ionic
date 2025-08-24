import type { Meta, StoryObj } from '@storybook/react';
import { IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { call, camera, bookmark, heart } from 'ionicons/icons';
import React, { useState } from 'react';

const meta: Meta<typeof IonSegment> = {
  title: 'Ionic/IonSegment',
  component: IonSegment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
    scrollable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('segment1');
    
    return (
      <IonSegment 
        {...args} 
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value as string)}
      >
        <IonSegmentButton value="segment1">
          <IonLabel>First</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment2">
          <IonLabel>Second</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment3">
          <IonLabel>Third</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    );
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('calls');
    
    return (
      <IonSegment 
        {...args} 
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value as string)}
      >
        <IonSegmentButton value="calls">
          <IonIcon icon={call} />
          <IonLabel>Calls</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="camera">
          <IonIcon icon={camera} />
          <IonLabel>Camera</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="bookmarks">
          <IonIcon icon={bookmark} />
          <IonLabel>Bookmarks</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    );
  },
};

export const IconsOnly: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('heart');
    
    return (
      <IonSegment 
        {...args} 
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value as string)}
      >
        <IonSegmentButton value="heart">
          <IonIcon icon={heart} />
        </IonSegmentButton>
        <IonSegmentButton value="call">
          <IonIcon icon={call} />
        </IonSegmentButton>
        <IonSegmentButton value="camera">
          <IonIcon icon={camera} />
        </IonSegmentButton>
        <IonSegmentButton value="bookmark">
          <IonIcon icon={bookmark} />
        </IonSegmentButton>
      </IonSegment>
    );
  },
};

export const Colored: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('primary');
    
    return (
      <IonSegment 
        {...args} 
        color="secondary"
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value as string)}
      >
        <IonSegmentButton value="primary">
          <IonLabel>Primary</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="secondary">
          <IonLabel>Secondary</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="tertiary">
          <IonLabel>Tertiary</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    );
  },
};

export const Scrollable: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('item1');
    
    return (
      <div style={{ width: '300px' }}>
        <IonSegment 
          {...args} 
          scrollable
          value={selected} 
          onIonChange={(e) => setSelected(e.detail.value as string)}
        >
          <IonSegmentButton value="item1">
            <IonLabel>Item 1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="item2">
            <IonLabel>Item 2</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="item3">
            <IonLabel>Item 3</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="item4">
            <IonLabel>Item 4</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="item5">
            <IonLabel>Item 5</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="item6">
            <IonLabel>Item 6</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('option1');
    
    return (
      <IonSegment 
        {...args} 
        disabled
        value={selected} 
        onIonChange={(e) => setSelected(e.detail.value as string)}
      >
        <IonSegmentButton value="option1">
          <IonLabel>Option 1</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="option2">
          <IonLabel>Option 2</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="option3">
          <IonLabel>Option 3</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    );
  },
};