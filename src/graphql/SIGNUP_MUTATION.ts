import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
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
