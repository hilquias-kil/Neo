import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useNeo from "../../api/useNeo";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Neo: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useNeo(id);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Layout>
      <Link to="/"> Back</Link>
      <h1>{data?.name}</h1>
      <p>{data?.designation}</p>

      <code><pre>{JSON.stringify(data?.orbital_data, null, ' ')}</pre></code>
    </Layout>
  );
};

export default Neo;
