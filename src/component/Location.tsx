import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATION } from './queries'; 

interface LocationProps {
  id: string; 
}

const Location: React.FC<LocationProps> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id }, 
  });

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error fetching location: {error.message}</div>; 


  return (
    <div>
      <h1>Location Details</h1>
      <p>Name: {data.location.name}</p> 
    </div>
  );
};

export default Location;