import Link from "next/link";
import styled from "styled-components";
import movieSvg from "../../public/movie.svg";
import { useRouter } from "next/router";
import { INavigate } from "../../types/navigate";
import Image from "next/image";

const navigate: INavigate[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Popular", path: "/popular" },
  { id: 3, title: "Top", path: "/top" },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <Wrapper>
      <Logo>
        <Link href="/">
          <Title>
            <Image src={movieSvg} alt="Logo" width={50} height={50} />
          </Title>
        </Link>
        <Link href="/search">
          <Search className={pathname === "/search" ? "1px solid white" : ""}>
            Search
          </Search>
        </Link>
      </Logo>
      <Input />
      <Links>
        {navigate.map((nav: INavigate) => (
          <Link key={nav.id} href={nav.path}>
            <StyledLink
              className={pathname === nav.path ? "1px solid white" : ""}
            >
              {nav.title}
            </StyledLink>
          </Link>
        ))}
      </Links>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(33, 37, 41);
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.a`
  cursor: pointer;

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input.attrs({
  type: "text",
})`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;

const Links = styled.ul`
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  padding: 20px;
  color: white;
  cursor: pointer;
  border-bottom: ${(props) => props.className};
`;

const Search = styled.a`
  color: white;
  cursor: pointer;
  padding: 20px;
  border-bottom: ${(props) => props.className};
`;
