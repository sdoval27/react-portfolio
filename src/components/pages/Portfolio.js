import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

      <section class="work" id="work"> 
        <figure class="spotlight">
         
         <card>
          <h2 class="card-title-1">Good Greens</h2>
         <a href="https://shavanapuchta.github.io/good-greens-project-1/">
         <img class= "spotlight-image" src="./assets/images/good-greens-port.png" alt="image of website for specialty restaurants"></img>
         </a>
         </card>
        </figure>

        {/* project 2 */}
        <figure class="card">
          <h2 class="card-title">A Night at the Manor</h2>
          <card>
          <a href="http://spooky-dudes.herokuapp.com/">
          <img class="port-images" src="./assets/images/mansion.png" alt="a cartoonish manor with a title that says A house with the comically bad yelp review"> </img>
          </a>
          </card>
        </figure>

        {/* project 3 */}
        <figure class="card">
          <h2 class="card-title">Project</h2>
          <card>
          <a href="./assets/images/building.jpeg">
          <img class="port-images" src="./assets/images/building.jpeg" alt="clocktower obscured by autumn trees"> </img>
          </a>
          </card>
        </figure>
        
        {/* project 4 */}
        <figure class="card">
          <h2 class="card-title">Project</h2>
          <card>
          <a href="./assets/images/horses.jpeg">
          <img class="port-images" src="./assets/images/horses.jpeg" alt="four horses grazing in a grass pasture with a tree"> </img>
          </a>
          </card>
        </figure>

        {/* project 5*/}
        <figure class="card">
          <h2 class="card-title">Project</h2>
          <card>
          <a href="./assets/images/hammock.jpeg">
          <img class="port-images"  src="./assets/images/hammock.jpeg" alt="woven hammock between two trees at sunset"> </img>
          </a>
          </card>
        </figure>
      </section>
      <section id="contact-me" class="contact-card">
        <h4 class="bio-title">Sasha Doval:</h4>
        <p>Phone: (555) 555-5555 &nbsp&nbsp&nbsp Email: sashardoval@gmail.com &nbsp&nbsp&nbsp
        <a href="https://www.linkedin.com/in/sasha-doval-3950921b7/"> LinkedIn</a>&nbsp&nbsp&nbsp
        <a href="https://github.com/sdoval27">GitHub</a>
      </p>
      </section>
   </div>
  );
}
