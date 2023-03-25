import { Container, CloseButton } from "./elements";
import { ParagraphElement } from "@/shared/copies/paragraph/elements";

const Cintillo = () => {
  return (
    <Container>
      <ParagraphElement small>
        Unlock workspace near you with 25% off WeWork All Access Plus monthly
        membership fees for 5 months. Terms apply.
      </ParagraphElement>
      <CloseButton />
    </Container>
  );
};

export default Cintillo;
