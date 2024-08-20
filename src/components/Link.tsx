import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  createLink,
  LinkProps as RouterLinkProps,
} from "@tanstack/react-router";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Theme } from "../@types/theme";
import { useStore } from "../store/Store";

interface LinkProps {
  children: ReactNode;
  linkType?: "a" | "button" | "routerLink";
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  routerLinkProps?: RouterLinkProps;
}

const StyledLink = styled.a<{ theme: Theme; contentAfter?: string }>(
  ({ theme, contentAfter }) => {
    const themeBgColor = () => {
      switch (theme.type) {
        case "light":
          return css`
            background-color: oklch(var(--colorForeground) / 0.05);
          `;
        case "dark":
          return css`
            background-color: oklch(var(--colorForeground) / 0.1);
          `;
        case "random":
          return theme.background.lightness > 45
            ? css`
                background-color: oklch(var(--colorForeground) / 0.05);
              `
            : css`
                background-color: oklch(var(--colorForeground) / 0.1);
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
      text-decoration-color: oklch(var(--colorForeground) / 0.2);
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: -0.4em;
        right: -0.6em;
        bottom: -0.4em;
        left: -0.6em;
        background-color: oklch(var(--colorForeground) / 0);
        border-radius: var(--borderRadius);
      }

      @media (hover: hover) {
        &:hover {
          text-decoration-color: oklch(var(--colorForeground) / 0);
          cursor: pointer;

          &::before {
            ${themeBgColor()}
          }
        }
      }

      ${afterElement}
    `;
  },
);

const StyledButton = styled(StyledLink.withComponent("button"))`
  appearance: unset;
  background-color: unset;
  padding: unset;
  border: unset;
  font: inherit;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledRouterLink = createLink(StyledLink);

export default function Link({
  children,
  linkType = "a",
  linkProps,
  buttonProps,
  routerLinkProps,
}: LinkProps) {
  const { theme } = useStore();

  switch (linkType) {
    case "a":
      return (
        <StyledLink theme={theme} contentAfter="&#8599;" {...linkProps}>
          {children}
        </StyledLink>
      );
    case "button":
      return (
        <StyledButton theme={theme} contentAfter="&#8599;" {...buttonProps}>
          {children}
        </StyledButton>
      );
    case "routerLink":
      return (
        <StyledRouterLink theme={theme} {...routerLinkProps}>
          {children}
        </StyledRouterLink>
      );
  }
}
