import { ParagraphElement } from "@/shared/copies/paragraph/elements";
import { ContainerCard, Header, ImageCard, ContentContainer } from "./elements";
import TextTag from "@/components/textTag";

const TrendCard = ({ trend, selectedMode }) => {
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
      />
      <ContentContainer>
        <TextTag></TextTag>
        <Header bighead={selectedMode.bigHead}>{trend.header}</Header>
        <ParagraphElement secondary>{trend.description}</ParagraphElement>
      </ContentContainer>
    </ContainerCard>
  );
};

export default TrendCard;