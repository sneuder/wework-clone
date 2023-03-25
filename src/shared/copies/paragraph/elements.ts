import styled from "@emotion/styled";

export const ParagraphElement = styled.p`
  font-size: ${(props) => {
    if (props.secondary) return "1rem";
    if (props.small) return "0.875rem";
    return "1.25rem";
  }};

  line-height: ${(props) => (props.secondary == true ? "1.75rem" : "2rem")};

  font-weight: 400;
`;
