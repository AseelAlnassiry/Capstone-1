import { gql } from "@apollo/client";

const GET_SEARCH = gql`
  query Page($term: String!) {
    Page(page: 1, perPage: 10) {
      media(
        sort: TRENDING_DESC
        countryOfOrigin: "JP"
        type: ANIME
        search: $term
      ) {
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
        isAdult
      }
    }
  }
`;

export default GET_SEARCH;
