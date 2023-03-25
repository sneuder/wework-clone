import { FormControl, InputLabel, Select } from "@mui/material";
import { InputGroup, Input } from "@/models/Contact";

interface InputGroupProps {
  input: InputGroup;
}

const InputGroup = ({ input }: InputGroupProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="grouped-native-select">{input.label}</InputLabel>
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
        {Object.keys(input.groups).map((groupKey: string) => (
          <optgroup
            label={groupKey}
            key={groupKey}
          >
            {input.groups[groupKey].map((item) => (
              <option
                value={item.value}
                key={item.value}
              >
                {item.label}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputGroup;
