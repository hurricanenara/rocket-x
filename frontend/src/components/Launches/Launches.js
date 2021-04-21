import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCHES_QUERY } from "../../queries/getLaunches";
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
  grid-gap: 25px;
`;

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY);

  useEffect(() => {
    if (data) {
      setLaunches(data.getLaunches.slice(0, 100));
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {/* {nothing} */}
      <Global />
      <Grid>
        {launches.map((launch) => {
          return (
            <StyledDiv key={launch.id}>
              <LazyImage
                src={launch.image}
                alt={launch.details ? launch.details : "null"}
              />
            </StyledDiv>
          );
        })}
      </Grid>
    </div>
  );
};

export default Launches;
