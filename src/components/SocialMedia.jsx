import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
        <a href='https://twitter.com/SajjadulBappy' target='blanck'>
            <BsTwitter />
        </a>
    </div>
    <div>
        <a href='https://web.facebook.com/mdsajjadulislam.bappy.7/' target='blanck'>
            <FaFacebookF />
        </a>
    </div>
    <div>
        <a href='https://www.instagram.com/mdsajjadulislambappy/?hl=en' target='blanck'>
            <BsInstagram />
        </a>
    </div>
  </div>
);

export default SocialMedia;
