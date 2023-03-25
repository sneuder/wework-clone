import { GeneralContainer, Container, ImageCompany } from "./elements";
import { Company } from "@/models/SocialProof";

interface CompanyCardsProps {
  companies: Company[];
}

const CompanyCards = ({ companies }: CompanyCardsProps) => {
  return (
    <GeneralContainer>
      {companies.map((company) => (
        <Container key={company.urlImage}>
          <ImageCompany
            src={company.urlImage}
            alt={"company"}
            width={100}
            height={50}
          />
        </Container>
      ))}
    </GeneralContainer>
  );
};

export default CompanyCards;
