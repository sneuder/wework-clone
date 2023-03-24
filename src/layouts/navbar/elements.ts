import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.nav`
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 20px 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
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
