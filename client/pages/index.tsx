import Head from "next/head";
import styled from "styled-components";
import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";

const Welcome: NextPage = () => {
  const router: NextRouter = useRouter();

  return (
    <Wrapper>
      <Head>
        <title>Welcome</title>
      </Head>
      <CTA>
        <CTALoginOne src="/cta-logo-one.svg" />
        <Start onClick={() => router.push("/home")}>WELCOME</Start>
        <Description>
          Disney+ Day Content Premieres from Disney, Pixar, TV, Top, Popular
          ,Marvel, Star Wars, and National Geographic
        </Description>
        <CTALoginTwo src="/cta-logo-two.png" />
      </CTA>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CTALoginOne = styled.img``;
const CTALoginTwo = styled.img`
  width: 90%;
`;

const Start = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.15s;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }

  &:active {
    background: #0063e5;
  }
`;

const Description = styled.p`
  font-size: 14px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: white;
`;
