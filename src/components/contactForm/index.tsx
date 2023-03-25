import { TextField, FormControl, InputLabel, Select } from "@mui/material";

import SecondHeader from "@/shared/copies/headers/secondHeader/index";
import { ParagraphElement } from "@/shared/copies/paragraph/elements";
import Button from "@/shared/button";
import InputText from "@/shared/inputs/text";

import { Form, ContainerInputs, Policy } from "./elements";
import InputGroup from "@/shared/inputs/group";

const ContactForm = ({ contactInfo }) => {
  return (
    <Form>
      <SecondHeader>Let us find your ideal workspace</SecondHeader>
      <ParagraphElement secondary>
        Complete the form and a WeWork team member will be in touch with you
        shortly
      </ParagraphElement>
      <ContainerInputs>
        {contactInfo.inputs.map((input) => {
          if (input.type === "group") return <InputGroup input={input} />;
          return <InputText input={input} />;
        })}
      </ContainerInputs>
      <Policy>
        By clicking the button below, you agree to our Terms of Service and
        acknowledge our Global Privacy Policy.
      </Policy>
      <Button textButton={"Submit"} />
    </Form>
  );
};

export default ContactForm;
