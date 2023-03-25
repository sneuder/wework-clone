import styled from "@emotion/styled";
import Image from "next/image";

export const ContainerCard = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  ${(props) =>
    props.direction === "vertical" &&
    `
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ImageCard = styled(Image)`
  border-radius: 0.25rem;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

  ${(props) => props.direction === "horizontal" && `width: 50%;`};
`;

export const Header = styled.h3`
  ${(props) => props.bighead && `font-size: 2rem`}
`;
