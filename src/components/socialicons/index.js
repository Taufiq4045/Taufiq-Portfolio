import React from "react";
import "./style.css";
import { FaGithub, FaTwitter,FaFacebookF, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export default function Socialicons(params) {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialprofils.twitter} rel='noopener noreferrer' target='_blank'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href={socialprofils.github} rel='noopener noreferrer' target='_blank'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socialprofils.facebook} rel='noopener noreferrer' target='_blank'>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href={socialprofils.linkedin} rel='noopener noreferrer' target='_blank'>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
}
