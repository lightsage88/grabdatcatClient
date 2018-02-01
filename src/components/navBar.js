import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={this.toggle} className='mr-2'/>
          <NavbarBrand href="/">GRAB DAT CAT</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/home'><NavLink href="">Home</NavLink></Link>
              </NavItem>
              <NavItem>
               <Link to='/account'><NavLink href="">Account</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/kennel'><NavLink href="">Kennel</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/'><NavLink href="">Log Out</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
