import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.01);
  }

  @media (max-width: 1300px) {
    height: 100%;
  }
  @media (max-width: 900px) {
    height: 100%;
  }
  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: white;
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 1rem;

  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
export const Release = styled.p`
  color: white;
  margin-bottom: 2rem;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Overview = styled.div`
  font-size: 32px;
  color: white;
  opacity: 0.8;
  margin-bottom: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 1300px) {
    font-size: 24px;
  }

  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Button = styled.button`
  background-color: #0063e5;
  outline: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 20%;

  &:hover {
    background: #0483ee;
  }

  &:active {
    background: #0063e5;
  }

  @media (max-width: 500px) {
    background-color: #0063e5;
    width: 100%;
  }
`;
