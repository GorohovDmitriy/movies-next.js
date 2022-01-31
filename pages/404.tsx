import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";

const Error: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Wrapper>
      <Head>
        <title>Error</title>
      </Head>
      <Title>Someting error</Title>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100vh - 70px);
`;
const Title = styled.h1`
  font-size: 42px;
`;
