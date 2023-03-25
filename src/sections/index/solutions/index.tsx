import { Section } from "../elements";
import { HorizontalContainer } from "../elements";
import SolutionsCards from "@/components/solutionsCards";
import Direction from "@/components/direction/index";
import { SecondHeader } from "@/components/copies/headers/secondaryHeader/elements";

const Solutions = ({ solutionsInfo }) => {
  return (
    <Section>
      <HorizontalContainer>
        <SecondHeader secondary>{solutionsInfo.header}</SecondHeader>
        <Direction href={"/"}>{solutionsInfo.direction}</Direction>
      </HorizontalContainer>
      <SolutionsCards solutions={solutionsInfo.solutions} />
    </Section>
  );
};

export default Solutions;
