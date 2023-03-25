import styled from "@emotion/styled";

export const Container = styled.footer`
  padding: 60px 60px;
  background: #f7f7f7;

  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 10px;
  column-gap: 80px;

  grid-template-areas:
    "page-1 page-2 page-3 network"
    "page-1 page-2 page-3 language"
    "info settings settings logo";

  @media (max-width: 1195px) {
    padding: 40px 40px;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(5, auto);

    grid-template-areas:
      "network newtwork"
      "page-1 page-2"
      "page-3 language"
      "info info"
      "settings logo";

    row-gap: 40px;
  }
`;

export const ContainerPages = styled.div`
  grid-area: ${(props) => props.page};
`;

export const ContainerNetWork = styled.div`
  justify-self: end;
  grid-area: network;

  @media (max-width: 1195px) {
    justify-self: start;
  }
`;

export const ContainerLanguage = styled.div`
  grid-area: language;
  width: 300px;
  justify-self: end;

  @media (max-width: 1195px) {
    width: 200px;
    justify-self: start;
  }
`;

export const ContainerInfo = styled.div`
  grid-area: info;
`;

export const ContainerSettings = styled.div`
  grid-area: settings;
`;
