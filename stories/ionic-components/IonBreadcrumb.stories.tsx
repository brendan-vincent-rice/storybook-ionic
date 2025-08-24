import type { Meta, StoryObj } from '@storybook/react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { home, folder, document, chevronForward } from 'ionicons/icons';
import React from 'react';

const meta: Meta<typeof IonBreadcrumb> = {
  title: 'Ionic/Ion Breadcrumb',
  component: IonBreadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    download: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    rel: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb active>
        Cameras
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        <IonIcon icon={home} slot="start" />
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#documents">
        <IonIcon icon={folder} slot="start" />
        Documents
      </IonBreadcrumb>
      <IonBreadcrumb href="#projects">
        <IonIcon icon={folder} slot="start" />
        Projects
      </IonBreadcrumb>
      <IonBreadcrumb active>
        <IonIcon icon={document} slot="start" />
        README.md
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        <IonIcon icon={home} />
      </IonBreadcrumb>
      <IonBreadcrumb href="#folder1">
        <IonIcon icon={folder} />
      </IonBreadcrumb>
      <IonBreadcrumb href="#folder2">
        <IonIcon icon={folder} />
      </IonBreadcrumb>
      <IonBreadcrumb active>
        <IonIcon icon={document} />
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb disabled>
        Restricted Area
      </IonBreadcrumb>
      <IonBreadcrumb href="#public">
        Public
      </IonBreadcrumb>
      <IonBreadcrumb active>
        Current Page
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#level1">
        Level 1
      </IonBreadcrumb>
      <IonBreadcrumb href="#level2">
        Level 2
      </IonBreadcrumb>
      <IonBreadcrumb href="#level3">
        Level 3
      </IonBreadcrumb>
      <IonBreadcrumb active>
        Current
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};

export const LongPath: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <IonBreadcrumbs>
        <IonBreadcrumb href="#root">
          <IonIcon icon={home} slot="start" />
          Root
        </IonBreadcrumb>
        <IonBreadcrumb href="#users">
          Users
        </IonBreadcrumb>
        <IonBreadcrumb href="#username">
          john.doe
        </IonBreadcrumb>
        <IonBreadcrumb href="#documents">
          Documents
        </IonBreadcrumb>
        <IonBreadcrumb href="#projects">
          Projects
        </IonBreadcrumb>
        <IonBreadcrumb href="#webapp">
          WebApp
        </IonBreadcrumb>
        <IonBreadcrumb href="#src">
          src
        </IonBreadcrumb>
        <IonBreadcrumb active>
          components
        </IonBreadcrumb>
      </IonBreadcrumbs>
    </div>
  ),
};

export const FileSystem: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="/">
        <IonIcon icon={home} slot="start" />
        /
      </IonBreadcrumb>
      <IonBreadcrumb href="/var">
        <IonIcon icon={folder} slot="start" />
        var
      </IonBreadcrumb>
      <IonBreadcrumb href="/var/www">
        <IonIcon icon={folder} slot="start" />
        www
      </IonBreadcrumb>
      <IonBreadcrumb href="/var/www/html">
        <IonIcon icon={folder} slot="start" />
        html
      </IonBreadcrumb>
      <IonBreadcrumb active>
        <IonIcon icon={document} slot="start" />
        index.html
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};

export const ECommerce: Story = {
  render: () => (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        <IonIcon icon={home} slot="start" />
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#category">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#subcategory">
        Smartphones
      </IonBreadcrumb>
      <IonBreadcrumb href="#brand">
        Apple
      </IonBreadcrumb>
      <IonBreadcrumb active>
        iPhone 15 Pro
      </IonBreadcrumb>
    </IonBreadcrumbs>
  ),
};