import styled from "@emotion/styled";
import Link from "next/link";

const LinkText = styled(Link)`
  color: #0000ff;
  flex-shrink: 0;

  &::after {
    content: " ➝";
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkText;
