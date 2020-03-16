import React from "react";
import styled from "styled-components";
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonPage,
  IonTitle,
  IonText,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonIcon,
  IonMenuButton
} from "@ionic/react";

import { home, chatbox, airplane } from "ionicons/icons";

import { Heading, Text } from "./Typography";

const Layout = ({ title, children, hideBreadcrumb }) => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="end">
          <IonMenuButton color="secondary" />
        </IonButtons>

        <BlogTitle color="primary">
          <Heading style={{ marginBottom: "0", lineHeight: ".8" }}>
            Lost On Purpose
          </Heading>
          <Text as="small">The Travel Blog</Text>
        </BlogTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent id="blog-content" className="ion-padding">
      <Breadcrumb path={title} hide={hideBreadcrumb} />
      {children}
    </IonContent>

    <IonFooter>
      <IonToolbar>
        <IonButtons
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <IonButton href="/">
            <IonIcon size="large" className="ion-padding" icon={home} />
          </IonButton>

          <IonButton href="/blog">
            <IonIcon size="large" className="ion-padding" icon={airplane} />
          </IonButton>

          <IonButton href="/contact">
            <IonIcon size="large" className="ion-padding" icon={chatbox} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

const Breadcrumb = ({ path, hide = false }) => {
  if (hide) return null;

  return (
    <IonText color="dark">
      <Heading as="h5">{path}</Heading>
    </IonText>
  );
};

export { Layout };

const BlogTitle = styled(IonTitle)`
  padding-inline-start: 20px;
  padding-inline-end: 20px;
`;
