import { useState } from 'react';
import { personsImgs } from '../../utils/images';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";
import { navigationLinks } from '../../utils/data';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Sidebar = () => {
  const [activeLinkIdx] = useState();

  const { isAuth } = useContext(AuthContext);
  const client_data = JSON.parse(localStorage?.getItem('client_data'));
  const roles = client_data?.role;

  return (
    <div>
      {
        isAuth
          ? roles === 1
            ?
            <div className={`sidebar`}>
              <div className="user-info">
                <div className="info-img img-fit-cover">
                  <img src={personsImgs.person_two} alt="profile image" />
                </div>
                <span className="info-name">alice-doe</span>
              </div>
              <nav className="navigation">
                <ul className="nav-list">
                  {
                    navigationLinks.map((navigationLink) => (
                      <li className="nav-item" key={navigationLink.id}>
                        <NavLink to={`/${navigationLink.route}`} className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                          <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                          <span className="nav-link-text">{navigationLink.title}</span>
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
            : null
          : null
      }
    </div>
  )
}

export default Sidebar
