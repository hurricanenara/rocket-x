import gql from "graphql-tag";

export const GET_LAUNCH_QUERY = gql`
  query getLaunch($id: String!) {
    Launch(id: $id) {
      id
      date_utc
      details
      webcast
      success
      article
      youtube_id
      rocket {
        name
        success_rate_pct
        cost_per_launch
      }
    }
  }
`;
