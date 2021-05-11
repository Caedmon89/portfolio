import React from 'react';
import { HashLink } from 'react-router-hash-link';

import '../../assets/style/lfg.scss';

const LFG = () => {

  return(
    <div className="container-lfg">
      <h2 className="title-lfg">Recherche une mission</h2>
      <p className="text-lfg">
        Disponible pour une mission d'<span className="font-bold">intégrateur web</span> en tant que consultant.
        Pour en savoir plus, <HashLink to="#contact" smooth className="color-primary">contactez-moi</HashLink>.
      </p>
    </div>
  );
};

export default LFG;
