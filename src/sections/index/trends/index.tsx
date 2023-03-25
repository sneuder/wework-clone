import { SecondHeader } from "@/shared/copies/headers/secondaryHeader/elements";
import TextTag from "@/components/textTag/index";

import { Section } from "../elements";
import { HorizontalContainer } from "../elements";
import Direction from "@/components/direction/index";
import TrensCards from "@/components/trendsCards";
import TrendCard from "@/shared/trendCard";

import trendCardOptions from "@/styles/trendCardOptions";

const Trends = ({ trendsInfo }) => {
  return (
    <Section>
      <TextTag></TextTag>
      <HorizontalContainer>
        <SecondHeader>{trendsInfo.header}</SecondHeader>
        <Direction href={"/"}>{trendsInfo.direction}</Direction>
      </HorizontalContainer>
      <TrendCard
        trend={trendsInfo.mainTrend}
        selectedMode={trendCardOptions.horizontal}
      />
      <TrensCards trends={trendsInfo.trends} />
    </Section>
  );
};

export default Trends;
