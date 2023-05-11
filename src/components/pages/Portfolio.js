import React from 'react';

//images
import goodGreens from '../../images/good-greens-port.png';
import spooky from '../../images/mansion.png';
import password from '../../images/password_gen_plain.png';
import pwa from '../../images/JATE-app.png';
import workDay from '../../images/WDS-home.png';
import readmeGen from '../../images/readme-gen.png';

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


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
          <a href = "https://shavanapuchta.github.io/good-greens-project-1/" target="_blank">Good Greens</a>
          <a href = "https://github.com/shavanapuchta/good-greens-project-1" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
         {/* <a href="https://shavanapuchta.github.io/good-greens-project-1/"/> */}
         <img src={goodGreens} alt="image of website for specialty restaurants" width = '400px'/>
         
         
        </card>

        {/* project 2 */}
        <card class="card">
          <h2 class="card-title">A Night at the Manor</h2>

          <img src={spooky} alt="a cartoonish manor with a title that says A house with the comically bad yelp review" width = '400px'/>
          <a href = "http://spooky-dudes.herokuapp.com/" target="_blank">A Night at the Manor</a>
          <a href = "https://github.com/sadiemantlo/spooky-dudes" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          
        </card>

        {/* project 3 */}
        <card class="card">
          <h2 class="card-title">Secure pass gen</h2>
          
          <img  src={password} alt="password generator" width = '400px'/>
        
          <a href = "https://sdoval27.github.io/secure-password-generator/" target="_blank">Secure Password Generator</a>
          <a href = "https://github.com/sdoval27/secure-password-generator" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </card>
        
        {/* project 4 */}
        <card class="card">
          <h2 class="card-title">PWA</h2>
        
          <img src={pwa} alt="Text Editing PWA" width = '400px'/> 
          <a href = "https://jate-pwa-text-editor-hero.herokuapp.com/" target="_blank">Test Editor PWA</a>
          <a href = "https://github.com/sdoval27/pwa-text-editor" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </card>

        {/* project 5*/}
        <card class="card">
          <h2 class="card-title">Project</h2>
          
          <img class="port-images"  src={workDay} alt="workday scheduler" width = '400px'/>
          <a href = "https://sdoval27.github.io/work-day-scheduler/" target="_blank">word Day scheduler</a>
          <a href = "https://github.com/sdoval27/work-day-scheduler" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          
         
          </card>
      

        {/* project 6 */}
        <card class="card">
          <h2 class="card-title">Project</h2>
       
          
          <img class="port-images"  src={readmeGen} alt="README generator" width = '400px'/>
          <a href = "https://github.com/sdoval27/readme-generator" target="_blank">README generator</a>
          <a href = "https://github.com/sdoval27/readme-generator" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          
          </card>
      
  
      
   </div>
  );
}
