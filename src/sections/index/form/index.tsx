import ContactForm from "@/components/contactForm";
import { Section } from "../elements";
import { Container, ContainerForm, ImageForm } from "./elements";

const Form = () => {
  return (
    <Section>
      <Container>
        <ImageForm
          src={
            "https://ctfassets.imgix.net/vh7r69kgcki3/3xm70BLNewYg0oQ0uqACIq/ea3bdb8af2c9eac51de863d15f493618/Web_72DPI-VIR_TYS_COF_OFFICE.jpg?auto=format%20compress&fit=crop&q=50&w=1200&h=675"
          }
          alt="a"
          width={1000}
          height={100}
        />
        <ContainerForm>
          <ContactForm />
        </ContainerForm>
      </Container>
    </Section>
  );
};

export default Form;
