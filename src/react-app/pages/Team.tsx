import React from 'react';
import { User, Briefcase, Award, GraduationCap } from 'your-import-path';

const Team = () => {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-member">
        <User />
        <h2>John Doe</h2>
        <p>Role: Team Leader</p>
        <p>Description: John is the team leader with X years of experience.</p>
        <p>Expertise: Leadership, Strategy</p>
      </div>
      <div className="team-member">
        <Briefcase />
        <h2>Jane Smith</h2>
        <p>Role: Project Manager</p>
        <p>Description: Jane manages projects effectively and efficiently.</p>
        <p>Expertise: Project Management, Agile</p>
      </div>
      <div className="team-member">
        <Award />
        <h2>Mike Johnson</h2>
        <p>Role: Developer</p>
        <p>Description: Mike is a skilled developer with expertise in various technologies.</p>
        <p>Expertise: Software Development, JavaScript</p>
      </div>
      <div className="team-member">
        <GraduationCap />
        <h2>Anna Brown</h2>
        <p>Role: Designer</p>
        <p>Description: Anna has a keen eye for design and user experience.</p>
        <p>Expertise: UX/UI Design, Adobe Suite</p>
      </div>
      <div className="team-member">
        <User />
        <h2>Emily White</h2>
        <p>Role: QA Tester</p>
        <p>Description: Emily ensures the quality of all products through rigorous testing.</p>
        <p>Expertise: Quality Assurance, Testing</p>
      </div>
    </div>
  );
};

export default Team;