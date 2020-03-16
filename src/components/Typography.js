import styled from "styled-components";

const typeScale = {
  h1: "2.8rem",
  h2: "2.67rem",
  h3: "2.441rem",
  h4: "1.953rem",
  h5: "1.25rem",
  p: "1rem",
  small: ".8rem"
};

const Heading = styled.h1`
  font-family: "Dosis";
  font-weight: 300;
  line-height: 1.15;
  font-size: ${({ as: tag }) => getSize(tag || "h1")};
  display: block;
`;

const Text = styled.p`
  font-family: "Heebo";
  font-weight: 400;
  line-height: 1.65;
  font-size: ${({ as: tag }) => getSize(tag || "p")};
  margin-bottom: 1.15rem;
`;

export { Heading, Text };

const getSize = tag => typeScale[tag];
