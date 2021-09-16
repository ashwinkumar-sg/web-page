import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function NavbarMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar); //event handler

  return ( 
    <>
        <div> 
          <a className='menu-bars'>
            <button class="bg-white border-0" onClick={showSidebar}><i class="fas fa-bars"></i></button>
          </a>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <a className='menu-bars'>
              <i class="fas fa-times"></i>
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </>
  );
}

export default NavbarMenu;
