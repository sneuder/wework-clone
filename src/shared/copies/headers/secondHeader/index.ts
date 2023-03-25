import styled from "@emotion/styled";

import StyledProps from "@/models/StyledProps";

const SecondHeader = styled.h2<StyledProps>`
  font-size: ${(props) => (props.secondary ? "1.5rem" : "2rem")};
`;

export default SecondHeader;
