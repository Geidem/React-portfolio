import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {

    return (
        <footer className="footer">
              <h2>A React app created by Gibby Eidem©</h2>
      <p>
        <ul>
          <a href="https://github.com/Geidem">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/geoffereyeidem03/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
        </footer>
    );
}

export default Footer;