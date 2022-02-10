import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 1.5rem;
  padding: 1rem;

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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  width: 100%;
  gap: 1rem;
  margin: 1rem;
`;

export const Title = styled.h1`
  font-weight: 600;
`;

export const Original = styled.div`
  font-size: 34px;
  font-weight: 600;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

export const Vote = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Language = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const Release = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

export const Time = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const Status = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const Budget = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const Tagline = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export const Link = styled.div`
  display: flex;
  gap: 1rem;
  p {
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
  a {
    color: #0063e5;
    font-size: 20px;

    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-size: 20px;
  li {
    list-style: none;
    font-size: 20px;
  }
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const Company = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  li {
    list-style: none;
    font-size: 14px;
  }

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;
export const Countries = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  li {
    list-style: none;
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  font-weight: 400;
  width: 90%;
`;
