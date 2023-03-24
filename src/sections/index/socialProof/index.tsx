import CompanyCards from "@/components/companyCards";
import { Section } from "../elements";
import { HorizontalContainer } from "../elements";
import Direction from "@/components/direction";
import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import Paragraph from "@/shared/copies/paragraph";

const SocialProof = ({ socialInfo }) => {
  return (
    <Section>
      <SecondaryHeader textHeader={socialInfo.header} />
      <HorizontalContainer>
        <Paragraph textParagraph={socialInfo.description} />
        <Direction />
      </HorizontalContainer>
      <CompanyCards companies={socialInfo.companies}></CompanyCards>
    </Section>
  );
};

export default SocialProof;
