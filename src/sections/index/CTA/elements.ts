import styled from "@emotion/styled";
import Image from "next/image";

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

export const ImageCTA = styled(Image)`
  border-radius: 0.25rem;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
