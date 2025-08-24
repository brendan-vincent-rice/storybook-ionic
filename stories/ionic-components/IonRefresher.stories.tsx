import type { Meta, StoryObj } from '@storybook/react';
import { IonRefresher, IonRefresherContent, IonContent, IonList, IonItem, IonLabel, IonNote, IonIcon } from '@ionic/react';
import { chevronDownCircleOutline, arrowDownOutline, refresh } from 'ionicons/icons';
import React, { useState, useCallback } from 'react';

const meta: Meta<typeof IonRefresher> = {
  title: 'Ionic/Ion Refresher',
  component: IonRefresher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pullFactor: {
      control: { type: 'number', min: 0.5, max: 2, step: 0.1 },
    },
    pullMin: {
      control: { type: 'number', min: 20, max: 100, step: 10 },
    },
    pullMax: {
      control: { type: 'number', min: 100, max: 300, step: 10 },
    },
    closeDuration: {
      control: 'text',
    },
    snapbackDuration: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const generateData = (timestamp: number) => [
  { id: 1, title: 'Latest News', time: timestamp, content: 'Breaking news update...' },
  { id: 2, title: 'Weather Update', time: timestamp - 300000, content: 'Sunny skies expected...' },
  { id: 3, title: 'Sports', time: timestamp - 600000, content: 'Championship results...' },
  { id: 4, title: 'Technology', time: timestamp - 900000, content: 'New gadget released...' },
  { id: 5, title: 'Health', time: timestamp - 1200000, content: 'Wellness tips for today...' },
];

export const Basic: Story = {
  render: (args) => {
    const [data, setData] = useState(generateData(Date.now()));
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const doRefresh = useCallback(async (event: CustomEvent) => {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newData = generateData(Date.now());
      setData(newData);
      setLastUpdated(new Date());
      
      event.detail.complete();
    }, []);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonRefresher {...args} slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent
              pullingIcon={chevronDownCircleOutline}
              pullingText="Pull to refresh"
              refreshingSpinner="circles"
              refreshingText="Refreshing..."
            />
          </IonRefresher>
          
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: '#666', borderBottom: '1px solid #eee' }}>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          
          <IonList>
            {data.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </IonLabel>
                <IonNote slot="end">
                  {new Date(item.time).toLocaleTimeString()}
                </IonNote>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </div>
    );
  },
};

export const CustomIcon: Story = {
  render: (args) => {
    const [data, setData] = useState(generateData(Date.now()));
    const [refreshCount, setRefreshCount] = useState(0);

    const doRefresh = useCallback(async (event: CustomEvent) => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newData = generateData(Date.now());
      setData(newData);
      setRefreshCount(prev => prev + 1);
      
      event.detail.complete();
    }, []);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonRefresher {...args} slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent
              pullingIcon={arrowDownOutline}
              pullingText="Pull down to refresh"
              refreshingSpinner="crescent"
              refreshingText="Loading new content..."
            />
          </IonRefresher>
          
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: '#666', borderBottom: '1px solid #eee' }}>
            Refreshed {refreshCount} times
          </div>
          
          <IonList>
            {data.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </div>
    );
  },
};

export const CustomMessages: Story = {
  render: (args) => {
    const [data, setData] = useState(generateData(Date.now()));
    const [isRefreshing, setIsRefreshing] = useState(false);

    const doRefresh = useCallback(async (event: CustomEvent) => {
      setIsRefreshing(true);
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const newData = generateData(Date.now());
      setData(newData);
      setIsRefreshing(false);
      
      event.detail.complete();
    }, []);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonRefresher {...args} slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent
              pullingIcon={refresh}
              pullingText="Release to update feed"
              refreshingSpinner="bubbles"
              refreshingText="Fetching latest posts..."
            />
          </IonRefresher>
          
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: isRefreshing ? '#3880ff' : '#666', borderBottom: '1px solid #eee' }}>
            {isRefreshing ? 'Updating feed...' : 'Pull down for latest posts'}
          </div>
          
          <IonList>
            {data.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </IonLabel>
                <IonNote slot="end">#{item.id}</IonNote>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </div>
    );
  },
};

export const CustomPullSettings: Story = {
  render: (args) => {
    const [data, setData] = useState(generateData(Date.now()));
    const [pullDistance, setPullDistance] = useState(0);

    const doRefresh = useCallback(async (event: CustomEvent) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newData = generateData(Date.now());
      setData(newData);
      
      event.detail.complete();
    }, []);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonRefresher 
            {...args} 
            slot="fixed" 
            pullMin={60}
            pullMax={120}
            onIonRefresh={doRefresh}
            onIonPull={(e) => setPullDistance(Math.round(e.detail.ratio * 100))}
          >
            <IonRefresherContent
              pullingIcon={chevronDownCircleOutline}
              pullingText={`Pull ${pullDistance}% to refresh`}
              refreshingSpinner="dots"
              refreshingText="Refreshing data..."
            />
          </IonRefresher>
          
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: '#666', borderBottom: '1px solid #eee' }}>
            Custom pull distance: {pullDistance}%
          </div>
          
          <IonList>
            {data.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [data, setData] = useState(generateData(Date.now()));
    const [isDisabled, setIsDisabled] = useState(false);

    const doRefresh = useCallback(async (event: CustomEvent) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newData = generateData(Date.now());
      setData(newData);
      
      event.detail.complete();
    }, []);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonRefresher {...args} slot="fixed" disabled={isDisabled} onIonRefresh={doRefresh}>
            <IonRefresherContent
              pullingIcon={chevronDownCircleOutline}
              pullingText="Pull to refresh"
              refreshingSpinner="lines"
              refreshingText="Refreshing..."
            />
          </IonRefresher>
          
          <div style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            <div style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginBottom: '10px' }}>
              Refresh is {isDisabled ? 'disabled' : 'enabled'}
            </div>
            <div style={{ textAlign: 'center' }}>
              <button 
                style={{ padding: '5px 10px', fontSize: '12px' }}
                onClick={() => setIsDisabled(!isDisabled)}
              >
                {isDisabled ? 'Enable' : 'Disable'} Refresh
              </button>
            </div>
          </div>
          
          <IonList>
            {data.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </div>
    );
  },
};