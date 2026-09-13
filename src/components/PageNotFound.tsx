import styled from "@emotion/styled";
import { useEffect } from "react";

import Link from "./Link";
import Typography from "./Typography";

const StyledErrorMain = styled.main`
  display: grid;
  gap: 2rem;
  align-self: start;
  place-items: start start;
`;

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Maximilian Dammert · 404";
  }, []);

  return (
    <StyledErrorMain>
      <Typography size="l" type="h1">
        Oops!
      </Typography>
      <Typography type="p">404 · This page doesn’t exist</Typography>
      <Link routerLinkProps={{ to: ".." }} title="Start over">
        Start over &rarr;
      </Link>
    </StyledErrorMain>
  );
};

export default PageNotFound;
