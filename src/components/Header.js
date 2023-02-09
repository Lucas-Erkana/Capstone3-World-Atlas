import { Link } from 'react-router-dom';
import { AiFillAudio, AiFillHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Header = () => (
  <header>
    <Link className="link" to="/">
      {' '}
      <AiFillHome size={25} />
    </Link>
    <h2 className="header-tag">The World At Your Feet</h2>
    <div className="header-controls">
      <AiFillAudio size={25} />
      <FiSettings size={25} />
    </div>
  </header>
);

export default Header;
