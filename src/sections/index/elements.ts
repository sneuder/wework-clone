import styled from "@emotion/styled";
import StyledProps from "@/models/StyledProps";

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1195px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Section = styled.section<StyledProps>`
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${(props) =>
    props.secondary === "true" ? "#f7f7f7" : "transparent"};

  @media (max-width: 1195px) {
    padding: 0px 40px;
  }
`;
