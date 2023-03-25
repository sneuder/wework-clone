import { VariantButton } from "./elements";

const SecondaryButton = ({ textButton, buttonType }) => {
  return <VariantButton buttonType={buttonType}>{textButton}</VariantButton>;
};

export default SecondaryButton;
