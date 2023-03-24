import styled from "@emotion/styled";
import Image from "next/image";

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;

  @media (max-width: 1195px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const ImageCTA = styled(Image)`
  border-radius: 0.25rem;
  width: 100%;
  height: auto;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
