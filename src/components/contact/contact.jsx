import React from 'react';

import { ReactComponent as LinkedinSvg } from '../../assets/images/icons/linkedin.svg';
import '../../assets/style/contact.scss';

const Contact = () => {

  return (
    <section className="container" id="contact">
      <h2 className="section-title text-center">Contact</h2>

      <div className="contact-link text-center">
        <a
          href="mailto:&#110;&#105;&#99;&#111;&#108;&#97;&#115;&#46;&#100;&#101;&#115;&#108;&#97;&#110;&#100;&#101;&#115;&#55;&#53;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
        >
          &#110;&#105;&#99;&#111;&#108;&#97;&#115;&#46;&#100;&#101;&#115;&#108;&#97;&#110;&#100;&#101;&#115;&#55;&#53;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
        </a>
      </div>

      <div className="icons">
        <a
          href="https://www.linkedin.com/in/nicolas-deslandes"
          target="_blank"
          rel="noreferrer"
          className="icon icon-linkedin"
          title="Voir mon profil LinkedIn"
        >
          <LinkedinSvg fill="#CCCCCC" />
        </a>
      </div>

    </section>
  );
};

export default Contact;
