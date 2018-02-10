import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import {logOutUser} from '../actions/index.js';
import {connect} from 'react-redux';

export class NavBar extends React.Component {
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
    this.props.dispatch(logOutUser());
    setTimeout(function(){window.location.reload();}, 2000);

    //need to reload the page with react-router-dom Redirect?
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={this.toggle} className='mr-2'/>
          <NavbarBrand href="/home">GRAB DAT CAT</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
               <NavLink href="/account">Account</NavLink>
              </NavItem>
              <NavItem>
                 <NavLink href="/kennel">Cat Kennel</NavLink>
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

export default connect()(NavBar);
