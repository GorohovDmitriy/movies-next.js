import Head from "next/head";
import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { CTA, Description, Projects, Start, Studios, Wrapper } from "../styles";
import { WebsiteUrls } from "../types/enums";

const Welcome: NextPage = () => {
  const router: NextRouter = useRouter();

  const handleClick = () => {
    router.push(WebsiteUrls.HOME);
  };

  return (
    <Wrapper>
      <Head>
        <title>Welcome</title>
      </Head>
      <CTA>
        <Studios src="/cta-logo-one.svg" />
        <Start onClick={handleClick}>WELCOME</Start>
        <Description>
          Disney+ Day Content Premieres from Disney, Pixar, TV, Top, Popular,
          DC, Marvel, Star Wars, and National Geographic
        </Description>
        <Projects src="/cta-logo-two.png" />
      </CTA>
    </Wrapper>
  );
};

export default Welcome;
