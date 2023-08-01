import styled from "@emotion/styled";
import Link from "./Link";
import Typography from "./Typography";

const StyledLinkList = styled.aside`
  display: grid;
  gap: 3rem;
  justify-items: start;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));

  @media (min-width: 840px) {
    grid-template-columns: unset;
    gap: 4rem;
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
        <Typography type="h2" size="s">
          Get in touch
        </Typography>
        <Link title="E-Mail" href="mailto:mail@maximiliandammert.com">
          E-Mail
        </Link>
        <Link
          href="https://www.xing.com/profile/Maximilian_Dammert"
          target="_self"
          title="Xing"
        >
          Xing
        </Link>
        <Link
          href="https://de.linkedin.com/in/maximilian-dammert"
          target="_self"
          title="LinkedIn"
        >
          LinkedIn
        </Link>
      </StyledLinkStack>
      <StyledLinkStack>
        <Typography type="h2" size="s">
          More
        </Typography>
        <Link
          href="https://dribbble.com/mxdmrt"
          target="_self"
          title="Dribbble"
        >
          Dribbble
        </Link>
        <Link href="https://github.com/mxdmrt" target="_self" title="GitHub">
          GitHub
        </Link>
      </StyledLinkStack>
    </StyledLinkList>
  );
}
