import styled from "@emotion/styled";
import Image from "next/image";

export const Section = styled.main`
  position: relative;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: ${(props) => (props.secondary ? "#f7f7f7" : "transparent")};
  height: 100vh;

  @media (max-width: 1195px) {
    padding: 0px 40px;
  }
`;

export const HeroeImage = styled(Image)`
  position: absolute;
  z-index: -1;
  right: 60px;
  width: 80%;
  height: auto;
  border-radius: 0.25rem;
`;
