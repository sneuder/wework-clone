import styled from "@emotion/styled";
import StyledProps from "@/models/StyledProps";

export const VariantButton = styled.button<StyledProps>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  display: inline-block;
  border: 0.0625rem solid #0000ff;
  border-radius: 0.25rem;
  cursor: pointer;

  padding: 1rem 1rem;
  background-color: #0000ff;
  color: #fff;

  ${(props) =>
    props.buttonType === "secondary" &&
    `
      color: #0000ff;
      background-color: #fff;
      padding: 0.4375rem 1rem;
  `}

  &:hover {
    background-color: #ccf;
  }
`;
