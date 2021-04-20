import gql from "graphql-tag";

export const GET_LAUNCHES_QUERY = gql`
  query getLaunches {
    getLaunches {
      id
    }
  }
`;
