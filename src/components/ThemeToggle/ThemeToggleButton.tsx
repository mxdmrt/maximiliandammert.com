import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Theme } from "../../@types/theme";
import { useStore } from "../../store/Store";

interface ThemeToggleButtonProps {
  children: ReactNode;
  onClick: () => void;
  title: string;
}

const StyledThemeToggleButton = styled.button<{ theme: Theme }>`
  appearance: unset;
  background-color: unset;
  border: unset;
  display: inline-flex;
  padding: 1rem;
  color: inherit;
  border-radius: var(--borderRadius);
  position: relative;
  transition: background-color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;

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
            return theme.background[0] > 49.9
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

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }
`;

export default function ThemeToggle({
  children,
  onClick,
  title,
}: ThemeToggleButtonProps) {
  const { theme } = useStore();

  return (
    <StyledThemeToggleButton
      title={title}
      type="button"
      onClick={onClick}
      theme={theme}
    >
      {children}
    </StyledThemeToggleButton>
  );
}
