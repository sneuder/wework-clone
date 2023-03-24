import { Card, Container, RightSide, Header, Description } from "./elements";
import Image from "next/image";

const SolutionsCards = ({ solutions }) => {
  return (
    <Container>
      {solutions.map((solution) => (
        <Card
          key={solution.header}
          href={"/"}
        >
          <Image
            src={solution.urlImage}
            alt={solution.header}
            width={100}
            height={100}
          />
          <RightSide>
            <Header>{solution.header}</Header>
            <Description>{solution.description}</Description>
          </RightSide>
        </Card>
      ))}
    </Container>
  );
};

export default SolutionsCards;
