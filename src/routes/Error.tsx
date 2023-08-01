import styled from "@emotion/styled";
import Link from "../components/Link";
import Typography from "../components/Typography";

const StyledErrorMain = styled.main`
  display: grid;
  gap: 2rem;
  align-self: start;
  align-items: start;
  justify-items: start;
`;

export default function Error() {
  return (
    <StyledErrorMain>
      <Typography type="h1" size="l">
        Oops!
      </Typography>
      <Typography type="p">404 · This page doesn’t exist</Typography>
      <Link linkType="routerLink" title="Back" to="/">
        Start over &rarr;
      </Link>
    </StyledErrorMain>
  );
}
