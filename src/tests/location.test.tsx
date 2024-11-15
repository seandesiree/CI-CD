
import React from 'react';
import { render, screen } from '@testing-library/react';
import Location from '../component/Location';
import { MockedProvider } from '@apollo/client/testing';
import { GET_LOCATION } from '../component/queries';
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