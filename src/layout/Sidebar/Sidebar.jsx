import { useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import {NavLink} from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  const [activeLinkIdx] = useState();

  if ( 5 == 5 ) {
    return (
      <div className={ `sidebar` }>
        <div className="user-info">
            <div className="info-img img-fit-cover">
                <img src={ personsImgs.person_two } alt="profile image" />
            </div>
            <span className="info-name">alice-doe</span>
        </div>
        <nav className="navigation">
            <ul className="nav-list">
              {
                navigationLinks.map((navigationLink) => (
                  <li className="nav-item" key = { navigationLink.id }>
                    <NavLink to={`/${navigationLink.route}`} className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                    <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                        <span className="nav-link-text">{ navigationLink.title }</span>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
        </nav>
      </div>
    )
  }
  else{
    return (
      <div></div>
    )
  }
}

export default Sidebar
