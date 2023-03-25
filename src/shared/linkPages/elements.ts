import styled from "@emotion/styled";
import Link from "next/link";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkPage = styled(Link)`
  &:active {
    color: #000;
  }

  &:visited {
    color: #000;
  }

  &:hover {
    text-decoration: underline;
  }
`;
