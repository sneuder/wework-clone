import styled from "@emotion/styled";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.nav`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 20px 60px;

  max-width: 100vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1195px) {
    padding: 20px 40px;
    position: static;
    width: 100%;
    max-width: 100%;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ContainerCTA = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const LinkText = styled(Link)`
  &:active {
    color: #000;
  }

  &:visited {
    color: #000;
  }

  @media (max-width: 1195px) {
    display: ${(props) => (props.showdesktop ? "none" : "block")};
  }
`;

export const Menu = styled(GiHamburgerMenu)`
  display: none;
  width: 23px;
  height: auto;
  cursor: pointer;

  @media (max-width: 1195px) {
    display: block;
  }
`;
