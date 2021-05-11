import { faSketch } from '@fortawesome/free-brands-svg-icons';
import faPhotoshop from '../../assets/images/icons/photoshop.svg';
import faIndesign from '../../assets/images/icons/indesign.svg';
import faIllustrator from '../../assets/images/icons/illustrator.svg';
import faExperience from '../../assets/images/icons/xd.svg';

export const getPao = () => {

  return [
    {
      title: 'Photoshop',
      svg: faPhotoshop,
      class: ''
    },
    {
      title: 'InDesign',
      svg: faIndesign,
      class: ''
    },
    {
      title: 'Illustrator',
      svg: faIllustrator,
      class: ''
    },
    {
      title: 'Sketch',
      icon: faSketch,
      class: ''
    },
    {
      title: 'Adobe Xd',
      svg: faExperience,
      class: ''
    }
  ];
};
