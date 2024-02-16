import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

type Size = "s" | "m" | "l";

type Type = "p" | "h1" | "h2" | "h3";

interface TypographyProps {
  children: ReactNode;
  size?: Size;
  type: Type;
  className?: string;
}

const StyledParagraph = styled.p<{ size: Size }>`
  ${({ size }) => {
    switch (size) {
      case "s":
        return css`
          font-size: 0.8rem;
        `;
      case "m":
        return css`
          font-size: 1.25rem;
        `;
      case "l":
        return css`
          font-size: 3.75rem;
        `;
    }
  }}

  line-height: 1.6;
`;

const StyledHeadline1 = styled.h1<{ size: Size }>`
  ${({ size }) => {
    switch (size) {
      case "s":
        return css`
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: calc(56em / 1000);
          color: oklch(var(--colorForeground) / 0.6);
        `;
      case "m":
        return css`
          font-size: 1.25rem;
          font-weight: 800;
        `;
      case "l":
        return css`
          font-size: 3.75rem;
          font-weight: 800;
        `;
    }
  }}

  line-height: 1.1;
`;

const StyledHeadline2 = styled(StyledHeadline1.withComponent("h2"))``;

const StyledHeadline3 = styled(StyledHeadline1.withComponent("h3"))``;

export default function Typography({
  children,
  type,
  size = "m",
  className,
}: TypographyProps) {
  switch (type) {
    case "p":
      return (
        <StyledParagraph size={size} className={className}>
          {children}
        </StyledParagraph>
      );
    case "h1":
      return (
        <StyledHeadline1 size={size} className={className}>
          {children}
        </StyledHeadline1>
      );
    case "h2":
      return (
        <StyledHeadline2 size={size} className={className}>
          {children}
        </StyledHeadline2>
      );
    case "h3":
      return (
        <StyledHeadline3 size={size} className={className}>
          {children}
        </StyledHeadline3>
      );
  }
}
