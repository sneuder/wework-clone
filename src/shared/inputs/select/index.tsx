import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";

const InputSelect = () => {
  return (
    <FormControl fullWidth>
      <InputLabel>Language</InputLabel>
      <Select
        label="Language"
        value={20}
      >
        <MenuItem value={20}>English</MenuItem>
        <MenuItem value={10}>Spanish</MenuItem>
        <MenuItem value={30}>French</MenuItem>
      </Select>
    </FormControl>
  );
};

export default InputSelect;
