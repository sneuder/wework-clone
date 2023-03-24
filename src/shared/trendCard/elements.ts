import styled from "@emotion/styled";
import Image from "next/image";

export const ContainerCard = styled.div`
  display: flex;
  gap: 40px;

  ${(props) =>
    props.direction === "vertical" &&
    `
    gap: 10px;
    flex-direction: column;
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
`;

export const Header = styled.h3`
  ${(props) => props.bighead && `font-size: 2rem`}
`;
