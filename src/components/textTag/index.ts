import styled from "@emotion/styled";

const TextTag = styled.p`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.secondary &&
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
`;

export default TextTag;
