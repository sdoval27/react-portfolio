import React from 'react';

import sashaPic from '../../images/sasha-profile.jpg';

const styles = {
  contactStyle: {
    background: "#489D7C",
  }
}

export default function About() {
  return (
    
    <div>
      <h1>About Sasha Doval</h1>
      <img src = {sashaPic} alt= "profile image of Sasha " width = "200px"></img>

      <p>
        Sasha is a UCSD Coding Bootcamp student and amateur content creator. He has a bachelor's degree in Liturature and Writing and is versed in HTML, CSS, JavaScript, SQL, Mongo, and React.
      </p>
      
    </div>
    
  );
}
