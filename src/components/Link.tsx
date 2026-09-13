import type { AnchorHTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { createLink, type LinkOptions as RouterLinkProps } from "@tanstack/react-router";

import type { Theme } from "../@types/theme";

import { useStore } from "../store/Store";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  routerLinkProps?: RouterLinkProps;
}

const StyledLink = styled.a<{ contentAfter?: string; theme: Theme }>(({ contentAfter, theme }) => {
  const themeBgColor = () => {
    switch (theme.type) {
      case "dark":
        return css`
          background-color: oklch(var(--color-foreground) / 10%);
        `;
      case "light":
        return css`
          background-color: oklch(var(--color-foreground) / 5%);
        `;
      case "random":
        return theme.background.lightness > 45
          ? css`
              background-color: oklch(var(--color-foreground) / 5%);
            `
          : css`
              background-color: oklch(var(--color-foreground) / 10%);
            `;
    }
  };
  const afterElement =
    contentAfter &&
    css`
      &::after {
        content: "${contentAfter}";
        display: inline;
      }
    `;

  return css`
    display: inline-flex;
    color: inherit;
    text-decoration: underline;
    text-underline-offset: calc(1em / 4);
    text-decoration-thickness: calc(1em / 16);
    text-decoration-color: oklch(var(--color-foreground) / 20%);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      inset: -0.4em -0.6em;
      background-color: oklch(var(--color-foreground) / 0%);
      border-radius: var(--border-radius);
    }

    @media (hover: hover) {
      &:hover {
        text-decoration-color: oklch(var(--color-foreground) / 0%);
        cursor: pointer;

        &::before {
          ${themeBgColor()}
        }
      }
    }

    ${afterElement}
  `;
});

const CustomRouterLink = createLink(StyledLink);

export default function Link({ children, routerLinkProps, ...props }: LinkProps) {
  const theme = useStore((state) => state.theme);

  if (routerLinkProps) {
    return (
      <CustomRouterLink theme={theme} {...routerLinkProps} {...props}>
        {children}
      </CustomRouterLink>
    );
  }

  return (
    <StyledLink contentAfter="↗" theme={theme} {...props}>
      {children}
    </StyledLink>
  );
}
