import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  background-color: #fff;
  padding: 4.5rem 4rem 4rem;
  border-radius: 0.25rem 0.25rem 0 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 1195px) {
    padding: 3rem 2rem 3rem;
  }

  @media (max-width: 600px) {
    padding: 0px;
    align-items: stretch;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 1195px) {
    grid-template-columns: 1fr;
  }
`;

export const Policy = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-right: 2rem;
`;
