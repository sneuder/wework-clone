import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1195px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-column: 2fr;
  }
`;

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  gap: 25px;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #e3e3e3;

  transition: box-shadow 250ms, -webkit-box-shadow 250ms;

  &:hover {
    border-color: #ccf;
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.16);
  }

  &:active {
    color: #000;
  }

  &:visited {
    color: #000;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: #545e77;
`;
