import React, { Component } from 'react';
import { navigationItems,svgIcon ,} from '../utils/const'


class Navbar extends Component {
  render() {
    return (
      <div className='wrapper'>
      <nav className="container df jus-bet al-it">
        <div className="df al-it logo">
          <img src={svgIcon.logo} alt="Logo" />
          <span className="">Travel Co.</span>
        </div>
        <ul className="df">
          {navigationItems.map(item => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
        <div className="df buttons">
          <button className="">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </nav>
      <div>
        <img src={svgIcon.banner} alt="" className='banner' />
      </div>
      </div>
    );
  }
}

export default Navbar;
