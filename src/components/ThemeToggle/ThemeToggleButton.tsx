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

const StyledThemeToggleButton = styled.button<{ theme: Theme }>(({ theme }) => {
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

  return css`
    appearance: unset;
    background-color: unset;
    border: unset;
    display: inline-flex;
    padding: 1rem;
    color: inherit;
    border-radius: var(--borderRadius);
    position: relative;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        ${themeBgColor()}
      }
    }

    & svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: currentColor;
    }
  `;
});

const ThemeToggle = ({ children, onClick, title }: ThemeToggleButtonProps) => {
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
};

export default ThemeToggle;
