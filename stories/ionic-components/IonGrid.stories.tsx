import type { Meta, StoryObj } from '@storybook/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';

const meta: Meta<typeof IonGrid> = {
  title: 'Ionic/Ion Grid',
  component: IonGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fixed: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const columnStyle = {
  backgroundColor: '#3880ff',
  color: 'white',
  textAlign: 'center' as const,
  padding: '10px',
  margin: '2px',
  borderRadius: '4px',
};

export const Basic: Story = {
  render: (args) => (
    <IonGrid {...args}>
      <IonRow>
        <IonCol style={columnStyle}>Col 1</IonCol>
        <IonCol style={columnStyle}>Col 2</IonCol>
        <IonCol style={columnStyle}>Col 3</IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const EqualWidth: Story = {
  render: () => (
    <IonGrid>
      <IonRow>
        <IonCol style={columnStyle}>Equal</IonCol>
        <IonCol style={columnStyle}>Equal</IonCol>
        <IonCol style={columnStyle}>Equal</IonCol>
        <IonCol style={columnStyle}>Equal</IonCol>
      </IonRow>
      <IonRow>
        <IonCol style={columnStyle}>Equal</IonCol>
        <IonCol style={columnStyle}>Equal</IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const SpecificSizes: Story = {
  render: () => (
    <IonGrid>
      <IonRow>
        <IonCol size="4" style={columnStyle}>4 cols</IonCol>
        <IonCol size="8" style={columnStyle}>8 cols</IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" style={columnStyle}>3 cols</IonCol>
        <IonCol size="6" style={columnStyle}>6 cols</IonCol>
        <IonCol size="3" style={columnStyle}>3 cols</IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <IonGrid>
      <IonRow>
        <IonCol size="12" sizeMd="6" sizeLg="4" style={columnStyle}>
          12 cols (sm), 6 cols (md), 4 cols (lg)
        </IonCol>
        <IonCol size="12" sizeMd="6" sizeLg="4" style={columnStyle}>
          12 cols (sm), 6 cols (md), 4 cols (lg)
        </IonCol>
        <IonCol size="12" sizeMd="12" sizeLg="4" style={columnStyle}>
          12 cols (sm), 12 cols (md), 4 cols (lg)
        </IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const Offset: Story = {
  render: () => (
    <IonGrid>
      <IonRow>
        <IonCol size="4" offset="4" style={columnStyle}>
          4 cols, offset 4
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" offset="9" style={columnStyle}>
          3 cols, offset 9
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6" offset="3" style={columnStyle}>
          6 cols, offset 3
        </IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const Alignment: Story = {
  render: () => (
    <IonGrid>
      <IonRow className="ion-justify-content-start">
        <IonCol size="3" style={columnStyle}>Start</IonCol>
        <IonCol size="3" style={columnStyle}>Start</IonCol>
      </IonRow>
      <IonRow className="ion-justify-content-center">
        <IonCol size="3" style={columnStyle}>Center</IonCol>
        <IonCol size="3" style={columnStyle}>Center</IonCol>
      </IonRow>
      <IonRow className="ion-justify-content-end">
        <IonCol size="3" style={columnStyle}>End</IonCol>
        <IonCol size="3" style={columnStyle}>End</IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const VerticalAlignment: Story = {
  render: () => (
    <IonGrid>
      <IonRow className="ion-align-items-start" style={{ minHeight: '100px', backgroundColor: '#f4f4f4' }}>
        <IonCol style={columnStyle}>Top</IonCol>
        <IonCol style={columnStyle}>Top</IonCol>
      </IonRow>
      <IonRow className="ion-align-items-center" style={{ minHeight: '100px', backgroundColor: '#f4f4f4' }}>
        <IonCol style={columnStyle}>Middle</IonCol>
        <IonCol style={columnStyle}>Middle</IonCol>
      </IonRow>
      <IonRow className="ion-align-items-end" style={{ minHeight: '100px', backgroundColor: '#f4f4f4' }}>
        <IonCol style={columnStyle}>Bottom</IonCol>
        <IonCol style={columnStyle}>Bottom</IonCol>
      </IonRow>
    </IonGrid>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <IonGrid>
      <IonRow>
        <IonCol size="12" style={{ ...columnStyle, backgroundColor: '#10dc60' }}>
          Header - Full Width
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12" sizeMd="8" style={{ ...columnStyle, backgroundColor: '#3880ff' }}>
          Main Content
        </IonCol>
        <IonCol size="12" sizeMd="4" style={{ ...columnStyle, backgroundColor: '#f04141' }}>
          Sidebar
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6" sizeMd="3" style={{ ...columnStyle, backgroundColor: '#ffce00' }}>
          Footer 1
        </IonCol>
        <IonCol size="6" sizeMd="3" style={{ ...columnStyle, backgroundColor: '#ffce00' }}>
          Footer 2
        </IonCol>
        <IonCol size="6" sizeMd="3" style={{ ...columnStyle, backgroundColor: '#ffce00' }}>
          Footer 3
        </IonCol>
        <IonCol size="6" sizeMd="3" style={{ ...columnStyle, backgroundColor: '#ffce00' }}>
          Footer 4
        </IonCol>
      </IonRow>
    </IonGrid>
  ),
};