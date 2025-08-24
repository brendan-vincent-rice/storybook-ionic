import type { Meta, StoryObj } from '@storybook/react';
import { IonIcon } from '@ionic/react';
import { 
  heart, 
  star, 
  home, 
  person, 
  settings, 
  mail, 
  call, 
  camera, 
  chevronForward,
  checkmark,
  close,
  add,
  remove,
  search,
  menu,
  arrowBack,
  arrowForward,
  logoApple,
  logoGoogle,
  logoTwitter,
  logoFacebook
} from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonIcon> = {
  title: 'Ionic/Ion Icon',
  component: IonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: [
        'heart', 'star', 'home', 'person', 'settings', 'mail', 
        'call', 'camera', 'chevronForward', 'checkmark', 'close',
        'add', 'remove', 'search', 'menu', 'arrowBack', 'arrowForward'
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: heart,
  },
};

export const Small: Story = {
  args: {
    icon: star,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    icon: home,
    size: 'large',
  },
};

export const Colored: Story = {
  args: {
    icon: heart,
    color: 'danger',
  },
};

export const CustomSize: Story = {
  render: (args) => (
    <IonIcon 
      {...args} 
      style={{ fontSize: '48px' }}
    />
  ),
  args: {
    icon: star,
    color: 'warning',
  },
};

export const CommonIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', alignItems: 'center', justifyItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={home} size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Home</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={person} size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Person</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={settings} size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Settings</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={mail} size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Mail</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={call} size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Call</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={camera} size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Camera</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={heart} size="large" color="danger" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Heart</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IonIcon icon={star} size="large" color="warning" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Star</div>
      </div>
    </div>
  ),
};

export const ActionIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <IonIcon icon={add} size="large" color="success" />
      <IonIcon icon={remove} size="large" color="danger" />
      <IonIcon icon={checkmark} size="large" color="success" />
      <IonIcon icon={close} size="large" color="danger" />
      <IonIcon icon={search} size="large" color="primary" />
      <IonIcon icon={menu} size="large" color="medium" />
    </div>
  ),
};

export const NavigationIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <IonIcon icon={arrowBack} size="large" />
      <IonIcon icon={arrowForward} size="large" />
      <IonIcon icon={chevronForward} size="large" />
    </div>
  ),
};

export const BrandIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <IonIcon icon={logoApple} size="large" />
      <IonIcon icon={logoGoogle} size="large" />
      <IonIcon icon={logoTwitter} size="large" color="primary" />
      <IonIcon icon={logoFacebook} size="large" color="primary" />
    </div>
  ),
};

export const ColoredIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <IonIcon icon={heart} size="large" color="primary" />
      <IonIcon icon={heart} size="large" color="secondary" />
      <IonIcon icon={heart} size="large" color="success" />
      <IonIcon icon={heart} size="large" color="warning" />
      <IonIcon icon={heart} size="large" color="danger" />
      <IonIcon icon={heart} size="large" color="dark" />
    </div>
  ),
};