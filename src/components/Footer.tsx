import styled from "@emotion/styled";
import Link from "./Link";
import Typography from "./Typography";

const StyledFooter = styled.footer`
  display: grid;
  gap: 1rem;
  align-self: flex-start;

  color: oklch(var(--colorForeground) / 0.6);
  transition: color 0.1s ease;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    order: reverse;
  }
`;

const StyledHintWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 700px) {
    justify-self: end;
  }

  & svg {
    fill: currentColor;
    height: 0.9rem;
    transform: translateY(7%);
  }
`;

const StyledHotkeyHint = styled(Typography)`
  display: none;

  @media (hover: hover) {
    display: inline-block;
  }
`;

const StyledSwipeHint = styled(Typography)`
  display: inline-block;

  @media (hover: hover) {
    display: none;
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
  background-color: oklch(var(--colorForeground) / 0.05);
  box-shadow: 0 0 0 1px oklch(var(--colorForeground) / 0.2);
  line-height: 1;
  margin: 0 0.2em;

  &:nth-of-type(3) {
    letter-spacing: -0.07em;
  }
`;

export default function Footer() {
  const currentDate = new Date();

  return (
    <StyledFooter>
      <Typography type="p" size="s">
        © {currentDate.getFullYear()}&emsp;&#11825;&emsp;All Rights
        Reserved&emsp;&#11825;&emsp;
        <Link linkType="routerLink" title="Imprint" to="/imprint">
          Imprint
        </Link>
      </Typography>
      <StyledHintWrapper>
        <StyledHotkeyHint type="p" size="s">
          Use <StyledHotkey>A</StyledHotkey>, <StyledHotkey>S</StyledHotkey> and{" "}
          <StyledHotkey>D</StyledHotkey> to toggle the theme
        </StyledHotkeyHint>
        <StyledSwipeHint type="p" size="s">
          Swipe left or right to toggle the theme
        </StyledSwipeHint>
      </StyledHintWrapper>
    </StyledFooter>
  );
}
