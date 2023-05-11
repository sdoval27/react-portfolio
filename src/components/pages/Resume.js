import React from 'react';
import { Document, Page } from 'react-pdf';

const styles = {
  contactStyle: {
    background: "#489D7C",
  }
}

export default function Resume() {
const pdf = 'https://docs.google.com/document/d/1naej4ajvrmww_X7qUxvSjYkLrjN0BN9_FVPKjTUsUZA/edit?usp=sharing';
  return (
    <div>
      <h1>Resume Page</h1>
     
      <p>Download my <a href={pdf} download>resume</a>.</p>
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
