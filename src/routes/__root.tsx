import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useHotkeys } from 'react-hotkeys-hook';
import { useSwipeable } from 'react-swipeable';

import Footer from '../components/Footer';
import Header from '../components/Header';
import createRandomTheme from '../helpers/randomTheme';
import { darkTheme, lightTheme } from '../helpers/theme';
import { useStore } from '../store/Store';

const StyledPageLayout = styled.div`
  display: grid;
  gap: 4rem;
  min-height: calc(100dvh - var(--page-padding) - (var(--page-padding) - 1rem));
  grid-template-rows: max-content 1fr max-content;
`;

const Root = () => {
  const { theme, setTheme, setIsScrolled } = useStore();

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const onMediaQueryListChange = () => {
      setTheme(mediaQueryList.matches ? darkTheme : lightTheme);
    };

    mediaQueryList.addEventListener('change', onMediaQueryListChange);

    return () => {
      mediaQueryList.removeEventListener('change', onMediaQueryListChange);
    };
  }, [setTheme]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [setIsScrolled]);

  useHotkeys('a', () => setTheme(createRandomTheme()));
  useHotkeys('s', () => setTheme(lightTheme));
  useHotkeys('d', () => setTheme(darkTheme));

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      switch (theme.type) {
        case 'light':
          return setTheme(darkTheme);
        case 'dark':
          return;
        case 'random':
          return setTheme(lightTheme);
      }
    },
    onSwipedRight: () => {
      switch (theme.type) {
        case 'light':
          return setTheme(createRandomTheme());
        case 'dark':
          return setTheme(lightTheme);
        case 'random':
          return setTheme(createRandomTheme());
      }
    },
  });

  const globalCss = css`
    :root {
      --color-background: ${theme.background.lightness}% ${theme.background.chroma}
        ${theme.background.hue};
      --color-foreground: ${theme.foreground.lightness}% ${theme.foreground.chroma}
        ${theme.foreground.hue};

      color-scheme: ${theme.type};
    }
  `;

  const themeBgColor = `oklch(${theme.background.lightness}%
    ${theme.background.chroma} ${theme.background.hue})`;

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="theme-color" content={themeBgColor} />
      </Helmet>
      <Global styles={globalCss} />
      <StyledPageLayout {...swipeHandlers}>
        <Header />
        <Outlet />
        <Footer />
      </StyledPageLayout>
    </HelmetProvider>
  );
};

export const Route = createRootRoute({
  component: Root,
});

export default Root;
