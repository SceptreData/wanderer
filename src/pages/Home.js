import React from "react";
import styled from "styled-components";
import {
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";

import { Layout } from "../components/Layout";
import { Heading, Text } from "../components/Typography";
import MapImg from "../img/landing.jpg";

import posts from "../data/posts.json";

const Home = () => (
  <Layout title={"Home"} hideBreadcrumb>
    <img
      src={MapImg}
      alt="Look at this map!"
      style={{ marginBottom: "1rem" }}
    />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Text as="small">
        "You don't realize you're in the middle of an adventure
        <br /> until its too late." - Gandhi, probably
      </Text>
    </div>
    <IonText>
      <Heading as="h3">Lets explore!</Heading>
      <Text>Welcome to my blog. I've been to these places! </Text>
    </IonText>
    {posts && posts.map(post => <Card post={post} />)}
  </Layout>
);

const Card = ({ post }) => {
  console.log(post);
  const { title, slug, date, article, image } = post;
  const excerpt = article.substring(0, 120) + "...";

  return (
    <IonCard href={`/blog/${slug}`} style={{ marginBottom: "1.25rem" }}>
      <IonCardHeader>
        <IonCardTitle color="primary">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <Text as="small">{date}</Text>
        <img
          style={{ objectFit: "cover", width: "100%", maxHeight: "200px" }}
          src={require(`../img/${image}`)}
        />
        <Text dangerouslySetInnerHTML={{ __html: excerpt }} />
      </IonCardContent>
    </IonCard>
  );
};

export { Home };
