import { GeneralContainer } from "./elements";
import TrendCard from "@/shared/trendCard";
import trendCardOptions from "@/styles/trendCardOptions";
import { Trend } from "@/models/Trends";

interface TrendsCardsProps {
  trends: Trend[];
}

const TrensCards = ({ trends }: TrendsCardsProps) => {
  return (
    <GeneralContainer>
      {trends.map((trend) => (
        <TrendCard
          key={trend.description}
          trend={trend}
          selectedMode={trendCardOptions.vertical}
        />
      ))}
    </GeneralContainer>
  );
};

export default TrensCards;
