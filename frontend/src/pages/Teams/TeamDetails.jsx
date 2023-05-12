import React from 'react';

const TeamDetails = ({ team }) => {
  return (
    <div>
      <h2>{team.name}</h2>
      <p>ID: {team.id}</p>
    </div>
  );
};

export default TeamDetails;