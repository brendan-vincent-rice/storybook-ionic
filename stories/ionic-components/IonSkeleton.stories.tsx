import type { Meta, StoryObj } from '@storybook/react';
import { IonSkeletonText, IonItem, IonAvatar, IonLabel, IonList, IonThumbnail, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonSkeletonText> = {
  title: 'Ionic/Ion Skeleton',
  component: IonSkeletonText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    animated: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicText: Story = {
  render: (args) => (
    <div style={{ width: '200px' }}>
      <IonSkeletonText {...args} />
    </div>
  ),
  args: {
    animated: true,
  },
};

export const MultipleLines: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IonSkeletonText animated style={{ width: '80%' }} />
      <IonSkeletonText animated style={{ width: '60%' }} />
      <IonSkeletonText animated style={{ width: '90%' }} />
      <IonSkeletonText animated style={{ width: '40%' }} />
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <IonList style={{ width: '350px' }}>
      {[1, 2, 3].map((item) => (
        <IonItem key={item}>
          <IonAvatar slot="start">
            <IonSkeletonText animated />
          </IonAvatar>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '30%' }} />
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  ),
};

export const ThumbnailList: Story = {
  render: () => (
    <IonList style={{ width: '350px' }}>
      {[1, 2, 3].map((item) => (
        <IonItem key={item}>
          <IonThumbnail slot="start">
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '30%' }} />
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <IonCard style={{ width: '300px' }}>
      <div style={{ height: '200px', background: 'rgba(0,0,0,0.1)' }}>
        <IonSkeletonText animated style={{ width: '100%', height: '100%' }} />
      </div>
      <IonCardHeader>
        <IonSkeletonText animated style={{ width: '70%', height: '28px' }} />
        <IonSkeletonText animated style={{ width: '40%', height: '20px' }} />
      </IonCardHeader>
      <IonCardContent>
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '90%' }} />
        <IonSkeletonText animated style={{ width: '60%' }} />
      </IonCardContent>
    </IonCard>
  ),
};

export const CustomWidths: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IonSkeletonText animated style={{ width: '100%', marginBottom: '10px' }} />
      <IonSkeletonText animated style={{ width: '75%', marginBottom: '10px' }} />
      <IonSkeletonText animated style={{ width: '50%', marginBottom: '10px' }} />
      <IonSkeletonText animated style={{ width: '25%', marginBottom: '10px' }} />
    </div>
  ),
};

export const Static: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IonSkeletonText animated={false} style={{ width: '80%', marginBottom: '10px' }} />
      <IonSkeletonText animated={false} style={{ width: '60%', marginBottom: '10px' }} />
      <IonSkeletonText animated={false} style={{ width: '90%', marginBottom: '10px' }} />
      <IonSkeletonText animated={false} style={{ width: '40%' }} />
    </div>
  ),
};

export const LoadingProfile: Story = {
  render: () => (
    <div style={{ width: '350px', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <IonAvatar style={{ width: '60px', height: '60px', marginRight: '15px' }}>
          <IonSkeletonText animated />
        </IonAvatar>
        <div style={{ flex: 1 }}>
          <IonSkeletonText animated style={{ width: '70%', height: '20px', marginBottom: '5px' }} />
          <IonSkeletonText animated style={{ width: '50%', height: '16px' }} />
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <IonSkeletonText animated style={{ width: '100%', marginBottom: '8px' }} />
        <IonSkeletonText animated style={{ width: '95%', marginBottom: '8px' }} />
        <IonSkeletonText animated style={{ width: '80%', marginBottom: '8px' }} />
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <IonSkeletonText animated style={{ width: '80px', height: '32px' }} />
        <IonSkeletonText animated style={{ width: '80px', height: '32px' }} />
      </div>
    </div>
  ),
};