import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;
