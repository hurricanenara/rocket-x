import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { GET_ROCKETS_QUERY } from "../../queries/getRockets";
import LazyImage from "../UI/LazyImage";
import Spinner from "../UI/Spinner";

const Global = createGlobalStyle`
  body {
    padding: 0;
    box-sizing: border-box;
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  color: #afbac5;
  font-size: 18px;
  position: relative;
`;

const Grid = styled.div`
  position: relative;
  margin-left: 10px;
  display: grid;
  padding: 16px;
  grid-template-columns: repeat(auto-fit, 205px);
  grid-gap: 16px;
`;

const Launches = () => {
  const [rockets, setRockets] = useState([]);
  const { data, loading, error } = useQuery(GET_ROCKETS_QUERY);

  useEffect(() => {
    if (data) {
      setRockets(data.getRockets.slice(0, 40));
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {/* {nothing} */}
      <Global />
      <Grid>
        {rockets.map((rocket) => {
          return (
            <StyledDiv key={rocket.id}>
              <LazyImage
                src={rocket.image}
                alt={rocket.description ? rocket.description : "null"}
              />
            </StyledDiv>
          );
        })}
      </Grid>
    </div>
  );
};

export default Launches;
