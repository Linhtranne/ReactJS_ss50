import React from 'react';
import { Link } from 'react-router-dom';

const TeamsIndex: React.FC = () => {
  return (
    <div>
      <h2>Teams Index</h2>
      <ul>
        <li>
          <Link to="./team1">Team 1</Link>
        </li>
        <li>
          <Link to="./team2">Team 2</Link>
        </li>
        <li>
          <Link to="./team3">Team 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamsIndex;
