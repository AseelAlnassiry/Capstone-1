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
      bannerImage
      startDate {
        year
        month
        day
      }
      isAdult
      description(asHtml: false)
      status
      genres
      averageScore
      meanScore
      popularity
      episodes
      duration
      trending
      staff(sort: RELEVANCE) {
        edges {
          role
          node {
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
          }
        }
      }
    }
  }
`;

export default GET_ANIME;
