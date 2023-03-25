import { TextField } from "@mui/material";

const InputText = ({ input }) => {
  return (
    <TextField
      label={input.label}
      variant="outlined"
    />
  );
};

export default InputText;
