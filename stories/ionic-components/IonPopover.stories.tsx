import type { Meta, StoryObj } from '@storybook/react';
import { IonPopover, IonButton, IonContent, IonList, IonItem, IonLabel, IonCheckbox, IonRadio, IonRadioGroup } from '@ionic/react';
import React, { useState, useRef } from 'react';

const PopoverWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLIonPopoverElement>(null);

  return (
    <React.Fragment>
      <IonButton id="trigger-button" onClick={() => setIsOpen(true)}>Open Popover</IonButton>
      <IonPopover
        {...args}
        ref={popoverRef}
        trigger="trigger-button"
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

const meta: Meta<typeof IonPopover> = {
  title: 'Ionic/Ion Popover',
  component: IonPopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    size: {
      control: 'select',
      options: ['cover', 'auto'],
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
  render: (args) => <PopoverWrapper {...args} />,
  args: {
    children: (
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
        </IonList>
      </IonContent>
    ),
  },
};

export const WithCheckboxes: Story = {
  render: (args) => <PopoverWrapper {...args} />,
  args: {
    children: (
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox checked />
            <IonLabel style={{ marginLeft: '10px' }}>Enable notifications</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox />
            <IonLabel style={{ marginLeft: '10px' }}>Enable location</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox checked />
            <IonLabel style={{ marginLeft: '10px' }}>Auto-sync</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    ),
  },
};

export const WithRadioGroup: Story = {
  render: (args) => <PopoverWrapper {...args} />,
  args: {
    children: (
      <IonContent>
        <div style={{ padding: '10px' }}>
          <h4>Select Theme</h4>
          <IonRadioGroup value="light">
            <IonItem>
              <IonRadio value="light" />
              <IonLabel style={{ marginLeft: '10px' }}>Light</IonLabel>
            </IonItem>
            <IonItem>
              <IonRadio value="dark" />
              <IonLabel style={{ marginLeft: '10px' }}>Dark</IonLabel>
            </IonItem>
            <IonItem>
              <IonRadio value="auto" />
              <IonLabel style={{ marginLeft: '10px' }}>Auto</IonLabel>
            </IonItem>
          </IonRadioGroup>
        </div>
      </IonContent>
    ),
  },
};

export const CustomContent: Story = {
  render: (args) => <PopoverWrapper {...args} />,
  args: {
    children: (
      <IonContent>
        <div style={{ padding: '20px', minWidth: '250px' }}>
          <h3 style={{ margin: '0 0 15px 0' }}>User Profile</h3>
          <div style={{ marginBottom: '10px' }}>
            <strong>Name:</strong> John Doe
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Email:</strong> john@example.com
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>Role:</strong> Administrator
          </div>
          <IonButton size="small" fill="outline">Edit Profile</IonButton>
        </div>
      </IonContent>
    ),
  },
};

export const DifferentSides: Story = {
  render: () => {
    const [activePopover, setActivePopover] = useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <IonButton id="top-trigger" onClick={() => setActivePopover('top')}>Top</IonButton>
        <div style={{ display: 'flex', gap: '10px' }}>
          <IonButton id="left-trigger" onClick={() => setActivePopover('left')}>Left</IonButton>
          <IonButton id="right-trigger" onClick={() => setActivePopover('right')}>Right</IonButton>
        </div>
        <IonButton id="bottom-trigger" onClick={() => setActivePopover('bottom')}>Bottom</IonButton>
        
        <IonPopover
          trigger="top-trigger"
          side="top"
          isOpen={activePopover === 'top'}
          onDidDismiss={() => setActivePopover(null)}
        >
          <IonContent>
            <div style={{ padding: '15px' }}>Popover on top</div>
          </IonContent>
        </IonPopover>
        
        <IonPopover
          trigger="left-trigger"
          side="left"
          isOpen={activePopover === 'left'}
          onDidDismiss={() => setActivePopover(null)}
        >
          <IonContent>
            <div style={{ padding: '15px' }}>Popover on left</div>
          </IonContent>
        </IonPopover>
        
        <IonPopover
          trigger="right-trigger"
          side="right"
          isOpen={activePopover === 'right'}
          onDidDismiss={() => setActivePopover(null)}
        >
          <IonContent>
            <div style={{ padding: '15px' }}>Popover on right</div>
          </IonContent>
        </IonPopover>
        
        <IonPopover
          trigger="bottom-trigger"
          side="bottom"
          isOpen={activePopover === 'bottom'}
          onDidDismiss={() => setActivePopover(null)}
        >
          <IonContent>
            <div style={{ padding: '15px' }}>Popover on bottom</div>
          </IonContent>
        </IonPopover>
      </div>
    );
  },
};

export const NoBackdrop: Story = {
  render: (args) => <PopoverWrapper {...args} />,
  args: {
    showBackdrop: false,
    children: (
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>This popover has no backdrop.</p>
          <p>You can still interact with elements behind it.</p>
        </div>
      </IonContent>
    ),
  },
};

export const NoBackdropDismiss: Story = {
  render: (args) => <PopoverWrapper {...args} />,
  args: {
    backdropDismiss: false,
    children: (
      <IonContent>
        <div style={{ padding: '20px' }}>
          <p>This popover cannot be dismissed by clicking the backdrop.</p>
          <IonButton size="small" onClick={() => {}} style={{ marginTop: '10px' }}>Close</IonButton>
        </div>
      </IonContent>
    ),
  },
};

export const MenuPopover: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <React.Fragment>
        <IonButton id="menu-trigger" onClick={() => setIsOpen(true)}>⋮ Menu</IonButton>
        <IonPopover
          trigger="menu-trigger"
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          side="bottom"
          alignment="start"
        >
          <IonContent>
            <IonList>
              <IonItem button onClick={() => setIsOpen(false)}>
                <IonLabel>Edit</IonLabel>
              </IonItem>
              <IonItem button onClick={() => setIsOpen(false)}>
                <IonLabel>Copy</IonLabel>
              </IonItem>
              <IonItem button onClick={() => setIsOpen(false)}>
                <IonLabel>Move</IonLabel>
              </IonItem>
              <IonItem button onClick={() => setIsOpen(false)}>
                <IonLabel color="danger">Delete</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
      </React.Fragment>
    );
  },
};