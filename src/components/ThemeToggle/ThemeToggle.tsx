import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeType } from "../../@types/theme";
import createRandomTheme from "../../helpers/randomTheme";
import { darkTheme, lightTheme } from "../../helpers/theme";
import { useStore } from "../../store/Store";
import ThemeToggleButton from "./ThemeToggleButton";

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
      case "random":
        return "calc(100% / 6 * 1)";
      case "light":
        return "calc(100% / 6 * 3)";
      case "dark":
        return "calc(100% / 6 * 5)";
    }
  };

  return css`
    content: "";
    position: absolute;
    left: ${leftPosition()};
    background-color: currentColor;
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
      <ThemeToggleButton
        title="Random theme"
        onClick={() => setTheme(createRandomTheme())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M568.078-170.001v-59.998h118.616L545.616-371.077l42.768-42.768 139.694 139.693v-115.847h59.998v219.998H568.078Zm-354.001-3.846L171.924-216l514.001-514.001H568.078v-59.998h219.998v219.998h-59.998v-117.847L214.077-173.847Zm154.462-374.308-196.23-196.23 41.768-41.768 196.23 196.23-41.768 41.768Z" />
        </svg>
      </ThemeToggleButton>
      <ThemeToggleButton
        title="Light theme"
        onClick={() => setTheme(lightTheme)}
      >
        {theme.type === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-300.001q-74.922 0-127.461-52.538Q300.001-405.078 300.001-480t52.538-127.461Q405.078-659.999 480-659.999t127.461 52.538Q659.999-554.922 659.999-480t-52.538 127.461Q554.922-300.001 480-300.001Zm-430-150v-59.998h150v59.998H50Zm710 0v-59.998h149.999v59.998H760ZM450.001-760v-149.999h59.998V-760h-59.998Zm0 710v-150h59.998v150h-59.998ZM260.924-656.925 168.847-749 211-791.153l92.076 92.077-42.152 42.152ZM749-168.847l-92.076-92.077 42.152-42.152L791.153-211 749-168.847Zm-49.924-488.077-42.152-42.152L749-791.153 791.153-749l-92.077 92.076ZM211-168.847 168.847-211l92.077-92.076 42.152 42.152L211-168.847Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 59.999q-74.922 0-127.461-52.538Q300.001-405.078 300.001-480t52.538-127.461Q405.078-659.999 480-659.999t127.461 52.538Q659.999-554.922 659.999-480t-52.538 127.461Q554.922-300.001 480-300.001Zm-430-150v-59.998h150v59.998H50Zm710 0v-59.998h149.999v59.998H760ZM450.001-760v-149.999h59.998V-760h-59.998Zm0 710v-150h59.998v150h-59.998ZM260.924-656.925 168.847-749 211-791.153l92.076 92.077-42.152 42.152ZM749-168.847l-92.076-92.077 42.152-42.152L791.153-211 749-168.847Zm-49.924-488.077-42.152-42.152L749-791.153 791.153-749l-92.077 92.076ZM211-168.847 168.847-211l92.077-92.076 42.152 42.152L211-168.847ZM480-480Z" />
          </svg>
        )}
      </ThemeToggleButton>
      <ThemeToggleButton title="Dark theme" onClick={() => setTheme(darkTheme)}>
        {theme.type === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M481.154-140.001q-141.666 0-240.832-99.167Q141.155-338.334 141.155-480q0-135.768 92.115-232.883 92.114-97.115 225.575-105.192 8.615 0 16.922.615t16.307 1.846q-30.615 28.615-48.768 69.153-18.154 40.539-18.154 86.461 0 98.334 68.834 167.168 68.834 68.833 167.168 68.833 46.538 0 86.768-18.153 40.23-18.153 68.461-48.768 1.231 8 1.846 16.307.616 8.307.616 16.922-7.693 133.461-104.808 225.575-97.115 92.115-232.883 92.115Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M481.154-140.001q-141.666 0-240.832-99.167Q141.155-338.334 141.155-480q0-135.768 92.115-232.883 92.114-97.115 225.575-105.192 8.615 0 16.922.615t16.307 1.846q-30.615 28.615-48.768 69.153-18.154 40.539-18.154 86.461 0 98.334 68.834 167.168 68.834 68.833 167.168 68.833 46.538 0 86.768-18.153 40.23-18.153 68.461-48.768 1.231 8 1.846 16.307.616 8.307.616 16.922-7.693 133.461-104.808 225.575-97.115 92.115-232.883 92.115Zm0-59.999q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5t-86.5-209.5q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z" />
          </svg>
        )}
      </ThemeToggleButton>
      <StyledSelectionIndicator selected={theme.type} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
