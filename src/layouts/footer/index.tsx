import {
  Container,
  ContainerPages,
  ContainerNetWork,
  ContainerInfo,
  ContainerSettings,
  ContainerLanguage,
} from "./elements";

import LinkPages from "@/shared/linkPages";
import InputSelect from "@/shared/inputs/select";
import SocialNetwork from "@/shared/socialNetwork";

const Footer = ({ footerInfo }) => {
  return (
    <Container>
      {Object.values(footerInfo.linkPages).map((linkPage, index) => (
        <ContainerPages
          page={`page-${index + 1}`}
          key={linkPage.header}
        >
          <LinkPages pages={linkPage} />
        </ContainerPages>
      ))}
      <ContainerNetWork>
        <SocialNetwork />
      </ContainerNetWork>
      <ContainerLanguage>
        <InputSelect input={""} />
      </ContainerLanguage>
      <ContainerInfo></ContainerInfo>
      <ContainerSettings></ContainerSettings>
    </Container>
  );
};

export default Footer;
