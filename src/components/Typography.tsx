import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Size = 's' | 'm' | 'l';

type Type = 'p' | 'h1' | 'h2' | 'h3';

interface TypographyProps {
  children: ReactNode;
  size?: Size;
  type: Type;
  className?: string;
}

const StyledParagraph = styled.p<{ size: Size }>(({ size }) => {
  const fontSize = () => {
    switch (size) {
      case 's':
        return css`
          font-size: 0.8rem;
        `;
      case 'm':
        return css`
          font-size: 1.25rem;
        `;
      case 'l':
        return css`
          font-size: 3.75rem;
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
      case 's':
        return css`
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: calc(56em / 1000);
          color: oklch(var(--color-foreground) / 60%);
        `;
      case 'm':
        return css`
          font-size: 1.25rem;
          font-weight: 800;
        `;
      case 'l':
        return css`
          font-size: 3.75rem;
          font-weight: 800;
        `;
    }
  };

  return css`
    ${fontSize()}
    line-height: 1.1;
  `;
});

export default function Typography({ children, type, size = 'm', className }: TypographyProps) {
  switch (type) {
    case 'p':
      return (
        <StyledParagraph size={size} className={className}>
          {children}
        </StyledParagraph>
      );
    case 'h1':
      return (
        <StyledHeadline size={size} className={className}>
          {children}
        </StyledHeadline>
      );
    case 'h2':
      return (
        <StyledHeadline size={size} className={className} as="h2">
          {children}
        </StyledHeadline>
      );
    case 'h3':
      return (
        <StyledHeadline size={size} className={className} as="h3">
          {children}
        </StyledHeadline>
      );
  }
}
