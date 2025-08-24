import type { Meta, StoryObj } from '@storybook/react';
import { IonList, IonItem, IonLabel, IonIcon, IonAvatar, IonThumbnail, IonNote } from '@ionic/react';
import { chevronForward, star, heart, bookmark } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonList> = {
  title: 'Ionic/Ion List',
  component: IonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inset: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <IonList {...args} style={{ width: '300px' }}>
      <IonItem>
        <IonLabel>Item 1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Item 2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Item 3</IonLabel>
      </IonItem>
    </IonList>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <IonList {...args} style={{ width: '300px' }}>
      <IonItem>
        <IonIcon icon={star} slot="start" />
        <IonLabel>Favorites</IonLabel>
        <IonIcon icon={chevronForward} slot="end" />
      </IonItem>
      <IonItem>
        <IonIcon icon={heart} slot="start" />
        <IonLabel>Liked Items</IonLabel>
        <IonIcon icon={chevronForward} slot="end" />
      </IonItem>
      <IonItem>
        <IonIcon icon={bookmark} slot="start" />
        <IonLabel>Bookmarks</IonLabel>
        <IonIcon icon={chevronForward} slot="end" />
      </IonItem>
    </IonList>
  ),
};

export const WithDetails: Story = {
  render: (args) => (
    <IonList {...args} style={{ width: '300px' }}>
      <IonItem>
        <IonLabel>
          <h2>John Doe</h2>
          <p>Software Developer</p>
        </IonLabel>
        <IonNote slot="end">Online</IonNote>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Jane Smith</h2>
          <p>Product Manager</p>
        </IonLabel>
        <IonNote slot="end">Away</IonNote>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Bob Johnson</h2>
          <p>Designer</p>
        </IonLabel>
        <IonNote slot="end">Busy</IonNote>
      </IonItem>
    </IonList>
  ),
};

export const WithAvatars: Story = {
  render: (args) => (
    <IonList {...args} style={{ width: '300px' }}>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" />
        </IonAvatar>
        <IonLabel>
          <h2>John Doe</h2>
          <p>Available for chat</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" />
        </IonAvatar>
        <IonLabel>
          <h2>Jane Smith</h2>
          <p>Last seen 2 hours ago</p>
        </IonLabel>
      </IonItem>
    </IonList>
  ),
};

export const Inset: Story = {
  args: {
    inset: true,
  },
  render: (args) => (
    <div style={{ width: '350px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <IonList {...args}>
        <IonItem>
          <IonLabel>Inset Item 1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Inset Item 2</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Inset Item 3</IonLabel>
        </IonItem>
      </IonList>
    </div>
  ),
};