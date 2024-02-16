import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHotkeys } from "react-hotkeys-hook";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createRandomTheme } from "../helpers/randomTheme";
import { darkTheme, lightTheme } from "../helpers/theme";
import { useStore } from "../store/Store";

const StyledPageLayout = styled.div`
  display: grid;
  gap: 4rem;
  min-height: calc(100dvh - var(--pagePadding) - (var(--pagePadding) - 1rem));
  grid-template-rows: max-content 1fr max-content;
`;

export default function Root() {
  const { theme, setTheme, setIsScrolled } = useStore();

  useEffect(() => {
    const onMediaQueryListChange = () =>
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? darkTheme
          : lightTheme,
      );

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", onMediaQueryListChange);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onMediaQueryListChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onMediaQueryListChange);
    };
  }, [setTheme]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setIsScrolled]);

  useHotkeys("a", () => setTheme(createRandomTheme()));
  useHotkeys("s", () => setTheme(lightTheme));
  useHotkeys("d", () => setTheme(darkTheme));

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      switch (theme.type) {
        case "light":
          return setTheme(darkTheme);
        case "dark":
          return;
        case "random":
          return setTheme(lightTheme);
      }
    },
    onSwipedRight: () => {
      switch (theme.type) {
        case "light":
          return setTheme(createRandomTheme());
        case "dark":
          return setTheme(lightTheme);
        case "random":
          return setTheme(createRandomTheme());
      }
    },
  });

  const globalCss = css`
    :root {
      --colorBackground: ${theme.background.lightness}%
        ${theme.background.chroma} ${theme.background.hue};
      --colorForeground: ${theme.foreground.lightness}%
        ${theme.foreground.chroma} ${theme.foreground.hue};

      color-scheme: ${theme.type};
    }
  `;

  const themeBgColor = `oklch(${theme.background.lightness}%
    ${theme.background.chroma} ${theme.background.hue})`;

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={themeBgColor} />
      </Helmet>
      <Global styles={globalCss} />
      <StyledPageLayout {...swipeHandlers}>
        <Header />
        <Outlet />
        <Footer />
      </StyledPageLayout>
      <ScrollRestoration />
    </>
  );
}
