import { GeneralContainer, Container, ImageCompany } from "./elements";

const CompanyCards = ({ companies }) => {
  return (
    <GeneralContainer>
      {companies.map((company) => (
        <Container key={company.urlImage}>
          <ImageCompany
            src={company.urlImage}
            alt={"any"}
            width={100}
            height={50}
          />
        </Container>
      ))}
    </GeneralContainer>
  );
};

export default CompanyCards;
