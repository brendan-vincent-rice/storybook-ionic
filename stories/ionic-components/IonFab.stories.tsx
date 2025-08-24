import type { Meta, StoryObj } from '@storybook/react';
import { IonFab, IonFabButton, IonFabList, IonIcon, IonContent } from '@ionic/react';
import { add, share, heart, bookmark, chevronUp, logoVimeo, logoFacebook, logoTwitter } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonFab> = {
  title: 'Ionic/IonFab',
  component: IonFab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    horizontal: {
      control: 'select',
      options: ['start', 'end', 'center'],
    },
    vertical: {
      control: 'select',
      options: ['top', 'bottom', 'center'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFab: Story = {
  render: (args) => (
    <div style={{ position: 'relative', width: '300px', height: '200px', backgroundColor: '#f0f0f0' }}>
      <IonFab {...args}>
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </div>
  ),
  args: {
    vertical: 'bottom',
    horizontal: 'end',
  },
};

export const WithFabList: Story = {
  render: (args) => (
    <div style={{ position: 'relative', width: '300px', height: '250px', backgroundColor: '#f0f0f0' }}>
      <IonFab {...args}>
        <IonFabButton>
          <IonIcon icon={share} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={logoVimeo} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoTwitter} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </div>
  ),
  args: {
    vertical: 'bottom',
    horizontal: 'center',
  },
};

export const MultipleFabLists: Story = {
  render: (args) => (
    <div style={{ position: 'relative', width: '400px', height: '300px', backgroundColor: '#f0f0f0' }}>
      <IonFab vertical="center" horizontal="center">
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={heart} />
          </IonFabButton>
        </IonFabList>
        <IonFabList side="bottom">
          <IonFabButton>
            <IonIcon icon={bookmark} />
          </IonFabButton>
        </IonFabList>
        <IonFabList side="start">
          <IonFabButton>
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
        </IonFabList>
        <IonFabList side="end">
          <IonFabButton>
            <IonIcon icon={logoTwitter} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </div>
  ),
};

export const TopStart: Story = {
  render: (args) => (
    <div style={{ position: 'relative', width: '300px', height: '200px', backgroundColor: '#f0f0f0' }}>
      <IonFab {...args}>
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </div>
  ),
  args: {
    vertical: 'top',
    horizontal: 'start',
  },
};

export const ColoredFab: Story = {
  render: (args) => (
    <div style={{ position: 'relative', width: '300px', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', gap: '60px', justifyContent: 'space-around', alignItems: 'center' }}>
      <IonFab vertical="center" horizontal="start">
        <IonFabButton color="primary">
          <IonIcon icon={heart} />
        </IonFabButton>
      </IonFab>
      <IonFab vertical="center" horizontal="center">
        <IonFabButton color="secondary">
          <IonIcon icon={share} />
        </IonFabButton>
      </IonFab>
      <IonFab vertical="center" horizontal="end">
        <IonFabButton color="danger">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </div>
  ),
};

export const SizeFabs: Story = {
  render: (args) => (
    <div style={{ position: 'relative', width: '350px', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', gap: '80px', justifyContent: 'space-around', alignItems: 'center' }}>
      <IonFab vertical="center" horizontal="start">
        <IonFabButton size="small">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonFab vertical="center" horizontal="center">
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </div>
  ),
};