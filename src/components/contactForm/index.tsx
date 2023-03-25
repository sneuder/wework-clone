import { TextField, FormControl, InputLabel, Select } from "@mui/material";

import SecondHeader from "@/components/copies/headers/secondHeader/index";
import { ParagraphElement } from "@/components/copies/paragraph/elements";

import Button from "@/shared/buttons/primary";

import { Form, ContainerInputs, Policy } from "./elements";

const ContactForm = () => {
  return (
    <Form>
      <SecondHeader>Let us find your ideal workspace</SecondHeader>
      <ParagraphElement secondary>
        Complete the form and a WeWork team member will be in touch with you
        shortly
      </ParagraphElement>
      <ContainerInputs>
        <TextField
          id="outlined-basic"
          label="Full name *"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Email addres"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Company name *"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Phone number *"
          variant="outlined"
        />

        <FormControl>
          <InputLabel htmlFor="grouped-native-select">Location *</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
          >
            <option
              aria-label="None"
              value=""
            />
            <optgroup label="Argetina">
              <option value={1}>Buenos Aires</option>
            </optgroup>
            <optgroup label="Colombia">
              <option value={3}>Bogotá</option>
              <option value={3}>Medellín</option>
            </optgroup>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="How manny people do you need workspace? *"
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
