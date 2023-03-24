import styled from "@emotion/styled";
import Link from "next/link";

export const LinkText = styled(Link)`
  color: #0000ff;
  flex-shrink: 0;

  &::after {
    content: " ➝";
  }

  &:hover {
    text-decoration: underline;
  }
`;
