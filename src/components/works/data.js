import DioukyImg from '../../assets/images/diouky.jpg';
import ArtifaktImg from '../../assets/images/artifakt.jpg';
import RMCSportImg from '../../assets/images/rmcsport.jpg';
import BFMTVImg from '../../assets/images/bfmtv.jpg';
import WassaImg from '../../assets/images/wassa.jpg';
import KubakubImg from '../../assets/images/kubakub.jpg';
import PatarinImg from '../../assets/images/philippepatarin.jpg';

export const getWorks = () => {

  return [
    {
      title: 'Diouky',
      catchphrase: 'Help my pet',
      img: DioukyImg,
      link: 'https://www.diouky.com'
    },
    {
      title: 'RMC Sport',
      catchphrase: 'L\'actu du sport en direct et en continu',
      img: RMCSportImg,
      link: 'https://rmcsport.bfmtv.com'
    },
    {
      title: 'BFMTV',
      catchphrase: 'Actualités en continu et info en direct et replay',
      img: BFMTVImg,
      link: 'https://www.bfmtv.com'
    },
    {
      title: 'Wassa',
      catchphrase: 'Your challenges, our innovation',
      img: WassaImg,
      link: 'https://www.wassa.io'
    },
    {
      title: 'Artifakt',
      catchphrase: 'The fastest way to put applications online',
      img: ArtifaktImg,
      link: 'https://www.artifakt.com'
    },
    {
      title: 'Kubakub',
      catchphrase: 'Comblez toutes vos envies grâce aux autres',
      img: KubakubImg,
      link: 'https://web.archive.org/web/20170716120225/https://www.kubakub.com/Home/LandingPage'
    },
    {
      title: 'Philippe Patarin',
      catchphrase: 'Gestalthérapeute',
      img: PatarinImg,
      link: 'http://www.philippepatarin.fr'
    }
  ];
};
