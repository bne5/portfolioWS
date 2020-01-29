import React from 'react';
import { Menu, Input, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Navbar = () => (
  
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/experience'>
      <Menu.Item>
        Experience
      </Menu.Item>
    </Link>
    <Link to='/projects'>
      <Menu.Item>
        Projects
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        About Me
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;