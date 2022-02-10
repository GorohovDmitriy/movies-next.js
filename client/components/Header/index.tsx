import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { INavigate } from "../../types/navigate";
import { StyledLink, Links, Logo, Search, Title, Wrapper } from "./style";
import { navigate } from "../../utils";
import { WebsiteUrls } from "../../types/enums";

const Header = () => {
  const { pathname }: NextRouter = useRouter();

  return (
    <Wrapper>
      <Logo>
        <Link href={WebsiteUrls.WELCOME} passHref>
          <Title>Movie App</Title>
        </Link>
        <Link href={WebsiteUrls.SEARCH} passHref>
          <Search
            role="search"
            className={
              pathname === WebsiteUrls.SEARCH ? "1px solid #0063e5" : ""
            }
          >
            Search
          </Search>
        </Link>
      </Logo>
      <Links>
        {navigate.map((nav: INavigate) => (
          <Link key={nav.id} href={nav.path} passHref>
            <StyledLink
              role="search-item"
              className={pathname === nav.path ? "1px solid #0063e5" : ""}
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
