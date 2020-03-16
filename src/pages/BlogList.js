import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonThumbnail,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonSearchbar
} from "@ionic/react";

import { Layout } from "../components/Layout";
import { Heading, Text } from "../components/Typography.js";
import postData from "../data/posts.json";

const posts = postData.map(post => ({ ...post, isVisible: true }));
const searchPlaceholder = "Search Blog Posts...";

const BlogList = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const postElts = posts.map(p => <PostItem key={p.title} post={p} />);

  useEffect(() => {
    posts.forEach(post => {
      const query = search.toLowerCase().trim();
      // If search query is placeholder or empty, let us see it
      if (query === "" || query === searchPlaceholder.toLowerCase()) {
        post.isVisible = true;
      } else {
        // Check if articles match search.
        const title = post.title.toLowerCase();
        post.isVisible = title.includes(query);
      }
    });
  }, [search, posts, postElts]);

  const handleCancel = () => {
    posts.forEach(p => (p.isVisible = true));
    setSearch("");
  };

  return (
    <Layout title={"My Experiences"}>
      <IonSearchbar
        value={search}
        inputMode="text"
        onIonChange={e => setSearch(e.detail.value)}
        onIonClear={handleCancel}
        onIonCancel={() => setSearch("")}
        placeholder={searchPlaceholder}
        debounce={0}
      />
      <IonList>{postElts}</IonList>
    </Layout>
  );
};

const PostItem = ({ post }) => {
  const { title, slug, date, article, image, isVisible } = post;
  const excerpt = article.substring(0, 60) + "...";

  return (
    <IonItem href={`/blog/${slug}`} style={{ opacity: isVisible ? 1 : 0.3 }}>
      <IonThumbnail slot="start">
        <img src={require(`../img/thumbs/${image}`)} />
      </IonThumbnail>

      <IonLabel>
        <h3>{title}</h3>
        <StyledDate>{date}</StyledDate>
        <Text dangerouslySetInnerHTML={{ __html: excerpt }} />
      </IonLabel>
    </IonItem>
  );
};

export { BlogList };

const StyledDate = styled.div`
  font-weight: 700;
`;
