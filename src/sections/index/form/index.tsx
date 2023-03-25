import ContactForm from "@/components/contactForm";
import { Section } from "../elements";
import { Container, ContainerForm, ImageForm } from "./elements";

import Contact from "@/models/Contact";

interface FormProps {
  contactInfo: Contact;
}

const Form = ({ contactInfo }: FormProps) => {
  return (
    <Section>
      <Container>
        <ImageForm
          src={contactInfo.urlImage}
          alt="background form"
          width={1000}
          height={100}
        />
        <ContainerForm>
          <ContactForm contactInfo={contactInfo} />
        </ContainerForm>
      </Container>
    </Section>
  );
};

export default Form;
