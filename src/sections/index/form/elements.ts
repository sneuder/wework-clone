import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  position: relative;
`;

export const ContainerForm = styled.div`
  padding: 80px 200px 0px;

  @media (max-width: 1195px) {
    padding: 80px 50px 0px;
  }

  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const ImageForm = styled(Image)`
  object-fit: cover;
  border-radius: 0.25rem;
  width: 100%;
  height: auto;

  position: absolute;
  top: 0;
  z-index: -1;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 1195px) {
  }
`;
