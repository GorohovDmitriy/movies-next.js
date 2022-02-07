import Link from "next/link";
import Image from "next/image";
import movieSvg from "../../public/movie.svg";
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
          <Title>
            <Image src={movieSvg} alt="Logo" width={50} height={50} />
          </Title>
        </Link>
        <Link href={WebsiteUrls.SEARCH} passHref>
          <Search
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
