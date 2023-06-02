import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="headerContainer">
    <Link to="/">
      <li className="link"> Home </li>
    </Link>
    <Link to="/about">
      <li className="link"> About </li>
    </Link>
  </ul>
)

export default Header
