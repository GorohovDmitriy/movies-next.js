import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

export const Circle = styled.circle.attrs({
  className: "path",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none",
  strokeWidth: "4",
})``;

export const StyledSpinner = styled.svg.attrs({
  viewBox: "0 0 50 50",
})`
  animation: rotate 1s linear infinite;
  margin: -25px 0 0 -25px;
  width: 350px;
  height: 350px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
