import SolutionsCards from "@/components/solutionsCards";
import Direction from "@/components/direction/index";
import SecondHeader from "@/shared/copies/headers/secondHeader/index";

import { Section } from "../elements";
import { HorizontalContainer } from "../elements";

import SolutionsInfo from "@/models/Solutions";

interface SolutionsProps {
  solutionsInfo: SolutionsInfo;
}

const Solutions = ({ solutionsInfo }: SolutionsProps) => {
  return (
    <Section>
      <HorizontalContainer>
        <SecondHeader secondary={"true"}>{solutionsInfo.header}</SecondHeader>
        <Direction href={"/"}>{solutionsInfo.direction}</Direction>
      </HorizontalContainer>
      <SolutionsCards solutions={solutionsInfo.solutions} />
    </Section>
  );
};

export default Solutions;
