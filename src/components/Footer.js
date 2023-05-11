import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";



function FooterComponent() {
  return (
    <footer className="footer" class="Footer" position="fixed">
      <div className="icons social-icon">
        <a href="https://github.com/sdoval27" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#de5935",}}/>
        </a>
        <a href="https://twitter.com/sashaisapickle"   target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x"  style={{color: "#de5935",}}/>
        </a>
        <a href="https://www.linkedin.com/in/sasha-doval-3950921b7/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x " style={{color: "#de5935",}} />
        </a>
      </div>
    </footer>
  );
}

export default FooterComponent;