import { GeneralContainer } from "./elements";
import TrendCard from "@/shared/trendCard";
import trendCardOptions from "@/styles/trendCardOptions";

const TrensCards = ({ trends }) => {
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
