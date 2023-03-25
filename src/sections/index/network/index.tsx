import { Section } from "../elements";
import { HorizontalContainer, LeftSide, ImageNet } from "./elements";

import { SecondHeader } from "@/shared/copies/headers/secondaryHeader/elements";
import { ParagraphElement } from "@/shared/copies/paragraph/elements";

import Direction from "@/components/direction/index";
import TextTag from "@/components/textTag/index";

const Network = () => {
  return (
    <Section secondary>
      <HorizontalContainer>
        <LeftSide>
          <TextTag>Global NetWork</TextTag>
          <SecondHeader>Workspace where and when you need it</SecondHeader>
          <ParagraphElement secondary>
            With over 700 global locations, teams can do their best work in more
            places, whether it’s being productive closer to home, having access
            to multiple workspaces, or collaborating at a central office.
          </ParagraphElement>
          <Direction href={"/"}>Explore Locations</Direction>
        </LeftSide>
        <ImageNet
          src={
            "https://ctfassets.imgix.net/vh7r69kgcki3/5zgqBvLQ7hx0Pr7Ld6z0Uo/cee7093a699e20d6c39c38c72877e623/Web_150DPI-ww-locations-map_April-2019__1_-01.jpg?auto=format%20compress&fit=crop&q=50&w=750&h=422"
          }
          alt="ss"
          width={700}
          height={0}
        />
      </HorizontalContainer>
    </Section>
  );
};

export default Network;
