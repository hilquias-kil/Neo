import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import useNeo from "../../api/useNeo";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const formateDate = (date: string) => {
  let dateFormated = date.replaceAll("%", "de")

  return dateFormated.slice(0,1) + dateFormated.slice(1).toLowerCase();
};

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
      {formateDate(
        dayjs(data?.close_approach_data[0].close_approach_date_full)
          .locale("pt-br")
          .format("dddd, DD % MMMM % YYYY")
      )}

      <code>
        <pre>{JSON.stringify(data?.orbital_data, null, " ")}</pre>
      </code>
    </Layout>
  );
};

export default Neo;
