import type { Meta, StoryObj } from '@storybook/react';
import { IonAvatar, IonItem, IonLabel, IonList, IonChip } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonAvatar> = {
  title: 'Ionic/IonAvatar',
  component: IonAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <IonAvatar>
      <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" />
    </IonAvatar>
  ),
};

export const Small: Story = {
  render: () => (
    <IonAvatar style={{ width: '32px', height: '32px' }}>
      <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Small Avatar" />
    </IonAvatar>
  ),
};

export const Large: Story = {
  render: () => (
    <IonAvatar style={{ width: '80px', height: '80px' }}>
      <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Large Avatar" />
    </IonAvatar>
  ),
};

export const InList: Story = {
  render: () => (
    <IonList style={{ width: '300px' }}>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="User 1" />
        </IonAvatar>
        <IonLabel>
          <h2>John Doe</h2>
          <p>Software Engineer</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="User 2" />
        </IonAvatar>
        <IonLabel>
          <h2>Jane Smith</h2>
          <p>Product Manager</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="User 3" />
        </IonAvatar>
        <IonLabel>
          <h2>Bob Johnson</h2>
          <p>UX Designer</p>
        </IonLabel>
      </IonItem>
    </IonList>
  ),
};

export const InChip: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <IonChip>
        <IonAvatar>
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="User" />
        </IonAvatar>
        <IonLabel>John Doe</IonLabel>
      </IonChip>
      <IonChip>
        <IonAvatar>
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="User" />
        </IonAvatar>
        <IonLabel>Jane Smith</IonLabel>
      </IonChip>
      <IonChip>
        <IonAvatar>
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="User" />
        </IonAvatar>
        <IonLabel>Bob Johnson</IonLabel>
      </IonChip>
    </div>
  ),
};

export const MultipleSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <IonAvatar style={{ width: '24px', height: '24px' }}>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="XS" />
      </IonAvatar>
      <IonAvatar style={{ width: '32px', height: '32px' }}>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="S" />
      </IonAvatar>
      <IonAvatar style={{ width: '48px', height: '48px' }}>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="M" />
      </IonAvatar>
      <IonAvatar style={{ width: '64px', height: '64px' }}>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="L" />
      </IonAvatar>
      <IonAvatar style={{ width: '96px', height: '96px' }}>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="XL" />
      </IonAvatar>
    </div>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '15px' }}>
      <IonAvatar style={{ backgroundColor: '#3880ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>JD</span>
      </IonAvatar>
      <IonAvatar style={{ backgroundColor: '#10dc60', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>JS</span>
      </IonAvatar>
      <IonAvatar style={{ backgroundColor: '#f04141', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>BJ</span>
      </IonAvatar>
    </div>
  ),
};