import { useSelector } from 'react-redux';
import africa from '../images/afrique.png';
import europe from '../images/leurope.png';
import northAmerica from '../images/amerique-du-nord.png';
import southAmerica from '../images/amerique-du-sud.png';
import antarctica from '../images/antarctica.png';
import asia from '../images/asie.png';
import oceania from '../images/australie.png';
import worldMap from '../images/carte-du-monde.png';

const WorldMap = () => {
  const state = useSelector((state) => state.countries.map);
  let continent;
  switch (state) {
    case 'Africa':
      continent = <img src={africa} alt="African continent" />;
      break;
    case 'Europe':
      continent = <img src={europe} alt="European continent" />;
      break;
    case 'North America':
      continent = <img src={northAmerica} alt="North american continent" />;
      break;
    case 'South America':
      continent = <img src={southAmerica} alt="South american continent" />;
      break;
    case 'Asia':
      continent = <img src={asia} alt="Asian continent" />;
      break;
    case 'Oceania':
      continent = <img src={oceania} alt="Oceania continent" />;
      break;
    case 'Antarctica':
      continent = <img src={antarctica} alt="Antarctican continent" />;
      break;
    default:
      continent = <img src={worldMap} alt="World Map" />;
      break;
  }

  return <div className="map" data-testid="map-div">{continent}</div>;
};

export default WorldMap;
