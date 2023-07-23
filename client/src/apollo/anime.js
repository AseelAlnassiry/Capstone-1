import { gql } from "@apollo/client";

const GET_ANIME = gql`
  query Media($id: Int!) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      coverImage {
        extraLarge
        color
      }
      startDate {
        year
        month
        day
      }
      description(asHtml: false)
      status
      genres
      averageScore
      meanScore
      popularity
    }
  }
`;

export default GET_ANIME;
