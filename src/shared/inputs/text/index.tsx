import { TextField } from "@mui/material";
import { Input } from "@/models/Contact";

interface InputTextProps {
  input: Input;
}

const InputText = ({ input }: InputTextProps) => {
  return (
    <TextField
      label={input.label}
      variant="outlined"
    />
  );
};

export default InputText;
