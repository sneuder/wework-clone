import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import { Section } from "../elements";
import { HorizontalContainer } from "../elements";
import SolutionsCards from "@/components/solutionsCards";
import Direction from "@/components/direction";

const Solutions = ({ solutionsInfo }) => {
  return (
    <Section>
      <HorizontalContainer>
        <SecondaryHeader textHeader={solutionsInfo.header} />
        <Direction />
      </HorizontalContainer>
      <SolutionsCards solutions={solutionsInfo.solutions} />
    </Section>
  );
};

export default Solutions;
