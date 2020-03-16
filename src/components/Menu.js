import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon
} from "@ionic/react";

import { home, airplane, chatbox } from "ionicons/icons";

const Menu = () => (
  <IonMenu side="end" content-id="blog-content">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Let's go somewhere! </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem href="/">
          <IonIcon icon={home} slot="start" />
          Home
        </IonItem>

        <IonItem href="/blog">
          <IonIcon icon={airplane} slot="start" />
          Blog
        </IonItem>

        <IonItem href="/contact">
          <IonIcon icon={chatbox} slot="start" />
          Contact
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export { Menu };
