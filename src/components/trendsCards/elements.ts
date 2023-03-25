import styled from "@emotion/styled";
import Image from "next/image";

export const GeneralContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media (max-width: 810px) {
    grid-template-columns: 1fr;
  }
`;
