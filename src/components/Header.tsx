import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Theme } from "../@types/theme";
import { useStore } from "../store/Store";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

const StyledHeader = styled.header<{ isScrolled: boolean }>`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-self: flex-start;
  gap: 1rem;
  align-items: center;
  position: relative;
  z-index: 1;
  position: sticky;
  top: calc(var(--pagePadding) - 1rem);

  &::before {
    transition:
      box-shadow 300ms ease-out,
      background-color 300ms ease-out;
    box-shadow: 0 1px 0 0 oklch(var(--colorForeground) / 0%);
    position: absolute;
    content: "";
    top: calc(var(--pagePadding) * -1 + 1rem);
    right: calc(var(--pagePadding) * -1);
    bottom: calc(var(--pagePadding) * -1 + 1rem);
    left: calc(var(--pagePadding) * -1);
    background-color: oklch(var(--colorBackground) / 0%);

    ${({ isScrolled }) =>
      isScrolled &&
      css`
        background-color: oklch(var(--colorBackground) / 50%);
        backdrop-filter: blur(0.8rem);
        box-shadow: 0 1px 0 0 oklch(var(--colorForeground) / 10%);
      `}
  }
`;

const StyledLogo = styled(NavLink)<{ theme: Theme }>`
  display: inline-flex;
  appearance: none;
  background-color: unset;
  border: none;
  border-radius: unset;
  position: relative;
  align-self: center;
  justify-self: start;

  & svg {
    fill: currentColor;
    height: 1.2rem;
    width: auto;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1.15rem -0.87rem;
    background-color: oklch(var(--colorForeground) / 0%);
    border-radius: var(--borderRadius);
    transition: background-color 0.3s ease;
  }

  @media (hover: hover) {
    &:hover {
      text-decoration-color: oklch(var(--colorForeground));

      &::before {
        ${({ theme }) => {
          switch (theme.type) {
            case "light":
              return css`
                background-color: oklch(var(--colorForeground) / 5%);
              `;
            case "dark":
              return css`
                background-color: oklch(var(--colorForeground) / 10%);
              `;
            case "random":
              return theme.background[0] > 49
                ? css`
                    background-color: oklch(var(--colorForeground) / 5%);
                  `
                : css`
                    background-color: oklch(var(--colorForeground) / 10%);
                  `;
          }
        }}
      }
    }
  }
`;

export default function Header() {
  const { theme, isScrolled } = useStore();

  return (
    <StyledHeader isScrolled={isScrolled}>
      <StyledLogo to="/" title="Home" theme={theme}>
        <svg
          className="logoSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 17"
        >
          <path d="M0,0V17H25V0ZM24,16H1V1H24Z" />
          <path d="M12,7l4,8h.5a6.5,6.5,0,0,0,0-13H11L8.5,7,6,2H2V15H8Z" />
        </svg>
      </StyledLogo>
      <ThemeToggle />
    </StyledHeader>
  );
}
