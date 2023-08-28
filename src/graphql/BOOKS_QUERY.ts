import { gql } from "@apollo/client";

export const BOOKS_QUERY = gql`
  query BOOKS_QUERY {
    books {
      id
      title
      author
      description
      image
      bookFile
      categoryId
      cloudinaryId
      bookCloudinaryId
    }
  }
`;
