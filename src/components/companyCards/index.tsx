import { GeneralContainer, Container } from "./elements";
import Image from "next/image";

const CompanyCards = ({ companies }) => {
  return (
    <GeneralContainer>
      {companies.map((company) => (
        <Container key={company.urlImage}>
          <Image
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
