import styled from "@emotion/styled";
import { useEffect } from "react";
import Link from "./Link";
import Typography from "./Typography";

const StyledErrorMain = styled.main`
  display: grid;
  gap: 2rem;
  align-self: start;
  align-items: start;
  justify-items: start;
`;

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Maximilian Dammert · 404";
  }, []);

  return (
    <StyledErrorMain>
      <Typography type="h1" size="l">
        Oops!
      </Typography>
      <Typography type="p">404 · This page doesn’t exist</Typography>
      <Link linkType="routerLink" title="Back" to="../">
        Start over &rarr;
      </Link>
    </StyledErrorMain>
  );
};

export default PageNotFound;
