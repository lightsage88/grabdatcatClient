import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

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

  handleLogout(event){
    console.log('handleLogout running');
    localStorage.clear();
    window.location.reload();

    //need to reload the page with react-router-dom Redirect?
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
                <Link to='/kennel'><NavLink href="">Cat Kennel</NavLink></Link>
              </NavItem>
              <NavItem>
               <NavLink href="/" onClick={(e)=>this.handleLogout(e)}>Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
