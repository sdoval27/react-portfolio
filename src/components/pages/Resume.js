import React from 'react';

const styles = {
  contactStyle: {
    background: "#489D7C",
  }
}

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
      </ul>
    </div>
  );
}
