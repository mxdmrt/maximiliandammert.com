import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeType } from '../../@types/theme';
import DarkModeIcon from '../../assets/icons/dark-mode.svg';
import DarkModeFilledIcon from '../../assets/icons/dark-mode-filled.svg';
import LightModeIcon from '../../assets/icons/light-mode.svg';
import LightModeFilledIcon from '../../assets/icons/light-mode-filled.svg';
import ShuffleIcon from '../../assets/icons/shuffle.svg';
import createRandomTheme from '../../helpers/randomTheme';
import { darkTheme, lightTheme } from '../../helpers/theme';
import { useStore } from '../../store/Store';
import ThemeToggleButton from './ThemeToggleButton';

const StyledThemeToggle = styled.div`
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  margin-right: -1rem;
`;

const StyledSelectionIndicator = styled.div<{
  selected: ThemeType;
}>(({ selected }) => {
  const leftPosition = () => {
    switch (selected) {
      case 'random':
        return 'calc(100% / 6 * 1)';
      case 'light':
        return 'calc(100% / 6 * 3)';
      case 'dark':
        return 'calc(100% / 6 * 5)';
    }
  };

  return css`
    content: '';
    position: absolute;
    left: ${leftPosition()};
    background-color: currentcolor;
    transform: translateX(-50%);
    transition: left 0.2s ease-out 0.1s;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 999px;
    top: calc(2 * 0.25rem * -1);
  `;
});

const ThemeToggle = () => {
  const { theme, setTheme } = useStore();

  return (
    <StyledThemeToggle className="themeToggle">
      <ThemeToggleButton title="Random theme" onClick={() => setTheme(createRandomTheme())}>
        <ShuffleIcon />
      </ThemeToggleButton>
      <ThemeToggleButton title="Light theme" onClick={() => setTheme(lightTheme)}>
        {theme.type === 'light' ? <LightModeFilledIcon /> : <LightModeIcon />}
      </ThemeToggleButton>
      <ThemeToggleButton title="Dark theme" onClick={() => setTheme(darkTheme)}>
        {theme.type === 'dark' ? <DarkModeFilledIcon /> : <DarkModeIcon />}
      </ThemeToggleButton>
      <StyledSelectionIndicator selected={theme.type} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
