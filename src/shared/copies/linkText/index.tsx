import Link from "next/link";
import { MainLink } from "./elements";

const LinkText = ({ textLink }) => {
  return <MainLink href={"/"}>{textLink}</MainLink>;
};

export default LinkText;
