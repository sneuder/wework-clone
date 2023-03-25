import CompanyCards from "@/components/companyCards";
import Direction from "@/components/direction/index";

import SecondHeader from "@/shared/copies/headers/secondHeader/index";
import Paragraph from "@/shared/copies/paragraph";

import { Section } from "../elements";
import { HorizontalContainer } from "./elements";

import SocialProofInfo from "@/models/SocialProof";

interface SocialProofProps {
  socialInfo: SocialProofInfo;
}

const SocialProof = ({ socialInfo }: SocialProofProps) => {
  return (
    <Section>
      <SecondHeader>{socialInfo.header}</SecondHeader>
      <HorizontalContainer>
        <Paragraph>{socialInfo.description}</Paragraph>
        <Direction href={"/"}>{socialInfo.direction}</Direction>
      </HorizontalContainer>
      <CompanyCards companies={socialInfo.companies}></CompanyCards>
    </Section>
  );
};

export default SocialProof;
