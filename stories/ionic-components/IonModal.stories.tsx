import type { Meta, StoryObj } from '@storybook/react';
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonButtons, IonIcon } from '@ionic/react';
import { checkmark, close } from 'ionicons/icons';
import React, { useState } from 'react';

const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <IonButton onClick={() => setIsOpen(true)}>Open Modal</IonButton>
      <IonModal
        {...args}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

const meta: Meta<typeof IonModal> = {
  title: 'Ionic/Ion Modal',
  component: IonModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backdropDismiss: {
      control: 'boolean',
    },
    showBackdrop: {
      control: 'boolean',
    },
    presentingElement: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    children: (
      <React.Fragment>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Basic Modal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ padding: '20px' }}>
            <h2>Modal Content</h2>
            <p>This is a basic modal with header and content.</p>
          </div>
        </IonContent>
      </React.Fragment>
    ),
  },
};

export const WithCloseButton: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <React.Fragment>
        <IonButton onClick={() => setIsOpen(true)}>Open Modal with Close</IonButton>
        <IonModal
          {...args}
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal with Close</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  <IonIcon icon={close} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div style={{ padding: '20px' }}>
              <h2>Modal with Close Button</h2>
              <p>This modal has a close button in the header.</p>
            </div>
          </IonContent>
        </IonModal>
      </React.Fragment>
    );
  },
};

export const WithList: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    children: (
      <React.Fragment>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Select Item</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>
              <IonLabel>Option 1</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Option 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Option 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Option 4</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </React.Fragment>
    ),
  },
};

export const NoBackdropDismiss: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    backdropDismiss: false,
    children: (
      <React.Fragment>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Cannot Dismiss</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ padding: '20px' }}>
            <h2>Modal that requires action</h2>
            <p>This modal cannot be dismissed by clicking the backdrop.</p>
            <p>You must use a button or programmatic dismiss.</p>
          </div>
        </IonContent>
      </React.Fragment>
    ),
  },
};

export const ConfirmationModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <React.Fragment>
        <IonButton onClick={() => setIsOpen(true)}>Show Confirmation</IonButton>
        <IonModal
          {...args}
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Confirm Action</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div style={{ padding: '20px' }}>
              <h2>Are you sure?</h2>
              <p>This action cannot be undone.</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <IonButton 
                  fill="outline" 
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </IonButton>
                <IonButton 
                  color="danger"
                  onClick={() => {
                    console.log('Confirmed');
                    setIsOpen(false);
                  }}
                >
                  <IonIcon icon={checkmark} slot="start" />
                  Confirm
                </IonButton>
              </div>
            </div>
          </IonContent>
        </IonModal>
      </React.Fragment>
    );
  },
};

export const FullscreenModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <React.Fragment>
        <IonButton onClick={() => setIsOpen(true)}>Open Fullscreen</IonButton>
        <IonModal
          {...args}
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Fullscreen Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div style={{ padding: '20px' }}>
              <h2>Fullscreen Content</h2>
              <p>This modal takes up the full screen.</p>
              <p>Perfect for complex forms or detailed content.</p>
              
              <IonList>
                <IonItem>
                  <IonLabel>
                    <h3>Full Height</h3>
                    <p>Modal extends to full screen height</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h3>Full Width</h3>
                    <p>Modal extends to full screen width</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h3>Scrollable</h3>
                    <p>Content can scroll if it exceeds viewport</p>
                  </IonLabel>
                </IonItem>
              </IonList>
            </div>
          </IonContent>
        </IonModal>
      </React.Fragment>
    );
  },
};