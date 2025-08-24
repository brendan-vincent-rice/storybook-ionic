import type { Meta, StoryObj } from '@storybook/react';
import { IonLoading, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const LoadingWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const showLoading = () => {
    setIsOpen(true);
    if (args.duration) {
      setTimeout(() => setIsOpen(false), args.duration);
    }
  };

  return (
    <React.Fragment>
      <IonButton onClick={showLoading}>Show Loading</IonButton>
      <IonLoading
        {...args}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

const meta: Meta<typeof IonLoading> = {
  title: 'Ionic/Ion Loading',
  component: IonLoading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
    },
    spinner: {
      control: 'select',
      options: ['bubbles', 'circles', 'circular', 'crescent', 'dots', 'lines', 'lines-small', null],
    },
    backdropDismiss: {
      control: 'boolean',
    },
    showBackdrop: {
      control: 'boolean',
    },
    translucent: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Loading...',
    duration: 2000,
  },
};

export const WithCustomMessage: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Please wait while we process your request...',
    duration: 3000,
  },
};

export const NoMessage: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    duration: 2000,
  },
};

export const CustomSpinner: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Loading with bubbles...',
    spinner: 'bubbles',
    duration: 3000,
  },
};

export const CircularSpinner: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Circular loading...',
    spinner: 'circular',
    duration: 3000,
  },
};

export const DotsSpinner: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Loading with dots...',
    spinner: 'dots',
    duration: 3000,
  },
};

export const LongDuration: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'This will take a while...',
    duration: 5000,
    spinner: 'crescent',
  },
};

export const BackdropDismiss: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Tap backdrop to dismiss',
    backdropDismiss: true,
  },
};

export const NoBackdrop: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Loading without backdrop...',
    showBackdrop: false,
    duration: 3000,
  },
};

export const Translucent: Story = {
  render: (args) => <LoadingWrapper {...args} />,
  args: {
    message: 'Translucent loading...',
    translucent: true,
    duration: 3000,
  },
};

export const MultipleSpinners: Story = {
  render: () => {
    const [activeLoading, setActiveLoading] = useState<string | null>(null);
    
    const showLoading = (type: string, spinner: string) => {
      setActiveLoading(type);
      setTimeout(() => setActiveLoading(null), 2000);
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <IonButton onClick={() => showLoading('bubbles', 'bubbles')}>Bubbles Spinner</IonButton>
        <IonButton onClick={() => showLoading('circles', 'circles')}>Circles Spinner</IonButton>
        <IonButton onClick={() => showLoading('crescent', 'crescent')}>Crescent Spinner</IonButton>
        <IonButton onClick={() => showLoading('lines', 'lines')}>Lines Spinner</IonButton>
        
        <IonLoading
          isOpen={activeLoading === 'bubbles'}
          message="Bubbles Loading..."
          spinner="bubbles"
          onDidDismiss={() => setActiveLoading(null)}
        />
        <IonLoading
          isOpen={activeLoading === 'circles'}
          message="Circles Loading..."
          spinner="circles"
          onDidDismiss={() => setActiveLoading(null)}
        />
        <IonLoading
          isOpen={activeLoading === 'crescent'}
          message="Crescent Loading..."
          spinner="crescent"
          onDidDismiss={() => setActiveLoading(null)}
        />
        <IonLoading
          isOpen={activeLoading === 'lines'}
          message="Lines Loading..."
          spinner="lines"
          onDidDismiss={() => setActiveLoading(null)}
        />
      </div>
    );
  },
};

export const SimulateDataLoading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<string | null>(null);
    
    const loadData = async () => {
      setIsLoading(true);
      setData(null);
      
      // Simulate API call
      setTimeout(() => {
        setData('Data loaded successfully!');
        setIsLoading(false);
      }, 2500);
    };
    
    return (
      <div style={{ textAlign: 'center' }}>
        <IonButton onClick={loadData}>Load Data</IonButton>
        {data && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e8f5e8', borderRadius: '4px' }}>
            {data}
          </div>
        )}
        
        <IonLoading
          isOpen={isLoading}
          message="Loading data from server..."
          spinner="crescent"
        />
      </div>
    );
  },
};