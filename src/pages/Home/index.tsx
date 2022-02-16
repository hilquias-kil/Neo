import React from "react";
import { Link } from "react-router-dom";
import useNeos from "../../api/useNeos";
import { List, Row, Col } from "../../components/List";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useNeos();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Layout>
      <List>
        <Row className="header">
          <Col>Name</Col>
          <Col>Date</Col>
          <Col>Diameter</Col>
        </Row>
        {data?.list.map((neo) => (
          <Row key={neo.id}>
            <Col>
              <Link to={`/neo/${neo.id}`}>{neo.name}</Link>
            </Col>
            <Col>{neo.date}</Col>
            <Col>
              {neo.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} m -{" "}
              {neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} m
            </Col>
          </Row>
        ))}
      </List>
    </Layout>
  );
};

export default Home;
