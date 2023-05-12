import React from 'react';

const MemberDetails = ({ member }) => {
  return (
    <div>
      <h2>{member.name}</h2>
      <p>ID: {member.id}</p>
      <p>Email: {member.email}</p>
    </div>
  );
};

export default MemberDetails;
