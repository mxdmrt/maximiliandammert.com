import { css } from "@emotion/react";
import styled from "@emotion/styled";

import LoadingSvg from "../assets/icons/bouncing-ball.svg";

const StyledLoadingSpinnerWrapper = styled.div(
  () =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      & > svg {
        color: inherit;
        width: 1.5rem;
        height: auto;
      }
    `,
);

const LoadingSpinner = () => (
  <StyledLoadingSpinnerWrapper>
    <LoadingSvg />
  </StyledLoadingSpinnerWrapper>
);

export default LoadingSpinner;
