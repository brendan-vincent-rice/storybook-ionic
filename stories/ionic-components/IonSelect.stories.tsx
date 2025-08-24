import type { Meta, StoryObj } from '@storybook/react';
import { IonSelect, IonSelectOption, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonSelect> = {
  title: 'Ionic/Ion Select',
  component: IonSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    multiple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    interface: {
      control: 'select',
      options: ['alert', 'popover', 'action-sheet'],
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    shape: {
      control: 'select',
      options: ['round'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel>Single Select</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="option1">Option 1</IonSelectOption>
        <IonSelectOption value="option2">Option 2</IonSelectOption>
        <IonSelectOption value="option3">Option 3</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Choose...',
    value: 'option2',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Favorite Color</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="red">Red</IonSelectOption>
        <IonSelectOption value="green">Green</IonSelectOption>
        <IonSelectOption value="blue">Blue</IonSelectOption>
        <IonSelectOption value="yellow">Yellow</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const Multiple: Story = {
  args: {
    placeholder: 'Select multiple',
    multiple: true,
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel position="stacked">Technologies</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="react">React</IonSelectOption>
        <IonSelectOption value="vue">Vue</IonSelectOption>
        <IonSelectOption value="angular">Angular</IonSelectOption>
        <IonSelectOption value="ionic">Ionic</IonSelectOption>
        <IonSelectOption value="stencil">Stencil</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const AlertInterface: Story = {
  args: {
    interface: 'alert',
    placeholder: 'Select with Alert',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel>Alert Interface</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="small">Small</IonSelectOption>
        <IonSelectOption value="medium">Medium</IonSelectOption>
        <IonSelectOption value="large">Large</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const PopoverInterface: Story = {
  args: {
    interface: 'popover',
    placeholder: 'Select with Popover',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel>Popover Interface</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="option1">First Option</IonSelectOption>
        <IonSelectOption value="option2">Second Option</IonSelectOption>
        <IonSelectOption value="option3">Third Option</IonSelectOption>
        <IonSelectOption value="option4">Fourth Option</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const ActionSheetInterface: Story = {
  args: {
    interface: 'action-sheet',
    placeholder: 'Select with Action Sheet',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel>Action Sheet</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="edit">Edit</IonSelectOption>
        <IonSelectOption value="delete">Delete</IonSelectOption>
        <IonSelectOption value="share">Share</IonSelectOption>
        <IonSelectOption value="archive">Archive</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'disabled',
    placeholder: 'Disabled select',
  },
  render: (args) => (
    <IonItem style={{ width: '300px' }}>
      <IonLabel>Disabled Select</IonLabel>
      <IonSelect {...args}>
        <IonSelectOption value="disabled">Cannot select</IonSelectOption>
      </IonSelect>
    </IonItem>
  ),
};

export const WithFill: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <IonItem>
        <IonLabel position="stacked">Outline Fill</IonLabel>
        <IonSelect fill="outline" placeholder="Outline select">
          <IonSelectOption value="opt1">Option 1</IonSelectOption>
          <IonSelectOption value="opt2">Option 2</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Solid Fill</IonLabel>
        <IonSelect fill="solid" placeholder="Solid select">
          <IonSelectOption value="opt1">Option 1</IonSelectOption>
          <IonSelectOption value="opt2">Option 2</IonSelectOption>
        </IonSelect>
      </IonItem>
    </div>
  ),
};