import { Form, ContainerInputs, Policy } from "./elements";
import TextField from "@mui/material/TextField";
import SecondaryHeader from "@/shared/copies/headers/secondaryHeader";
import Paragraph from "@/shared/copies/paragraph";
import Button from "@/shared/button";

const ContactForm = () => {
  return (
    <Form>
      <SecondaryHeader textHeader={"Let us find your ideal workspace"} />
      <Paragraph
        textParagraph={
          "Complete the form and a WeWork team member will be in touch with you shortly"
        }
      />
      <ContainerInputs>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
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
