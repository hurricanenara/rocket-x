import gql from "graphql-tag";

export const GET_ROCKETS_QUERY = gql`
  query getLaunches {
    getRockets {
      id
      name
      description
      image
    }
  }
`;
