import styled from "@emotion/styled";
import Image from "next/image";

export const GeneralContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1195px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  padding: 24px 32px;
  background-color: #f7f7f7;

  @media (max-width: 1195px) {
    height: 150px;
  }
`;

export const ImageCompany = styled(Image)`
  height: auto;
`;
