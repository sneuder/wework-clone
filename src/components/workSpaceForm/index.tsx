import { FormControl, InputLabel, Select } from "@mui/material";

import ParagraphElement from "@/shared/copies/paragraph";
import FirstHeader from "@/shared/copies/headers/firstHeader/index";
import Button from "@/shared/button";

import { Form } from "./elements";

const WorkSpaceForm = () => {
  return (
    <Form>
      <FirstHeader>For all the ways you work, we're here</FirstHeader>
      <ParagraphElement secondary={"true"}>
        Find a location near you. Explore memberships and move-in ready offices
        for individuals or companies of all sizes.
      </ParagraphElement>

      <FormControl fullWidth>
        <InputLabel htmlFor="grouped-native-select">Location *</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
          fullWidth
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
      <Button
        textButton={"Start"}
        buttonType={"primary"}
      />
    </Form>
  );
};

export default WorkSpaceForm;
