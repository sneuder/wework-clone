import { VariantButton } from "./elements";

interface ButtonProps {
  textButton: string;
  buttonType?: string;
}

const Button = ({ textButton, buttonType }: ButtonProps) => {
  return <VariantButton buttonType={buttonType}>{textButton}</VariantButton>;
};

export default Button;
