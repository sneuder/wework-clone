import SecondHeader from "@/shared/copies/headers/secondHeader/index";
import TextTag from "@/shared/textTag/index";
import TrendCard from "@/shared/trendCard";

import Direction from "@/components/direction/index";
import Separator from "@/components/separator/index";
import TrensCards from "@/components/trendsCards";

import { Section } from "../elements";
import { HorizontalContainer } from "../elements";

import trendCardOptions from "@/styles/trendCardOptions";
import TrendsInfo from "@/models/Trends";

interface TrendsProps {
  trendsInfo: TrendsInfo;
}

const Trends = ({ trendsInfo }: TrendsProps) => {
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
