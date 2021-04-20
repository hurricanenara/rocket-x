import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCHES_QUERY } from "../../queries/getLaunches";

const Launches = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY);
  // console.log(data.getLaunches);
  // const launches = data.getLaunches.slice(10);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const launches = data.getLaunches.slice(0, 10);
  console.log(launches.length);
  return (
    <div>
      <ul>
        {launches.map((launch) => {
          return <li key={launch.id}>{launch.id}</li>;
        })}
      </ul>
    </div>
  );
};

export default Launches;
