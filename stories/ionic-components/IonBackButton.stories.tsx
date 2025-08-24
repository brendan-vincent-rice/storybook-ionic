import type { Meta, StoryObj } from '@storybook/react';
import { IonBackButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonItem, IonLabel } from '@ionic/react';
import { arrowBack, chevronBack, caretBack } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonBackButton> = {
  title: 'Ionic/IonBackButton',
  component: IonBackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultHref: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ['arrowBack', 'chevronBack', 'caretBack'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '400px', border: '1px solid #ddd' }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton {...args} />
          </IonButtons>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>This is a page with a back button in the header.</p>
        </div>
      </IonContent>
    </div>
  ),
  args: {
    defaultHref: '/home',
  },
};

export const WithText: Story = {
  render: (args) => (
    <div style={{ width: '400px', border: '1px solid #ddd' }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton {...args} />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>Back button with custom text.</p>
        </div>
      </IonContent>
    </div>
  ),
  args: {
    text: 'Home',
    defaultHref: '/home',
  },
};

export const CustomIcon: Story = {
  render: (args) => (
    <div style={{ width: '400px', border: '1px solid #ddd' }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton {...args} />
          </IonButtons>
          <IonTitle>Custom Icon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>Back button with custom icon.</p>
        </div>
      </IonContent>
    </div>
  ),
  args: {
    icon: chevronBack,
    defaultHref: '/home',
  },
};

export const Colored: Story = {
  render: (args) => (
    <div style={{ width: '400px', border: '1px solid #ddd' }}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton {...args} />
          </IonButtons>
          <IonTitle>Colored Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>Back button on colored toolbar.</p>
        </div>
      </IonContent>
    </div>
  ),
  args: {
    color: 'light',
    defaultHref: '/home',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ width: '400px', border: '1px solid #ddd' }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton {...args} />
          </IonButtons>
          <IonTitle>Disabled Back</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>Disabled back button (not clickable).</p>
        </div>
      </IonContent>
    </div>
  ),
  args: {
    disabled: true,
    defaultHref: '/home',
  },
};

export const WithTextAndIcon: Story = {
  render: (args) => (
    <div style={{ width: '400px', border: '1px solid #ddd' }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton {...args} />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>Back button with both custom text and icon.</p>
        </div>
      </IonContent>
    </div>
  ),
  args: {
    text: 'Dashboard',
    icon: caretBack,
    defaultHref: '/dashboard',
  },
};

export const InList: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <div style={{ marginBottom: '20px', border: '1px solid #ddd' }}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Default Style</IonTitle>
          </IonToolbar>
        </IonHeader>
      </div>
      
      <div style={{ marginBottom: '20px', border: '1px solid #ddd' }}>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonButtons slot="start">
              <IonBackButton text="Back" color="light" defaultHref="/home" />
            </IonButtons>
            <IonTitle>With Text</IonTitle>
          </IonToolbar>
        </IonHeader>
      </div>
      
      <div style={{ border: '1px solid #ddd' }}>
        <IonHeader>
          <IonToolbar color="success">
            <IonButtons slot="start">
              <IonBackButton icon={chevronBack} text="Home" color="light" defaultHref="/home" />
            </IonButtons>
            <IonTitle>Custom</IonTitle>
          </IonToolbar>
        </IonHeader>
      </div>
    </div>
  ),
};