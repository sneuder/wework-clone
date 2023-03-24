import { Section } from "../elements";
import { HorizontalContainer, LeftSide, ContainerImage } from "./elements";
import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import Paragraph from "@/shared/copies/paragraph";
import Direction from "@/components/direction";

import Image from "next/image";

const Network = () => {
  return (
    <Section secondary>
      <HorizontalContainer>
        <LeftSide>
          <SecondaryHeader
            textHeader={"Workspace where and when you need it"}
          />
          <Paragraph
            textParagraph={
              "With over 700 global locations, teams can do their best work in more places, whether it’s being productive closer to home, having access to multiple workspaces, or collaborating at a central office."
            }
          />
          <Direction />
        </LeftSide>
        <ContainerImage>
          <Image
            src={
              "https://ctfassets.imgix.net/vh7r69kgcki3/5zgqBvLQ7hx0Pr7Ld6z0Uo/cee7093a699e20d6c39c38c72877e623/Web_150DPI-ww-locations-map_April-2019__1_-01.jpg?auto=format%20compress&fit=crop&q=50&w=750&h=422"
            }
            alt="ss"
            width={750}
            height={442}
            style={{ height: "auto" }}
          />
        </ContainerImage>
      </HorizontalContainer>
    </Section>
  );
};

export default Network;
