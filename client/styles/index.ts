import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: top;
  justify-content: center;
`;

export const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Studios = styled.img``;
export const Projects = styled.img`
  width: 90%;
`;

export const Lists = styled.ul``;

export const Start = styled.button`
  width: 100%;
  background: #0063e5;
  outline: none;
  border: none;
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
