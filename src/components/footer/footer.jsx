import React from 'react';

import '../../assets/style/footer.scss';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return(
    <footer role="contentinfo">
      <div className="container text-center">
        &copy; Nicolas Deslandes, 2015 - {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
