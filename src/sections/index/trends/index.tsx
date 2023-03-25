import SecondHeader from "@/components/copies/headers/secondHeader/index";
import TextTag from "@/components/textTag/index";
import Direction from "@/components/direction/index";
import Separator from "@/components/separator/index";
import TrensCards from "@/components/trendsCards";

import TrendCard from "@/shared/trendCard";

import trendCardOptions from "@/styles/trendCardOptions";

import { Section } from "../elements";
import { HorizontalContainer } from "../elements";

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
      <Separator />
      <TrensCards trends={trendsInfo.trends} />
    </Section>
  );
};

export default Trends;
