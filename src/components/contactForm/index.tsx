import SecondHeader from "@/shared/copies/headers/secondHeader/index";
import ParagraphElement from "@/shared/copies/paragraph/index";
import Button from "@/shared/button";
import InputText from "@/shared/inputs/text";

import { Form, ContainerInputs, Policy } from "./elements";
import InputGroup from "@/shared/inputs/group";

import Contact, { InputGroup as InputGroupInfo } from "@/models/Contact";

interface ContactFormProps {
  contactInfo: Contact;
}

const ContactForm = ({ contactInfo }: ContactFormProps) => {
  return (
    <Form>
      <SecondHeader>{contactInfo.header}</SecondHeader>
      <ParagraphElement secondary={"true"}>
        {contactInfo.description}
      </ParagraphElement>
      <ContainerInputs>
        {contactInfo.inputs.map((input) => {
          if (input.type === "group")
            return <InputGroup input={input as InputGroupInfo} />;
          return (
            <InputText
              key={input.label}
              input={input}
            />
          );
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
