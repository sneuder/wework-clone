import styled from "@emotion/styled";

const SecondHeader = styled.h2`
  font-size: ${(props) => (props.secondary ? "1.5rem" : "2rem")};
`;

export default SecondHeader;
