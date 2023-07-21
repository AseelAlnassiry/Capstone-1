import { gql } from "@apollo/client";

const GET_TRENDING = gql`
  query Page {
    Page(page: 1, perPage: 50) {
      media(sort: TRENDING_DESC, countryOfOrigin: "JP", type: ANIME) {
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
      }
    }
  }
`;

export default GET_TRENDING;
