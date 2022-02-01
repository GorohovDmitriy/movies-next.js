import Head from "next/head";
import Spinner from "../../components/Spinner";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TOP_MOVIES } from "../../queries";
import { Container } from "../../styles/top";

const Top: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading } = useQuery(TOP_MOVIES);

  if (error) router.push("/404");
  if (loading) return <Spinner />;

  return (
    <div>
      <Head>
        <title>Top Movies</title>
      </Head>
      <Container>Home</Container>
    </div>
  );
};

export default Top;
