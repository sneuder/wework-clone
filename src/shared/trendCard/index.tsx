import ParagraphElement from "@/shared/copies/paragraph/index";
import TextTag from "@/shared/textTag/index";

import { ContainerCard, Header, ImageCard, ContentContainer } from "./elements";
import { Trend } from "@/models/Trends";
import TrendCardOption from "@/models/TrendCardsOption";

interface TrendCardsProps {
  trend: Trend;
  selectedMode: TrendCardOption;
}

const TrendCard = ({ trend, selectedMode }: TrendCardsProps) => {
  return (
    <ContainerCard
      key={trend.header}
      direction={selectedMode.direction}
    >
      <ImageCard
        src={trend.urlImage}
        alt={trend.description}
        width={500}
        height={500}
        direction={selectedMode.direction}
      />
      <ContentContainer>
        <TextTag secondary={"true"}>{trend.tag}</TextTag>
        <Header bighead={selectedMode.bigHead.toString()}>
          {trend.header}
        </Header>
        <ParagraphElement secondary={"true"}>
          {trend.description}
        </ParagraphElement>
      </ContentContainer>
    </ContainerCard>
  );
};

export default TrendCard;
