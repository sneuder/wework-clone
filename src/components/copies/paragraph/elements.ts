import styled from "@emotion/styled";

export const ParagraphElement = styled.p`
  font-size: ${(props) => (props.secondary == true ? "1rem" : "1.25rem")};
  line-height: ${(props) => (props.secondary == true ? "1.75rem" : "2rem")};
  font-weight: 400;
`;