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

export const Title = styled.a`
  cursor: pointer;

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search movie",
})`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;

export const Links = styled.ul`
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const StyledLink = styled.a`
  padding: 18px;
  color: white;
  cursor: pointer;
  border-top: ${(props) => props.className};
  border-bottom: ${(props) => props.className};
`;

export const Search = styled.a`
  color: white;
  cursor: pointer;
  padding: 20px;
  border-top: ${(props) => props.className};
  border-bottom: ${(props) => props.className};
`;
