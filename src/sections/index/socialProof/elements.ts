import styled from "@emotion/styled";

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 300px;

  @media (max-width: 1195px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
