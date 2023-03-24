import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 1195px) {
    gap: 50px;
  }
`;
