import { HorizontalContainer, Section } from "../elements";
import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import { ImageCTA, RightSide } from "./elements";
import Paragraph from "@/shared/copies/paragraph";
import Direction from "@/components/direction";
import Tag from "@/components/tag";

const CTA = () => {
  return (
    <Section>
      <HorizontalContainer>
        <ImageCTA
          src={
            "https://ctfassets.imgix.net/vh7r69kgcki3/QGZypVuPUMCRIaXaQ3mOM/84ce490cd89ea03927e546bc5ccb1c49/Web_150DPI-20210825_WeWork_-_5_Temasek_Blvd_-_Suntec_Tower_S_-_Singapore_010.jpg?auto=format%20compress&fit=crop&q=50&w=750&h=422"
          }
          alt="as"
          width={708}
          height={398}
        />
        <RightSide>
          <Tag />
          <SecondaryHeader
            textHeader={
              "Get 25% off WeWork All Access Plus plan with this special offer"
            }
          />
          <Paragraph
            textParagraph={
              "Unlock workspace near you with 25% off WeWork All Access Plus monthly membership plan fees for 5 months. Terms apply."
            }
          />
          <Direction />
        </RightSide>
      </HorizontalContainer>
    </Section>
  );
};

export default CTA;