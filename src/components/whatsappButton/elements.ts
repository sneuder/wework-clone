import styled from "@emotion/styled";
import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";

export const Container = styled(Link)`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  margin: 30px;
  background: #25d366;
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(ImWhatsapp)`
  color: #fff;
  font-size: 1.5rem;
`;
