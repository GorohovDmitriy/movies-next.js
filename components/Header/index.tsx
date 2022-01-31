import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return <Wrapper>Header</Wrapper>;
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkgray;
  padding: 0 20px;
`;
