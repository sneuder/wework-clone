import styled from "@emotion/styled";

export const Container = styled.footer`
  padding: 60px 60px;
  background: #f7f7f7;

  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-template-rows: 40px;
  row-gap: 40px;
  column-gap: 80px;

  grid-template-areas:
    "page-1 page-2 page-3 network"
    "page-1 page-2 page-3 language"
    "info info settings settings";

  @media (max-width: 1195px) {
    padding: 40px 40px;
    grid-template-columns: auto auto;

    grid-template-areas:
      "network newtwork"
      "page-1 page-2"
      "page-3 language"
      "info info"
      "settings settings";

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

export const ContainerInfo = styled.address`
  grid-area: info;
  font-style: normal;

  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const Info = styled.p`
  font-family: "Apercu Mono", SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace !important;
  font-size: 0.875rem;
  font-weight: 400;

  ${(props) => props.number && `color: #0000ff`};
  ${(props) => props.settings && `font-family: "Apercu"`};
`;

export const ContainerSettings = styled.div`
  grid-area: settings;
  justify-self: end;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 20px;

  ${(props) =>
    props.setting &&
    `
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    flex-direction: row;
  `}

  @media (max-width: 1195px) {
    justify-self: start;
    align-items: flex-start;
  }
`;
