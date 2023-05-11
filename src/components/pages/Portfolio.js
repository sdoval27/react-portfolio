import React from 'react';

import goodGreens from '../../images/good-greens-port.png';
import spooky from '../../images/mansion.png';
import password from '../../images/password_gen_plain.png';
import pwa from '../../images/JATE-app.png';
import workDay from '../../images/WDS-home.png';
import readmeGen from '../../images/readme-gen.png';

const styles = {
  contactStyle: {
    background: "#489D7C",
  }
}

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

        <card class="spotlight">
         
       
          <h2 class="card-title-1">Good Greens</h2>
         {/* <a href="https://shavanapuchta.github.io/good-greens-project-1/"/> */}
         <img src={goodGreens} alt="image of website for specialty restaurants"/>
         
         
        </card>

        {/* project 2 */}
        <card class="card">
          <h2 class="card-title">A Night at the Manor</h2>
          
          {/* <a href="http://spooky-dudes.herokuapp.com/"/> */}
          <img src={spooky} alt="a cartoonish manor with a title that says A house with the comically bad yelp review"/>
          
          
        </card>

        {/* project 3 */}
        <card class="card">
          <h2 class="card-title">Project</h2>
          
          <img  src={password} alt="password generator"/>
        </card>
        
        {/* project 4 */}
        <card class="card">
          <h2 class="card-title">Project</h2>
        
          
          <img src={pwa} alt="Text Editing PWA"/> 
        </card>

        {/* project 5*/}
        <card class="card">
          <h2 class="card-title">Project</h2>
          
          <img class="port-images"  src={workDay} alt="workday scheduler"/>
         
          </card>
      

        {/* project 6 */}
        <card class="card">
          <h2 class="card-title">Project</h2>
       
          
          <img class="port-images"  src={readmeGen} alt="README generator"/>
          
          </card>
      
  
      
   </div>
  );
}
