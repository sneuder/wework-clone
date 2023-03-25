import styled from "@emotion/styled";

export const Container = styled.footer`
  padding: 60px 60px;
  background: #f7f7f7;

  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 80px;

  @media (max-width: 1195px) {
    padding: 40px 40px;
  }
`;

export const ContainerNetWork = styled.div``;

export const ContainerInfo = styled.div``;

export const ContainerSettings = styled.div``;
