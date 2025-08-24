import type { Meta, StoryObj } from '@storybook/react';
import { IonInfiniteScroll, IonInfiniteScrollContent, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonSkeletonText } from '@ionic/react';
import React, { useState, useCallback } from 'react';

const meta: Meta<typeof IonInfiniteScroll> = {
  title: 'Ionic/Ion InfiniteScroll',
  component: IonInfiniteScroll,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    threshold: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    position: {
      control: 'select',
      options: ['bottom', 'top'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (startIndex: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: startIndex + i,
    title: `Item ${startIndex + i + 1}`,
    description: `Description for item ${startIndex + i + 1}`,
    avatar: `https://ionicframework.com/docs/img/demos/avatar.svg`,
  }));
};

export const Basic: Story = {
  render: (args) => {
    const [items, setItems] = useState(generateItems(0, 20));
    const [isLoading, setIsLoading] = useState(false);

    const loadMore = useCallback(async (event: CustomEvent<void>) => {
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newItems = generateItems(items.length, 10);
      setItems(prev => [...prev, ...newItems]);
      setIsLoading(false);
      
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, [items.length]);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonList>
            {items.map((item) => (
              <IonItem key={item.id}>
                <IonAvatar slot="start">
                  <img src={item.avatar} alt={`Avatar ${item.id}`} />
                </IonAvatar>
                <IonLabel>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </IonLabel>
              </IonItem>
            ))}
            
            {isLoading && (
              <>  
                {[1, 2, 3].map((i) => (
                  <IonItem key={`skeleton-${i}`}>
                    <IonAvatar slot="start">
                      <IonSkeletonText animated />
                    </IonAvatar>
                    <IonLabel>
                      <h2><IonSkeletonText animated style={{ width: '80%' }} /></h2>
                      <p><IonSkeletonText animated style={{ width: '60%' }} /></p>
                    </IonLabel>
                  </IonItem>
                ))}
              </>
            )}
          </IonList>
          
          <IonInfiniteScroll {...args} onIonInfinite={loadMore}>
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Loading more items..."
            />
          </IonInfiniteScroll>
        </IonContent>
      </div>
    );
  },
};

export const CustomThreshold: Story = {
  render: (args) => {
    const [items, setItems] = useState(generateItems(0, 15));

    const loadMore = useCallback(async (event: CustomEvent<void>) => {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newItems = generateItems(items.length, 8);
      setItems(prev => [...prev, ...newItems]);
      
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, [items.length]);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <IonList>
            {items.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
          
          <IonInfiniteScroll {...args} threshold="200px" onIonInfinite={loadMore}>
            <IonInfiniteScrollContent
              loadingSpinner="crescent"
              loadingText="Loading more data..."
            />
          </IonInfiniteScroll>
        </IonContent>
      </div>
    );
  },
};

export const DifferentSpinners: Story = {
  render: () => {
    const [items, setItems] = useState(generateItems(0, 15));
    const [currentSpinner, setCurrentSpinner] = useState('circles');
    
    const spinners = ['circles', 'bubbles', 'crescent', 'dots', 'lines'];

    const loadMore = useCallback(async (event: CustomEvent<void>) => {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      const newItems = generateItems(items.length, 8);
      setItems(prev => [...prev, ...newItems]);
      
      // Change spinner for next load
      const nextSpinner = spinners[(spinners.indexOf(currentSpinner) + 1) % spinners.length];
      setCurrentSpinner(nextSpinner);
      
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, [items.length, currentSpinner, spinners]);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
            Current spinner: {currentSpinner}
          </div>
          <IonList>
            {items.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
          
          <IonInfiniteScroll onIonInfinite={loadMore}>
            <IonInfiniteScrollContent
              loadingSpinner={currentSpinner as any}
              loadingText={`Loading with ${currentSpinner} spinner...`}
            />
          </IonInfiniteScroll>
        </IonContent>
      </div>
    );
  },
};

export const WithLimit: Story = {
  render: (args) => {
    const [items, setItems] = useState(generateItems(0, 10));
    const [hasMore, setHasMore] = useState(true);
    const maxItems = 50;

    const loadMore = useCallback(async (event: CustomEvent<void>) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newItems = generateItems(items.length, 10);
      const updatedItems = [...items, ...newItems];
      
      if (updatedItems.length >= maxItems) {
        setItems(updatedItems.slice(0, maxItems));
        setHasMore(false);
      } else {
        setItems(updatedItems);
      }
      
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, [items]);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
            {items.length} of {maxItems} items loaded
          </div>
          <IonList>
            {items.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
          
          {hasMore ? (
            <IonInfiniteScroll {...args} onIonInfinite={loadMore}>
              <IonInfiniteScrollContent
                loadingSpinner="dots"
                loadingText="Loading more..."
              />
            </IonInfiniteScroll>
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              No more items to load
            </div>
          )}
        </IonContent>
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: (args) => {
    const [items, setItems] = useState(generateItems(0, 20));
    const [isDisabled, setIsDisabled] = useState(false);

    const loadMore = useCallback(async (event: CustomEvent<void>) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newItems = generateItems(items.length, 10);
      setItems(prev => [...prev, ...newItems]);
      
      // Disable after loading a few times
      if (items.length > 40) {
        setIsDisabled(true);
      }
      
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, [items.length]);

    return (
      <div style={{ height: '400px', width: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
            Infinite scroll {isDisabled ? 'disabled' : 'enabled'}
          </div>
          <IonList>
            {items.map((item) => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
          
          <IonInfiniteScroll {...args} disabled={isDisabled} onIonInfinite={loadMore}>
            <IonInfiniteScrollContent
              loadingSpinner="lines"
              loadingText="Loading..."
            />
          </IonInfiniteScroll>
          
          {isDisabled && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              Infinite scroll has been disabled
            </div>
          )}
        </IonContent>
      </div>
    );
  },
};