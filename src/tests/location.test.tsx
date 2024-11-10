
import React from 'react';
import { render, screen } from '@testing-library/react';
import Location from '../src/Location'; // adjust import based on your actual file structure
import { MockedProvider } from '@apollo/client/testing';
import { GET_LOCATION } from '../src/queries'; // Import the GraphQL query you're testing

const mocks = [
  {
    request: {
      query: GET_LOCATION,
      variables: { id: "1" },
    },
    result: {
      data: {
        location: {
          id: "1",
          name: "Test Location",
        },
      },
    },
  },
];

test('renders location name when data is fetched', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Location id="1" />
    </MockedProvider>
  );

  const locationName = await screen.findByText(/Test Location/i);
  expect(locationName).toBeInTheDocument();
});