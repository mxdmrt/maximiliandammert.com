import styled from "@emotion/styled";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import Link from "../components/Link";
import LinkList from "../components/LinkList";
import Typography from "../components/Typography";
import { useStore } from "../store/Store";

const StyledMainWrapper = styled.main`
  display: grid;
  gap: 4rem;
  align-items: end;
  grid-template-rows: 1fr max-content;

  @media (width >= 840px) {
    grid-template-columns: 1fr max-content;
    grid-template-rows: unset;
  }
`;

const StyledCopyWrapper = styled.section`
  display: grid;
  gap: 1rem;
  max-width: 55ch;
`;

const Index = () => {
  const { greeting } = useStore();

  useEffect(() => {
    document.title = "Maximilian Dammert · Digital Product Designer";
  }, []);

  return (
    <StyledMainWrapper>
      <StyledCopyWrapper>
        <Typography size="l" type="h1">
          {greeting},<br />
          I’m Maximilian
        </Typography>
        <Typography type="p">
          an experienced digital product designer with passion for cross-functional product
          development and user-centered design. I offer a wide creative skill set — including UI
          design, UX design and front-end web development knowledge. In addition I’m very familiar
          with agile working environments.
        </Typography>
        <Typography type="p">
          From 2016 to 2021 I’ve been crafting digital products at{" "}
          <Link
            href="https://en.wikipedia.org/wiki/SinnerSchrader"
            target="_self"
            title="SinnerSchrader"
          >
            SinnerSchrader
          </Link>{" "}
          and{" "}
          <Link href="https://www.accenture.com/" target="_self" title="Accenture Interactive">
            Accenture Interactive
          </Link>
          .
        </Typography>
        <Typography type="p">
          For the duration of 2021 to 2023, I’ve been employed as a UX designer at{" "}
          <Link href="https://www.oak.tt/" target="_self" title="Oaktree Technologies">
            Oaktree Technologies
          </Link>
          , shaping user experiences and enhancing digital interfaces aimed at retail and
          healthcare.
        </Typography>
        <Typography type="p">
          Since November 2023 I’m supporting digital transformation at{" "}
          <Link href="https://www.fielmann.de/" target="_self" title="Fielmann">
            Fielmann
          </Link>
          .
        </Typography>
      </StyledCopyWrapper>
      <LinkList />
    </StyledMainWrapper>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export default Index;
