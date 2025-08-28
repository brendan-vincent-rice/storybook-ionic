import React, { useState } from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonToggle,
  IonAlert,
  IonToast,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  setupIonicReact
} from '@ionic/react';
import { heart, star, thumbsUp } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <IonApp className={darkMode ? 'ion-palette-dark' : ''}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="8" offsetMd="2">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Welcome to Ionic React!</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>This is a basic React app demonstrating various Ionic components.</p>
                  
                  <IonItem>
                    <IonLabel position="floating">Enter your name</IonLabel>
                    <IonInput
                      value={name}
                      onIonInput={(e) => setName(e.detail.value!)}
                      placeholder="Your name here"
                    />
                  </IonItem>
                  
                  <IonItem>
                    <IonLabel>Dark Mode</IonLabel>
                    <IonToggle
                      checked={darkMode}
                      onIonChange={(e) => setDarkMode(e.detail.checked)}
                    />
                  </IonItem>
                  
                  {name && (
                    <div className="ion-margin-top">
                      <h3>Hello, {name}! 👋</h3>
                    </div>
                  )}
                </IonCardContent>
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Interactive Elements</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="6">
                        <IonButton
                          expand="block"
                          color="primary"
                          onClick={() => setShowAlert(true)}
                        >
                          <IonIcon icon={star} slot="start" />
                          Show Alert
                        </IonButton>
                      </IonCol>
                      <IonCol size="6">
                        <IonButton
                          expand="block"
                          color="secondary"
                          onClick={() => setShowToast(true)}
                        >
                          <IonIcon icon={thumbsUp} slot="start" />
                          Show Toast
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonButton
                          expand="block"
                          fill="outline"
                          color="danger"
                        >
                          <IonIcon icon={heart} slot="start" />
                          Outline Button
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>

              <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Hello!"
                subHeader="This is an Ionic Alert"
                message={name ? `Nice to meet you, ${name}!` : 'Please enter your name above.'}
                buttons={['OK']}
              />

              <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="This is an Ionic Toast notification!"
                duration={3000}
                position="bottom"
                buttons={[
                  {
                    text: 'Dismiss',
                    role: 'cancel'
                  }
                ]}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;