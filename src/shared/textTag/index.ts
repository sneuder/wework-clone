import styled from "@emotion/styled";
import StyledProps from "@/models/StyledProps";

const TextTag = styled.p<StyledProps>`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.secondary === "true" &&
    `
    &::after {
      content: '';
      display: inline-block;
      width: 50px;
      height: 1px;
      background: #000;
    }

    font-family: "Apercu Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-size: 0.75rem;
    line-height: 1.125rem;
  `}

  ${(props) =>
    props.headerlink === "true" &&
    `

    font-family: "Apercu Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #666;
  `}
`;

export default TextTag;
