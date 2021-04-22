import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCH_QUERY } from "../../queries/getLaunch";
import Spinner from "../UI/Spinner";
import styled, { createGlobalStyle } from "styled-components";
import numeral from "numeral";

const TopDiv = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Orbitron";
`;
const DescriptionDiv = styled.div`
  text-align: middle;
  margin: 0 130px;

  section {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    &:link {
      color: brown;
    }
  }
`;

const Launch = () => {
  let history = useHistory();
  const id = history.location.pathname.split("/")[2];
  const [date, setDate] = useState("");
  const [launch, setLaunch] = useState([]);
  const [options, setOptions] = useState({
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const { data, loading, error } = useQuery(GET_LAUNCH_QUERY, {
    variables: { id },
  });

  useEffect(() => {
    if (data) {
      setLaunch(data);
      console.log(data);
      //   setDate(new Date(data.Launch.date_utc));
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  const ourData = data.Launch;

  return (
    <TopDiv>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${ourData.youtube_id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <DescriptionDiv>
        <section>
          <strong>Date of Launch: </strong>
          {/* {date.toLocaleDateString("en-US", options)} */}
          {ourData.date_utc}
        </section>
        <section>
          <strong>Details: </strong>
          {ourData.details}
        </section>
        <section>
          <strong>Rocket Name: </strong>
          {ourData.rocket.name}
        </section>
        <section>
          <strong>Cost Per Launch: </strong>
          {numeral(ourData.rocket.cost_per_launch).format("$0,0")}
        </section>
        <section>
          <strong>Result: </strong>
          {ourData.rocket.success ? "Success" : "Failure"}
        </section>
        <br />
        <strong>
          <a rel="noreferrer" target="_blank" href={ourData.article}>
            Article
          </a>
        </strong>
      </DescriptionDiv>
    </TopDiv>
  );
};

export default Launch;
