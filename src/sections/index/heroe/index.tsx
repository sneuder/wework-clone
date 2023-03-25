import WorkSpaceForm from "@/components/workSpaceForm";

import { Section } from "./elements";
import { HeroeImage } from "./elements";

const Heroe = () => {
  return (
    <Section>
      <WorkSpaceForm />
      <HeroeImage
        src={
          "https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1200&h=675"
        }
        alt="asas"
        width={500}
        height={500}
      />
    </Section>
  );
};

export default Heroe;
