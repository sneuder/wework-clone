import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  padding: 80px 200px 0px;

  @media (max-width: 1195px) {
    padding: 80px 50px 0px;
  }

  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const ContainerForm = styled.div`
  position: relative;
`;
