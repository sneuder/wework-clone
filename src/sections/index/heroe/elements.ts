import styled from "@emotion/styled";
import Image from "next/image";
import StyledProps from "@/models/StyledProps";

export const Section = styled.main<StyledProps>`
  position: relative;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: ${(props) =>
    props.secondary === "true" ? "#f7f7f7" : "transparent"};
  height: 100vh;

  @media (max-width: 1195px) {
    padding: 0px 40px;
    justify-content: center;
    align-items: flex-end;
    height: 80vh;
  }
`;

export const HeroeImage = styled(Image)`
  position: absolute;
  z-index: -1;
  right: 60px;
  width: 80%;
  height: auto;
  border-radius: 0.25rem;

  @media (max-width: 1195px) {
    width: 90%;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
  }
`;
