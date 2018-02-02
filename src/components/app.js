import React, { Component } from 'react';
import './app.css';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Jumbotron,
//   Button
// } from 'reactstrap';
// import {Button} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import LoginForm from './loginForm';
// import Image from './image';
import Landing from './landing';
import Home from './home';
import Registration from './registration';
import Account from './account';
import Kennel from './kennel';
import Pedestal from './pedestal';

export default class App extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.data);
    return (
    <Router>
      <main>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/pedestal/:catName' component={Pedestal} />
        <Route exact path='/kennel' component={Kennel} />
      </main>

      
    </Router>
    );
  }
}

// export default App;
// <div className="App">
//       //   <header className="App-header">
//       //     <h1 className="App-title">GRAB DAT CAT</h1>
//       //     <span>Find a cat to adopt and use Myers-Briggs personality tests to determine which
//       //     cat breed will suit you best!</span>
//       //   </header>
//       //   <LoginForm />
//       //   <span>Not registered, hooman? Click the register button to fix that, hooman.</span>
//       //   <br/>
//       //   <Image imageAddress={this.props.data.catKennel[0].catPic}/>
//       // </div>