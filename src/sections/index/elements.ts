import styled from "@emotion/styled";

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${(props) => (props.secondary ? "#f7f7f7" : "transparent")};

  @media (max-width: 1195px) {
    padding: 0px 40px;
  }
`;
