import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  height: 100%;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: white;
  padding-top: 1rem;
  text-decoration: transparent;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
