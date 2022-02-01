import Head from "next/head";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TRENDING_MOVIES } from "../../queries";

const Popular: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading } = useQuery(TRENDING_MOVIES);

  if (error) router.push("/404");
  if (loading) return <Spinner />;

  return (
    <div>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Container>Popular</Container>
    </div>
  );
};

export default Popular;

const Container = styled.div`
  margin-top: 2rem;
  background-color: #262d4d;
  opacity: 0.5;
  border-radius: 10px;
  height: calc(100vh - 70px);
`;
