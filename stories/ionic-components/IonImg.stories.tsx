import type { Meta, StoryObj } from '@storybook/react';
import { IonImg, IonCard, IonCardContent, IonItem, IonThumbnail, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonImg> = {
  title: 'Ionic/Ion Img',
  component: IonImg,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImageUrl = 'https://ionicframework.com/docs/img/demos/card-media.png';
const avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';
const landscapeUrl = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop';
const portraitUrl = 'https://images.unsplash.com/photo-1494790108755-2616c90f3c7a?w=300&h=400&fit=crop';

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <IonImg {...args} />
    </div>
  ),
  args: {
    src: sampleImageUrl,
    alt: 'Sample image',
  },
};

export const WithFixedSize: Story = {
  render: (args) => (
    <div style={{ width: '200px', height: '200px' }}>
      <IonImg {...args} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  ),
  args: {
    src: landscapeUrl,
    alt: 'Landscape image',
  },
};

export const InCard: Story = {
  render: () => (
    <IonCard style={{ width: '300px' }}>
      <IonImg src={sampleImageUrl} alt="Card image" />
      <IonCardContent>
        <h2>Beautiful Landscape</h2>
        <p>This image is displayed within an Ionic card component.</p>
      </IonCardContent>
    </IonCard>
  ),
};

export const AsThumbnail: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IonItem>
        <IonThumbnail slot="start">
          <IonImg src={portraitUrl} alt="Profile" />
        </IonThumbnail>
        <IonLabel>
          <h2>Profile Image</h2>
          <p>Using IonImg in a thumbnail</p>
        </IonLabel>
      </IonItem>
    </div>
  ),
};

export const ResponsiveImages: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Large Image</h4>
        <IonImg src={landscapeUrl} alt="Large landscape" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <h4>Medium</h4>
          <IonImg src={sampleImageUrl} alt="Medium image" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h4>Medium</h4>
          <IonImg src={portraitUrl} alt="Medium image" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '80px' }}>
          <h4>Small</h4>
          <IonImg src={avatarUrl} alt="Small image" style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '80px' }}>
          <h4>Small</h4>
          <IonImg src={portraitUrl} alt="Small image" style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '80px' }}>
          <h4>Small</h4>
          <IonImg src={landscapeUrl} alt="Small image" style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h3 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>Image Gallery</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        <IonImg src={landscapeUrl} alt="Gallery image 1" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
        <IonImg src={portraitUrl} alt="Gallery image 2" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
        <IonImg src={sampleImageUrl} alt="Gallery image 3" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
        <IonImg src={avatarUrl} alt="Gallery image 4" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      </div>
    </div>
  ),
};

export const WithErrorFallback: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Valid Image</h4>
        <IonImg src={sampleImageUrl} alt="Valid image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      </div>
      
      <div>
        <h4>Broken Image URL</h4>
        <IonImg 
          src="https://broken-url-that-doesnt-exist.jpg" 
          alt="Broken image" 
          style={{ 
            width: '100%', 
            height: '150px', 
            objectFit: 'cover',
            backgroundColor: '#f4f4f4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
        />
      </div>
    </div>
  ),
};

export const RoundedImages: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <div>
        <h4>Circle Avatar</h4>
        <IonImg 
          src={portraitUrl} 
          alt="Circle avatar" 
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            objectFit: 'cover'
          }} 
        />
      </div>
      
      <div>
        <h4>Rounded Rectangle</h4>
        <IonImg 
          src={landscapeUrl} 
          alt="Rounded image" 
          style={{ 
            width: '200px', 
            height: '120px', 
            borderRadius: '12px', 
            objectFit: 'cover'
          }} 
        />
      </div>
    </div>
  ),
};