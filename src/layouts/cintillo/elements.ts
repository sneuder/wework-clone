import styled from "@emotion/styled";
import { GrFormClose } from "react-icons/gr";

export const Container = styled.div`
  max-width: 100wv;
  background: rgba(0, 0, 255, 0.1);
  padding: 10px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 1195px) {
    padding: 10px 40px;
s  }
`;

export const CloseButton = styled(GrFormClose)`
  font-size: 1.5rem;
  cursor: pointer;
`;
