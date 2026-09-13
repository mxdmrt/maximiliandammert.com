import type { ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Size = "l" | "m" | "s";
type Type = "h1" | "h2" | "h3" | "p";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  size?: Size;
  type: Type;
}

const StyledParagraph = styled.p<{ size: Size }>(({ size }) => {
  const fontSize = () => {
    switch (size) {
      case "l":
        return css`
          font-size: 3.75rem;
        `;
      case "m":
        return css`
          font-size: 1.25rem;
        `;
      case "s":
        return css`
          font-size: 0.8rem;
        `;
    }
  };

  return css`
    ${fontSize()}
    line-height: 1.6;
  `;
});

const StyledHeadline = styled.h1<{ size: Size }>(({ size }) => {
  const fontSize = () => {
    switch (size) {
      case "l":
        return css`
          font-size: 3.75rem;
          font-weight: 800;
        `;
      case "m":
        return css`
          font-size: 1.25rem;
          font-weight: 800;
        `;
      case "s":
        return css`
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: calc(56em / 1000);
          color: oklch(var(--color-foreground) / 60%);
        `;
    }
  };

  return css`
    ${fontSize()}
    line-height: 1.1;
  `;
});

export default function Typography({ children, className, size = "m", type }: TypographyProps) {
  switch (type) {
    case "h1":
      return (
        <StyledHeadline className={className} size={size}>
          {children}
        </StyledHeadline>
      );
    case "h2":
      return (
        <StyledHeadline as="h2" className={className} size={size}>
          {children}
        </StyledHeadline>
      );
    case "h3":
      return (
        <StyledHeadline as="h3" className={className} size={size}>
          {children}
        </StyledHeadline>
      );
    case "p":
      return (
        <StyledParagraph className={className} size={size}>
          {children}
        </StyledParagraph>
      );
  }
}
