import styled from "@emotion/styled";
import Link from "./Link";
import Typography from "./Typography";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-self: flex-start;

  color: oklch(var(--colorForeground) / 60%);
  transition: color 0.1s ease;
`;

const StyledHotkeyHint = styled(Typography)`
  display: none;

  @media (min-width: 600px) {
    display: inline-block;
  }
`;

const StyledHotkey = styled.span`
  width: 1rem;
  aspect-ratio: 1;
  display: inline-flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: calc(var(--borderRadius) / 3);
  background-color: oklch(var(--colorForeground) / 5%);
  box-shadow: 0 0 0 1px oklch(var(--colorForeground) / 20%);
  line-height: 1;
  margin: 0 0.2em;

  &:nth-of-type(3) {
    letter-spacing: -0.07em;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Typography type="p" size="s">
        © 2023&emsp;&#11825;&emsp;All Rights Reserved&emsp;&#11825;&emsp;
        <Link linkType="routerLink" title="Imprint" to="imprint">
          Imprint
        </Link>
      </Typography>
      <StyledHotkeyHint type="p" size="s">
        Use <StyledHotkey>A</StyledHotkey>, <StyledHotkey>S</StyledHotkey> and{" "}
        <StyledHotkey>D</StyledHotkey> to toggle the theme
      </StyledHotkeyHint>
    </StyledFooter>
  );
}
