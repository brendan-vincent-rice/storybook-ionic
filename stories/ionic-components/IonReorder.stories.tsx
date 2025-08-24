import type { Meta, StoryObj } from '@storybook/react';
import { IonReorder, IonReorderGroup, IonItem, IonLabel, IonList, IonIcon, IonNote, IonContent } from '@ionic/react';
import { pizza, wine, restaurant, iceCream, cafe } from 'ionicons/icons';
import React, { useState } from 'react';

const meta: Meta<typeof IonReorder> = {
  title: 'Ionic/Ion Reorder',
  component: IonReorder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    slot: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface TodoItem {
  id: number;
  text: string;
  priority?: string;
}

interface FoodItem {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export const BasicList: Story = {
  render: (args) => {
    const [items, setItems] = useState<TodoItem[]>([
      { id: 1, text: 'Buy groceries', priority: 'High' },
      { id: 2, text: 'Walk the dog', priority: 'Medium' },
      { id: 3, text: 'Read a book', priority: 'Low' },
      { id: 4, text: 'Call mom', priority: 'High' },
      { id: 5, text: 'Clean house', priority: 'Medium' },
    ]);

    const handleReorder = (event: CustomEvent) => {
      const { from, to } = event.detail;
      const newItems = [...items];
      const itemToMove = newItems.splice(from, 1)[0];
      newItems.splice(to, 0, itemToMove);
      setItems(newItems);
      event.detail.complete();
    };

    return (
      <div style={{ width: '350px', height: '400px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
            Todo List - Drag to Reorder
          </div>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonList>
              {items.map((item) => (
                <IonItem key={item.id}>
                  <IonLabel>
                    <h2>{item.text}</h2>
                    <p>Priority: {item.priority}</p>
                  </IonLabel>
                  <IonNote slot="end">#{item.id}</IonNote>
                  <IonReorder {...args} slot="end" />
                </IonItem>
              ))}
            </IonList>
          </IonReorderGroup>
        </IonContent>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [foods, setFoods] = useState<FoodItem[]>([
      { id: 1, name: 'Pizza', icon: pizza, category: 'Italian' },
      { id: 2, name: 'Wine', icon: wine, category: 'Beverage' },
      { id: 3, name: 'Sushi', icon: restaurant, category: 'Japanese' },
      { id: 4, name: 'Ice Cream', icon: iceCream, category: 'Dessert' },
      { id: 5, name: 'Coffee', icon: cafe, category: 'Beverage' },
    ]);

    const handleReorder = (event: CustomEvent) => {
      const { from, to } = event.detail;
      const newFoods = [...foods];
      const itemToMove = newFoods.splice(from, 1)[0];
      newFoods.splice(to, 0, itemToMove);
      setFoods(newFoods);
      event.detail.complete();
    };

    return (
      <div style={{ width: '350px', height: '400px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
            Favorite Foods - Reorder Your Preferences
          </div>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonList>
              {foods.map((food) => (
                <IonItem key={food.id}>
                  <IonIcon icon={food.icon} slot="start" color="primary" />
                  <IonLabel>
                    <h2>{food.name}</h2>
                    <p>{food.category}</p>
                  </IonLabel>
                  <IonReorder {...args} slot="end" />
                </IonItem>
              ))}
            </IonList>
          </IonReorderGroup>
        </IonContent>
      </div>
    );
  },
};

export const ReorderAtStart: Story = {
  render: (args) => {
    const [items, setItems] = useState([
      { id: 1, text: 'First Item' },
      { id: 2, text: 'Second Item' },
      { id: 3, text: 'Third Item' },
      { id: 4, text: 'Fourth Item' },
      { id: 5, text: 'Fifth Item' },
    ]);

    const handleReorder = (event: CustomEvent) => {
      const { from, to } = event.detail;
      const newItems = [...items];
      const itemToMove = newItems.splice(from, 1)[0];
      newItems.splice(to, 0, itemToMove);
      setItems(newItems);
      event.detail.complete();
    };

    return (
      <div style={{ width: '350px', height: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
            Reorder Handle at Start
          </div>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonList>
              {items.map((item, index) => (
                <IonItem key={item.id}>
                  <IonReorder {...args} slot="start" />
                  <IonLabel style={{ marginLeft: '10px' }}>
                    <h3>{item.text}</h3>
                    <p>Position: {index + 1}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonReorderGroup>
        </IonContent>
      </div>
    );
  },
};

export const DisabledReorder: Story = {
  render: (args) => {
    const [items] = useState([
      { id: 1, text: 'Fixed Item 1' },
      { id: 2, text: 'Fixed Item 2' },
      { id: 3, text: 'Fixed Item 3' },
      { id: 4, text: 'Fixed Item 4' },
    ]);

    const [isDisabled, setIsDisabled] = useState(true);

    return (
      <div style={{ width: '350px', height: '350px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>
              Disabled Reorder Group
            </div>
            <div style={{ textAlign: 'center' }}>
              <button 
                style={{ padding: '5px 10px', fontSize: '12px' }}
                onClick={() => setIsDisabled(!isDisabled)}
              >
                {isDisabled ? 'Enable' : 'Disable'} Reorder
              </button>
            </div>
          </div>
          <IonReorderGroup disabled={isDisabled}>
            <IonList>
              {items.map((item) => (
                <IonItem key={item.id}>
                  <IonLabel>
                    <h3>{item.text}</h3>
                    <p>{isDisabled ? 'Reordering disabled' : 'Drag to reorder'}</p>
                  </IonLabel>
                  <IonReorder {...args} slot="end" />
                </IonItem>
              ))}
            </IonList>
          </IonReorderGroup>
        </IonContent>
      </div>
    );
  },
};

export const ComplexItems: Story = {
  render: (args) => {
    const [tasks, setTasks] = useState([
      { id: 1, title: 'Design Homepage', assignee: 'John Doe', status: 'In Progress', priority: 'High' },
      { id: 2, title: 'API Integration', assignee: 'Jane Smith', status: 'Todo', priority: 'Medium' },
      { id: 3, title: 'Testing Phase', assignee: 'Bob Johnson', status: 'Done', priority: 'Low' },
      { id: 4, title: 'Code Review', assignee: 'Alice Brown', status: 'In Review', priority: 'High' },
    ]);

    const handleReorder = (event: CustomEvent) => {
      const { from, to } = event.detail;
      const newTasks = [...tasks];
      const itemToMove = newTasks.splice(from, 1)[0];
      newTasks.splice(to, 0, itemToMove);
      setTasks(newTasks);
      event.detail.complete();
    };

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'Done': return 'success';
        case 'In Progress': return 'warning';
        case 'In Review': return 'secondary';
        default: return 'medium';
      }
    };

    return (
      <div style={{ width: '400px', height: '400px', border: '1px solid #ddd' }}>
        <IonContent>
          <div style={{ padding: '10px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
            Project Tasks - Reorder by Priority
          </div>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonList>
              {tasks.map((task) => (
                <IonItem key={task.id}>
                  <IonLabel>
                    <h2>{task.title}</h2>
                    <p>Assigned to: {task.assignee}</p>
                    <p>Priority: {task.priority}</p>
                  </IonLabel>
                  <IonNote slot="end" color={getStatusColor(task.status)}>
                    {task.status}
                  </IonNote>
                  <IonReorder {...args} slot="end" />
                </IonItem>
              ))}
            </IonList>
          </IonReorderGroup>
        </IonContent>
      </div>
    );
  },
};