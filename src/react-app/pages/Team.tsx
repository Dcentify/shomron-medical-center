// Updated Team.tsx

import React from 'react';
// Removed unused imports for Mail and Phone icons

const Team = () => {
  const teamMembers = [
    // Contact information has been removed for all members
    { name: 'John Doe', title: 'Manager' },
    { name: 'Jane Smith', title: 'Developer' },
  ];

  return (
    <div>
      <h1>Our Team</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}> {member.name} - {member.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;