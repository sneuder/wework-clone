import styled from "@emotion/styled";

import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { IconType } from "react-icons/lib";

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const socialBranches = [
  ImFacebook,
  AiOutlineInstagram,
  BsTwitter,
  ImLinkedin2,
];

export const socialBranch = (icon: IconType) => {
  return styled(icon)`
    font-size: 1.2rem;
  `;
};
