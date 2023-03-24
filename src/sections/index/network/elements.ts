import styled from "@emotion/styled";
import Image from "next/image";
export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 140px;
  padding: 55px 0px;

  @media (max-width: 1195px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ImageNet = styled(Image)`
  border-radius: 0.25rem;
  width: 100%;
  height: auto;
  width: 700px;

  @media (max-width: 1195px) {
    width: 100%;
  }
`;
