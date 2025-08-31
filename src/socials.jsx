
import {FaLinkedin, FaFacebook, FaEnvelope,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function SocialLinks() {
  return (
    <div className="social-links">
        <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub />
      </a>
      <a href="https://twitter.com/sundance_dev" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaXTwitter />
      </a>

      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaLinkedin />
      </a>
      <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaFacebook />
      </a>
      <a href="mailto:your@email.com" className="social-link">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;