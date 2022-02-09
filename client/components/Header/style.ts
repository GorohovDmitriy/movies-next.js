import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  padding: 0 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.h2`
  color: white;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Links = styled.ul`
  display: flex;
`;

export const StyledLink = styled.a`
  padding: 18px;
  color: white;
  cursor: pointer;
  border-top: ${(props) => props.className};
  border-bottom: ${(props) => props.className};
  @media (max-width: 500px) {
    padding: 5px;
    font-size: 12px;
  }
`;

export const Search = styled.a`
  color: white;
  cursor: pointer;
  padding: 20px;
  border-top: ${(props) => props.className};
  border-bottom: ${(props) => props.className};
`;
