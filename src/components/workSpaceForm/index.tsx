import { Form } from "./elements";
import { ParagraphElement } from "../copies/paragraph/elements";
import { TextField, FormControl, InputLabel, Select } from "@mui/material";

const WorkSpaceForm = () => {
  return (
    <Form>
      <ParagraphElement secondary>
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
    </Form>
  );
};

export default WorkSpaceForm;
