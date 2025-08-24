import type { Meta, StoryObj } from '@storybook/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonCard> = {
  title: 'Ionic/Ion Card',
  component: IonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    button: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <IonCard {...args} style={{ width: '300px' }}>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        This is card content. You can put any information here that you'd like to display in a card format.
      </IonCardContent>
    </IonCard>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <IonCard {...args} style={{ width: '300px' }}>
      <IonCardHeader>
        <IonCardTitle>Interactive Card</IonCardTitle>
        <IonCardSubtitle>With Action Button</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>This card includes an action button.</p>
        <IonButton fill="clear">Learn More</IonButton>
      </IonCardContent>
    </IonCard>
  ),
};

export const Colored: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <IonCard {...args} style={{ width: '300px' }}>
      <IonCardHeader>
        <IonCardTitle>Colored Card</IonCardTitle>
        <IonCardSubtitle>Primary Color</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        This card has a primary color applied to it.
      </IonCardContent>
    </IonCard>
  ),
};

export const ButtonCard: Story = {
  args: {
    button: true,
  },
  render: (args) => (
    <IonCard {...args} style={{ width: '300px', cursor: 'pointer' }}>
      <IonCardHeader>
        <IonCardTitle>Clickable Card</IonCardTitle>
        <IonCardSubtitle>Entire card is clickable</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        This entire card acts as a button and can be clicked.
      </IonCardContent>
    </IonCard>
  ),
};