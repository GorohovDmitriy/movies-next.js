import { FC } from "react";
import { Circle, StyledSpinner, Wrapper } from "./style"

const Spinner: FC = () => (
  <Wrapper>
    <StyledSpinner>
      <Circle />
    </StyledSpinner>
  </Wrapper>
);

export default Spinner;
