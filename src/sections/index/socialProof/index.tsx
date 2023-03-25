import CompanyCards from "@/components/companyCards";
import { Section } from "../elements";
import { HorizontalContainer } from "./elements";
import Direction from "@/components/direction/index";

import SecondHeader from "@/components/copies/headers/secondHeader/index";

import Paragraph from "@/components/copies/paragraph";

const SocialProof = ({ socialInfo }) => {
  return (
    <Section>
      <SecondHeader>{socialInfo.header}</SecondHeader>
      <HorizontalContainer>
        <Paragraph textParagraph={socialInfo.description} />
        <Direction href={"/"}>{socialInfo.direction}</Direction>
      </HorizontalContainer>
      <CompanyCards companies={socialInfo.companies}></CompanyCards>
    </Section>
  );
};

export default SocialProof;
