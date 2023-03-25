import {
  Container,
  ContainerPages,
  ContainerNetWork,
  ContainerInfo,
  ContainerSettings,
  ContainerLanguage,
  Info,
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
      <ContainerInfo>
        <Info number>+5715087567</Info>
        <Info>WeWork Companies LLC</Info>
        <Info>75 Rockefeller Plaza</Info>
        <Info>Floor 10</Info>
        <Info>New York, New York 10019</Info>
      </ContainerInfo>
      <ContainerSettings></ContainerSettings>
    </Container>
  );
};

export default Footer;
