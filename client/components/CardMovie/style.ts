import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

export const Poster = styled.img`
  background: center center/cover no-repeat fixed;
  width: 100%;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.01);
  }
`;

export const Review = styled.div`
  color: white;
  width: 100%;
`;
