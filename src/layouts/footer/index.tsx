import {
  Container,
  ContainerNetWork,
  ContainerInfo,
  ContainerSettings,
} from "./elements";

import LinkPages from "@/shared/linkPages";

const Footer = ({ footerInfo }) => {
  return (
    <Container>
      {Object.values(footerInfo.linkPages).map((linkPage) => (
        <LinkPages
          key={linkPage.header}
          pages={linkPage}
        />
      ))}
      <ContainerNetWork></ContainerNetWork>
      <ContainerInfo></ContainerInfo>
      <ContainerSettings></ContainerSettings>
    </Container>
  );
};

export default Footer;
