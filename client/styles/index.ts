import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
`;

export const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Studios = styled.img``;
export const Projects = styled.img`
  width: 90%;
`;

export const Start = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.15s;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }

  &:active {
    background: #0063e5;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: white;
  margin-bottom: 1rem;
`;
