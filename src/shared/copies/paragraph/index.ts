import styled from "@emotion/styled";
import StyledProps from "@/models/StyledProps";

const ParagraphElement = styled.p<StyledProps>`
  font-size: ${(props) => {
    if (props.secondary === "true") return "1rem";
    if (props.small) return "0.875rem";
    return "1.25rem";
  }};

  line-height: ${(props) => (props.secondary === "true" ? "1.75rem" : "2rem")};
  color: ${(props) => (props.gray === "true" ? "#666" : "#000")};

  font-weight: 400;
`;

export default ParagraphElement;
