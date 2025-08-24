import type { Meta, StoryObj } from '@storybook/react';
import { IonActionSheet, IonButton } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, archive, clipboard } from 'ionicons/icons';
import React, { useState } from 'react';

const ActionSheetWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <IonButton onClick={() => setIsOpen(true)}>Show Action Sheet</IonButton>
      <IonActionSheet
        {...args}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

const meta: Meta<typeof IonActionSheet> = {
  title: 'Ionic/Ion ActionSheet',
  component: IonActionSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
    },
    subHeader: {
      control: 'text',
    },
    backdropDismiss: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => <ActionSheetWrapper {...args} />,
  args: {
    header: 'Photo Options',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          console.log('Delete clicked');
        },
      },
      {
        text: 'Share',
        icon: share,
        handler: () => {
          console.log('Share clicked');
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ],
  },
};

export const WithSubHeader: Story = {
  render: (args) => <ActionSheetWrapper {...args} />,
  args: {
    header: 'Document Actions',
    subHeader: 'Select an action to perform',
    buttons: [
      {
        text: 'Copy',
        icon: clipboard,
      },
      {
        text: 'Archive',
        icon: archive,
      },
      {
        text: 'Favorite',
        icon: heart,
      },
      {
        text: 'Cancel',
        role: 'cancel',
      },
    ],
  },
};

export const WithoutCancel: Story = {
  render: (args) => <ActionSheetWrapper {...args} />,
  args: {
    header: 'Select Option',
    buttons: [
      {
        text: 'Option 1',
        handler: () => console.log('Option 1'),
      },
      {
        text: 'Option 2',
        handler: () => console.log('Option 2'),
      },
      {
        text: 'Option 3',
        handler: () => console.log('Option 3'),
      },
    ],
  },
};

export const NoBackdropDismiss: Story = {
  render: (args) => <ActionSheetWrapper {...args} />,
  args: {
    backdropDismiss: false,
    header: 'Required Action',
    subHeader: 'You must select one of the options',
    buttons: [
      {
        text: 'Confirm',
        handler: () => console.log('Confirmed'),
      },
      {
        text: 'Decline',
        role: 'destructive',
        handler: () => console.log('Declined'),
      },
    ],
  },
};

export const ManyOptions: Story = {
  render: (args) => <ActionSheetWrapper {...args} />,
  args: {
    header: 'Choose Action',
    buttons: [
      { text: 'Archive', icon: archive },
      { text: 'Copy', icon: clipboard },
      { text: 'Delete', role: 'destructive', icon: trash },
      { text: 'Favorite', icon: heart },
      { text: 'Move', icon: caretForwardCircle },
      { text: 'Share', icon: share },
      { text: 'Cancel', role: 'cancel' },
    ],
  },
};