import styled from "@emotion/styled";
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

  @media (min-width: 840px) {
    grid-template-columns: 1fr max-content;
    grid-template-rows: unset;
  }
`;

const StyledCopyWrapper = styled.section`
  display: grid;
  gap: 1rem;
  max-width: 55ch;
`;

export default function Home() {
  const { greeting } = useStore();

  useEffect(() => {
    document.title = "Maximilian Dammert · Digital Product Designer";
  }, []);

  return (
    <StyledMainWrapper>
      <StyledCopyWrapper>
        <Typography type="h1" size="l">
          {greeting},<br />
          I’m Maximilian
        </Typography>
        <Typography type="p">
          an experienced digital product designer with passion for
          cross-functional product development and user-centered design. I offer
          a wide creative skill set — including UI design, UX design and
          front-end web development knowledge. In addition I’m very familiar
          with agile working environments.
        </Typography>
        <Typography type="p">
          From 2016 to 2021 I’ve been working at{" "}
          <Link
            href="https://sinnerschrader.com/"
            title="SinnerSchrader"
            target="_self"
          >
            SinnerSchrader
          </Link>
          .
        </Typography>
        <Typography type="p">
          Currently I’m striving to build the best user experience for software
          aimed at retail and healthcare at{" "}
          <Link
            href="https://www.oak.tt/"
            title="Oaktree Technologies"
            target="_self"
          >
            Oaktree Technologies
          </Link>
          .
        </Typography>{" "}
      </StyledCopyWrapper>
      <LinkList />
    </StyledMainWrapper>
  );
}
