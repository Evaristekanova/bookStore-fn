import { gql } from "@apollo/client";

export const BOOKS_QUERY = gql`
  query BOOKS_QUERY {
    books {
      id
      title
      author
      image
      categoryId
      cloudinaryId
    }
  }
`;
