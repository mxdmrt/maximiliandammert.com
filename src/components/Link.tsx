import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Theme } from "../@types/theme";
import { useStore } from "../store/Store";

interface LinkProps {
  children: ReactNode;
  href?: string;
  target?: "_blank" | "_self";
  title: string;
  onClick?: () => void;
  linkType?: "a" | "button" | "routerLink";
  to?: string;
}

const StyledLink = styled.a<{ theme: Theme; contentAfter?: string }>`
  display: inline-flex;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: calc(1em / 4);
  text-decoration-thickness: calc(1em / 16);
  text-decoration-color: oklch(var(--colorForeground) / 0.2);
  transition: text-decoration-color 0.3s ease;
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
    transition: background-color 0.3s ease;
  }

  @media (hover: hover) {
    &:hover {
      text-decoration-color: oklch(var(--colorForeground) / 0);

      &::before {
        ${({ theme }) => {
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
        }}
      }
    }
  }

  ${({ contentAfter }) =>
    contentAfter &&
    css`
      &::after {
        content: "${contentAfter}";
        display: inline;
      }
    `}
`;

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

const StyledRouterLink = styled(StyledLink.withComponent(RouterLink))`
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

export default function Link({
  children,
  href,
  target,
  title,
  onClick,
  linkType = "a",
  to = "",
}: LinkProps) {
  const { theme } = useStore();

  switch (linkType) {
    case "a":
      return (
        <StyledLink
          href={href}
          target={target}
          title={title}
          theme={theme}
          contentAfter="&#8599;"
        >
          {children}
        </StyledLink>
      );
    case "button":
      return (
        <StyledButton
          theme={theme}
          title={title}
          onClick={onClick}
          contentAfter="&#8599;"
        >
          {children}
        </StyledButton>
      );
    case "routerLink":
      return (
        <StyledRouterLink theme={theme} to={to}>
          {children}
        </StyledRouterLink>
      );
  }
}
