import styled from "@emotion/styled";

import Link from "./Link";
import Typography from "./Typography";

const StyledLinkList = styled.aside`
  display: grid;
  gap: 3rem;
  place-items: start start;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));

  @media (width >= 840px) {
    grid-template-columns: unset;
    gap: 4rem;
    position: sticky;
    bottom: 4rem;
  }
`;

const StyledLinkStack = styled.div`
  display: grid;
  gap: 1.5rem;
  justify-items: start;
`;

export default function LinkList() {
  return (
    <StyledLinkList>
      <StyledLinkStack>
        <Typography size="s" type="h2">
          Get in touch
        </Typography>
        <Link href="mailto:mail@maximiliandammert.com" title="E-Mail">
          E-Mail
        </Link>
        <Link href="https://www.xing.com/profile/Maximilian_Dammert" target="_self" title="Xing">
          Xing
        </Link>
        <Link href="https://de.linkedin.com/in/maximilian-dammert" target="_self" title="LinkedIn">
          LinkedIn
        </Link>
      </StyledLinkStack>
      <StyledLinkStack>
        <Typography size="s" type="h2">
          More
        </Typography>
        <Link href="https://dribbble.com/mxdmrt" target="_self" title="Dribbble">
          Dribbble
        </Link>
        <Link href="https://github.com/mxdmrt" target="_self" title="GitHub">
          GitHub
        </Link>
      </StyledLinkStack>
    </StyledLinkList>
  );
}
