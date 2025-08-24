import type { Meta, StoryObj } from '@storybook/react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { chevronDown, information, settings, person } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonAccordion> = {
  title: 'Ionic/IonAccordion',
  component: IonAccordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: (args) => (
    <div style={{ width: '400px' }}>
      <IonAccordionGroup>
        <IonAccordion {...args} value="single">
          <IonItem slot="header" color="light">
            <IonLabel>Single Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This is the content inside a single accordion item. Click the header to toggle visibility.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <IonAccordionGroup multiple>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonIcon icon={information} slot="start" />
            <IonLabel>Information</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This accordion contains general information about the topic.
          </div>
        </IonAccordion>
        
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonIcon icon={settings} slot="start" />
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Configuration options and settings can be found here.
          </div>
        </IonAccordion>
        
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonIcon icon={person} slot="start" />
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            User profile information and account details.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <IonAccordionGroup>
        <IonAccordion value="enabled">
          <IonItem slot="header" color="light">
            <IonLabel>Enabled Section</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This accordion section is enabled and can be opened.
          </div>
        </IonAccordion>
        
        <IonAccordion value="disabled" disabled>
          <IonItem slot="header" color="medium">
            <IonLabel>Disabled Section</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This section is disabled and cannot be opened.
          </div>
        </IonAccordion>
        
        <IonAccordion value="another">
          <IonItem slot="header" color="light">
            <IonLabel>Another Section</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Another enabled accordion section.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  ),
};

export const ExpandedByDefault: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <IonAccordionGroup value="expanded">
        <IonAccordion value="collapsed">
          <IonItem slot="header" color="light">
            <IonLabel>Collapsed by Default</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This section starts collapsed.
          </div>
        </IonAccordion>
        
        <IonAccordion value="expanded">
          <IonItem slot="header" color="primary">
            <IonLabel>Expanded by Default</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This section starts expanded and is visible on page load.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <IonAccordionGroup readonly>
        <IonAccordion value="readonly1">
          <IonItem slot="header" color="light">
            <IonLabel>Read-Only Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            This accordion is read-only and cannot be toggled by user interaction.
          </div>
        </IonAccordion>
        
        <IonAccordion value="readonly2">
          <IonItem slot="header" color="light">
            <IonLabel>Another Read-Only</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Another read-only accordion section.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div style={{ width: '450px' }}>
      <h3 style={{ textAlign: 'center', margin: '0 0 16px 0' }}>Frequently Asked Questions</h3>
      <IonAccordionGroup>
        <IonAccordion value="q1">
          <IonItem slot="header" color="light">
            <IonLabel>What is Ionic?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Ionic is an open-source framework for building cross-platform mobile and web applications using web technologies like HTML, CSS, and JavaScript.
          </div>
        </IonAccordion>
        
        <IonAccordion value="q2">
          <IonItem slot="header" color="light">
            <IonLabel>How do I get started?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            You can get started by installing the Ionic CLI with npm install -g @ionic/cli, then create a new project with ionic start.
          </div>
        </IonAccordion>
        
        <IonAccordion value="q3">
          <IonItem slot="header" color="light">
            <IonLabel>Is Ionic free?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Yes, Ionic is completely free and open-source. There are also premium features available through Ionic Enterprise.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  ),
};