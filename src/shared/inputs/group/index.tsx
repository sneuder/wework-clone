import { FormControl, InputLabel, Select } from "@mui/material";

const InputGroup = ({ input }) => {
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
        {Object.keys(input.groups).map((groupKey) => (
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
