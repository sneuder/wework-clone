import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import { Section } from "../elements";
import { HorizontalContainer } from "../elements";
import SolutionsCards from "@/components/solutionsCards";
import Direction from "@/components/direction";
import { SecondHeader } from "@/shared/copies/headers/secondaryHeader/elements";

const Solutions = ({ solutionsInfo }) => {
  return (
    <Section>
      <HorizontalContainer>
        <SecondHeader secondary>{solutionsInfo.header}</SecondHeader>
        <Direction />
      </HorizontalContainer>
      <SolutionsCards solutions={solutionsInfo.solutions} />
    </Section>
  );
};

export default Solutions;
