import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.25rem;
  width: 35%;

  @media (max-width: 1195px) {
    width: 90%;
  }
`;
