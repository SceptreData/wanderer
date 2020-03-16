import React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Heading, Text } from "../components/Typography";
import suitcaseImg from "../img/luggage.jpg";

import posts from "../data/posts.json";
const getPost = slug => posts.find(p => p.slug === slug);

const Post = ({ match }) => {
  const { title, slug, date, article, image } = getPost(match.params.slug);
  const excerpt = article.substring(0, 60);

  return (
    <Layout title={title} hideBreadcrumb>
      <Heading>{title}</Heading>
      <Text as="small">{date}</Text>
      <StyledImg src={require(`../img/${image}`)} />
      <Text dangerouslySetInnerHTML={{ __html: article }} />
    </Layout>
  );
};

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 300px;
`;

export { Post };
