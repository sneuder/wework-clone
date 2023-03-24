import styled from "@emotion/styled";

export const ParagraphElement = styled.p`
  font-size: ${(props) => (props.secondary ? "1rem" : "1.25rem")};
  line-height: ${(props) => (props.secondary ? "1.75rem" : "2rem")};
  font-weight: 400;
`;
