import React, { useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import { getWorks } from './data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faSortAmountUp, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/work.scss';

const Work = () => {
  const [showMore, setShowMore] = useState(false);
  const { width } = useWindowSize();
  const allWorks = getWorks();

  // Check screen size
	const overScreenMd = (width > 768 || window.innerWidth > 768);
	const inferiorScreenMd = (width <= 768 || window.innerWidth <= 768);

  // Toggle show more/less
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Initialise allItems
  let allItems = allWorks.length;

  if(overScreenMd) {
    allItems = showMore ? allWorks.length : 7;
  } else if(inferiorScreenMd) {
    allItems = showMore ? allWorks.length : 3;
  };

  return(
    <section className="container" id="work">
      <h2 className="section-title">Portfolio</h2>
      <h4 className="section-sub-title">Mes travaux</h4>

      <div className="work-container" aria-expanded={showMore ? true : false}>
        {
          allWorks?.slice(0, allItems).map((item, index) =>
          <a href={item.link} target="_blank" rel="noreferrer" className="card" key={index}>
            <img src={item.img} alt={item.title} aria-hidden="true" />

            <div className="card-container">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-catchphrase">
                <FontAwesomeIcon icon={faQuoteLeft} className="icon-quote" /> {item.catchphrase}
              </p>
              <span className="card-link">Voir le site ⟶</span>
            </div>
          </a>
          )
        }
      </div>
      

      { (inferiorScreenMd) &&
        <div className="text-center">
          <button type="button" className="btn btn-work" onClick={handleShowMore}>
            { showMore ? (
              <>
                Afficher moins <FontAwesomeIcon icon={faSortAmountUp} aria-hidden="true" />
              </>
              ) : (
                <>
                  Afficher plus <FontAwesomeIcon icon={faSortAmountDown} aria-hidden="true" />
                </>
              )
            }
          </button>
        </div>
      }

    </section>
  );
};

export default Work;
