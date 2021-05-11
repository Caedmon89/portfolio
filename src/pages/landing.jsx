import React from 'react';

// Components
import Header from '../components/header/header';
import LFG from '../components/lfg/lfg';
import Intro from '../components/intro/intro';
import Work from '../components/works/work';
import Resume from '../components/resume/resume';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

const PageLanding = () => {

  return(
    <>
      <Header />
      <main role="main">
        <Intro />
        <LFG />
        <Work />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default PageLanding;
