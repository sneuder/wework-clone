import { Section } from "../elements";
import SecondHeader from "@/components/copies/headers/secondHeader/index";
import { ParagraphElement } from "@/components/copies/paragraph/elements";
import { ImageCTA, RightSide, HorizontalContainer } from "./elements";
import Direction from "@/components/direction/index";
import Tag from "@/components/tag/index";

const CTA = () => {
  return (
    <Section>
      <HorizontalContainer>
        <ImageCTA
          src={
            "https://ctfassets.imgix.net/vh7r69kgcki3/QGZypVuPUMCRIaXaQ3mOM/84ce490cd89ea03927e546bc5ccb1c49/Web_150DPI-20210825_WeWork_-_5_Temasek_Blvd_-_Suntec_Tower_S_-_Singapore_010.jpg?auto=format%20compress&fit=crop&q=50&w=750&h=422"
          }
          alt="as"
          width={630}
          height={0}
        />
        <RightSide>
          <Tag>Introductory Pricing</Tag>
          <SecondHeader>
            Get 25% off WeWork All Access Plus plan with this special offer
          </SecondHeader>
          <ParagraphElement secondary>
            Unlock workspace near you with 25% off WeWork All Access Plus
            monthly membership plan fees for 5 months. Terms apply.
          </ParagraphElement>
          <Direction href={"/"}>Learn more</Direction>
        </RightSide>
      </HorizontalContainer>
    </Section>
  );
};

export default CTA;
