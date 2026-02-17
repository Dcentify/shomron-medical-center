import React from 'react';
import './Team.css'; // Preserve original styles

const Team = () => {
  const teamMembers = [
    {
      name: 'שמואל וייס',
      role: 'Team Lead', 
      description: 'Experienced leader in the field.',
      expertise: 'Team management, Project coordination'
    },
    {
      name: 'ד״ר יעקב זליגמן',
      role: 'Head of Research', 
      description: 'Expert in clinical research and development.',
      expertise: 'Research methodologies, Clinical trials'
    },
    {
      name: 'מיכאל אסרף',
      role: 'Software Engineer', 
      description: 'Specialist in software development.',
      expertise: 'Web applications, Backend systems'
    },
    {
      name: 'ישי מייזלס',
      role: 'Data Analyst', 
      description: 'Skilled in data analysis and interpretation.',
      expertise: 'Statistical analysis, Data visualization'
    },
    {
      name: 'עו״ד אבי במברגר',
      role: 'Legal Advisor', 
      description: 'Advisor on legal implications and compliance.',
      expertise: 'Legal consulting, Compliance'
    }
  ];

  return (
    <div className='team-page'>
      <h1>Meet Our Team</h1>
      <div className='team-members'>
        {teamMembers.map((member, index) => (
          <div className='team-member' key={index}>
            <h2>{member.name}</h2>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Description:</strong> {member.description}</p>
            <p><strong>Expertise:</strong> {member.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;