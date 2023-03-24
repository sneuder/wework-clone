import CompanyCards from "@/components/companyCards";
import { Section } from "./elements";
import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import Paragraph from "@/shared/copies/paragraph";

const SocialProof = ({ socialInfo }) => {
  return (
    <Section>
      <SecondaryHeader textHeader={socialInfo.header} />
      <Paragraph textParagraph={socialInfo.description} />
      <CompanyCards companies={socialInfo.companies}></CompanyCards>
    </Section>
  );
};

export default SocialProof;
