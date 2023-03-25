import styled from "@emotion/styled";
import Image from "next/image";
import StyledProps from "@/models/StyledProps";

export const ContainerCard = styled.div<StyledProps>`
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

export const ImageCard = styled(Image)<StyledProps>`
  border-radius: 0.25rem;
  width: 100%;
  height: auto;

  ${(props) => props.direction === "horizontal" && `width: 50%;`};
`;

export const Header = styled.h3<StyledProps>`
  ${(props) => props.bighead && `font-size: 2rem`}
`;
