import React, { useState, useEffect } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import { getFormations } from './formation';
import { getExp } from './exp';
import { getSkills } from './skills';
import { getPao } from './pao';

import '../../assets/style/resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faFilePdf, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CVFile from '../../assets/nicolas-deslandes.pdf';

const Resume = () => {

  // Check window innerWidth on resize
  const { width } = useWindowSize();

  // Formation & Exp states
  const [formationToggle, setFormationToggle] = useState(false);
  const [expToggle, setExpToggle] = useState(false);

  // Get formations & Exp from import datas
  const formations = getFormations();
  const exp = getExp();
  const skills = getSkills();
  const pao = getPao();

  // Check screen size
	const overScreenMd = (width > 768 || window.innerWidth > 768);
	const inferiorScreenMd = (width <= 768 || window.innerWidth <= 768);

  // Toggle Formation state
  const handleFormation = () => {
    if(inferiorScreenMd) {
      setFormationToggle(!formationToggle);
    } else {
      return null;
    }
  };

  // Toggle exp state
  const handleExp = () => {
    if(inferiorScreenMd) {
      setExpToggle(!expToggle);
    } else {
      return null;
    }
  };

  // Reset toggles states
  useEffect(() => {

    const resetToggles = () => {
      if (overScreenMd) {
        setExpToggle(false);
        setFormationToggle(false);
      }
    };

    window.addEventListener('resize', resetToggles);

    return () => window.removeEventListener('resize', resetToggles);
  }, [overScreenMd]);

  return(
    <section className="background-light-grey container-full" id="cv">

      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>
        <h4 className="section-sub-title">Mon parcours</h4>

        <div className="container-competence">
          <h3 className="text-uppercase">Compétences</h3>

          <div className="skills-container">
            <div className="skills-code">
              <ul className="code-list">
                {
                  skills.map((item, index) =>
                  <li key={index}>
                    <span className={item.class ? `icon-skills ${item.class}` : `icon-skills`}>
                      <FontAwesomeIcon icon={item.icon} />
                    </span> {item.title}
                  </li>
                  )
                }
              </ul>
            </div>

            <div className="skills-pao">
              <ul className="pao-list">
                {
                  pao.map((item, index) =>
                    <li key={index}>
                      <span className={item.class ? `icon-skills ${item.class}` : `icon-skills`}>
                        { item.icon ? (
                          <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                          ) : (
                            <img src={item.svg} alt="" aria-hidden="true" />
                          )
                        }
                      </span> {item.title}
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
  
        <div className="container-resume">
          <div className="formation">
            <div className="title-resume" onClick={handleFormation}>
              <div className="icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>

              <h3>Formations</h3>

              <div className={formationToggle ? `btn btn-resume active` : `btn btn-resume`}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>

            <ul className={formationToggle ? `step-resume active` : `step-resume`}>
              {
                formations?.map((item, index) =>
                <li className="step" key={index}>
                  <ul>
                    <li className="date">
                      {item.date}
                    </li>

                    <li className="step-title">
                      <h4>{item.title}</h4>
                    </li>

                    <li className="step-description">
                      {item.description}
                    </li>

                    <li className="step-list">
                      <ul className="list-resume">
                        {
                          item?.list.map((item, indexElement) =>
                            <li className="list-resume-item" key={indexElement}>{item.element}</li>
                          )
                        }
                      </ul>
                    </li>
                  </ul>
                </li>
                )
              }
            </ul>

          </div>

          <div className="exp">
            <div className="title-resume" onClick={handleExp}>
              <div className="icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <h3>Experiences professionnelles</h3>

              <span className={expToggle ? `btn btn-resume active` : `btn btn-resume`}>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>

            <ul className={expToggle ? `step-resume active` : `step-resume`}>
              {
                exp?.map((item, index) =>
                <li className="step" key={index}>
                  <ul>
                    {
                      item.date && <li className="date">{item.date}</li>
                    }

                    <li className="step-title">
                      <h4>{item.title}</h4>
                    </li>

                    {
                      item.description && <li className="step-description">{item.description}</li>
                    }

                    {
                      item.list &&
                      <li className="step-list">
                        <ul className="list-resume">
                          {
                            item.list?.map((item, indexElement) =>
                              <li className="list-resume-item" key={indexElement}>
                                {item.element}
                              </li>
                            )
                          }
                        </ul>
                      </li>
                    }
                  </ul>
                </li>
                )
              }
            </ul>

          </div>
        </div>
        
        <div className="resume-link text-center">
          <a href={CVFile} download="nicolas-deslandes.pdf" title="Télécharger le CV au format PDF">
            Télécharger <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </div>
  
    </section>
  );
};

export default Resume;
