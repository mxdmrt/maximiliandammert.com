import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

import { Theme } from '../@types/theme';
import LogoIcon from '../assets/icons/logo.svg';
import { useStore } from '../store/Store';
import ThemeToggle from './ThemeToggle/ThemeToggle';

const StyledHeader = styled.header<{ isScrolled: boolean }>`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-self: flex-start;
  gap: 1rem;
  align-items: center;
  z-index: 1;
  position: sticky;
  top: calc(var(--page-padding) - 1rem);

  &::before {
    position: absolute;
    content: '';
    inset: calc(var(--page-padding) * -1 + 1rem) calc(var(--page-padding) * -1);
    mask-image: linear-gradient(rgb(0 0 0 / 100%) 65%, transparent);
    background-color: oklch(var(--color-background) / 50%);
    transition: background-color 500ms ease;

    ${({ isScrolled }) =>
      isScrolled &&
      css`
        backdrop-filter: blur(0.4rem);
      `}
  }
`;

const StyledLogo = styled(Link)<{ theme: Theme }>(({ theme }) => {
  const themeBgColor = () => {
    switch (theme.type) {
      case 'light':
        return css`
          background-color: oklch(var(--color-foreground) / 5%);
        `;
      case 'dark':
        return css`
          background-color: oklch(var(--color-foreground) / 10%);
        `;
      case 'random':
        return theme.background.lightness > 45
          ? css`
              background-color: oklch(var(--color-foreground) / 5%);
            `
          : css`
              background-color: oklch(var(--color-foreground) / 10%);
            `;
    }
  };

  return css`
    display: inline-flex;
    appearance: none;
    background-color: unset;
    border: none;
    border-radius: unset;
    position: relative;
    place-self: center start;

    & svg {
      color: inherit;
      height: 1.2rem;
      width: auto;
    }

    &::before {
      content: '';
      position: absolute;
      inset: -1.15rem -0.87rem;
      background-color: oklch(var(--color-foreground) / 0%);
      border-radius: var(--border-radius);
    }

    @media (hover: hover) {
      &:hover {
        text-decoration-color: oklch(var(--color-foreground));

        &::before {
          ${themeBgColor()}
        }
      }
    }
  `;
});

export default function Header() {
  const { theme, isScrolled } = useStore();

  return (
    <StyledHeader isScrolled={isScrolled}>
      <StyledLogo to="/" title="Home" theme={theme}>
        <LogoIcon />
      </StyledLogo>
      <ThemeToggle />
    </StyledHeader>
  );
}
