import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { Title, Wrapper } from "../styles/404";
import { WebsiteUrls } from "../types/enums";

const Error: NextPage = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(WebsiteUrls.WELCOME);
    }, 3000);
  }, [router]);

  return (
    <Wrapper>
      <Head>
        <title>Error</title>
      </Head>
      <Title>Someting error 404</Title>
    </Wrapper>
  );
};

export default Error;
