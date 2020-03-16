import React, { useState } from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Heading, Text } from "../components/Typography";
import {
  IonRange,
  IonInput,
  IonLabel,
  IonItem,
  IonTextarea,
  IonIcon,
  IonModal,
  IonButton,
  IonText
} from "@ionic/react";

import contactImg from "../img/backpack.jpg";
import { happyOutline, sadOutline } from "ionicons/icons";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [pleasureScale, setPleasureScale] = useState(5);

  let response =
    pleasureScale < 5
      ? "Sorry dude, Ill try better next time."
      : "Rock On! Thanks for the feedback.";

  return (
    <Layout title="Contact" hideBreadcrumb>
      <IonModal isOpen={showModal}>
        <Heading className="ion-padding">Thanks for your input!</Heading>
        <Text className="ion-padding">{response}</Text>
        <img
          src={contactImg}
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
        <IonButton href="/blog">Return to Blog List</IonButton>
      </IonModal>

      <Heading>Get in Touch</Heading>
      <Text>Like the blog? I'd love to hear from you! </Text>

      <IonLabel>Email</IonLabel>
      <IonItem color="tertiary" style={styles.input}>
        <br></br>
        <IonInput
          type="email"
          value={email}
          placeholder="Enter your email"
          debounce={0}
          onIonChange={e => setEmail(e.detail.value)}
        />
      </IonItem>

      <IonLabel>Enter your Message</IonLabel>
      <IonItem color="tertiary">
        <br></br>
        <IonTextarea
          rows={6}
          cols={20}
          value={msg}
          placeholder="What do you have to say to me, huh? "
          debounce={0}
          onIonChange={e => setMsg(e.detail.value)}
        />
      </IonItem>

      <Text>Overall, how happy were you with the blog?</Text>
      <IonItem>
        <IonIcon icon={sadOutline} />
        <IonRange
          pin={true}
          min={0}
          max={10}
          step={1}
          snaps={true}
          color="primary"
          value={pleasureScale}
          onIonChange={e => setPleasureScale(e.detail.value)}
        ></IonRange>

        <IonIcon icon={happyOutline} />
      </IonItem>

      <IonItem
        className="ion-text-center"
        button
        type="submit"
        onClick={() => setShowModal(true)}
        color="primary"
        textCenter
      >
        <p style={{ width: "100%", textAlign: "center" }}>Submit</p>
      </IonItem>
    </Layout>
  );
};

const styles = {
  input: { marginBottom: "1rem" }
};

export { Contact };
