import { gql } from '@apollo/client';

export const GET_LOCATION = gql`
  query GetLocation($id: String!) {
    location(id: $id) {
      id
      name
      // Add more fields as needed
    }
  }
`;