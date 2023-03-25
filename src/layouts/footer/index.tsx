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
import Logo from "@/shared/logo";
import { ParagraphElement } from "@/shared/copies/paragraph/elements";

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
        {footerInfo.info.map((info) => (
          <Info key={info}>{info}</Info>
        ))}
      </ContainerInfo>
      <ContainerSettings>
        <ContainerSettings setting>
          {footerInfo.settings.map((info) => (
            <Info
              key={info}
              settings
              number
            >
              {info}
            </Info>
          ))}
        </ContainerSettings>
        <ContainerSettings setting>
          <ParagraphElement
            secondary
            gray
          >
            {footerInfo.copyright}
          </ParagraphElement>
        </ContainerSettings>
        <Logo />
      </ContainerSettings>
    </Container>
  );
};

export default Footer;
