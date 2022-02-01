import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1rem;
`;
export const Wrap = styled.div``;

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
