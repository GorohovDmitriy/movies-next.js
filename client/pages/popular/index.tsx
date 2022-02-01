import Head from "next/head";
import Spinner from "../../components/Spinner";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TRENDING_MOVIES } from "../../queries";
import { Container } from "../../styles/popular";

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
