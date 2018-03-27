import React, { Component } from 'react';
import './app.css';
import './landing.css';

import LoginForm from './loginForm';
import {connect} from 'react-redux';

export class Landing extends Component {
render() {
  let validLogin = this.props.validLogin;
    if(validLogin === false){
      return(
       <div className="App">
      <section className='topHat'>
                <span className='notRegistered'>You made a mistake, hooman.</span>

      <div class="main">
    <span class="stand"></span>
    <div class="cat">
     <div class="body"></div>
     <div class="head">
       <div class="ear"></div>
     <div class="ear"></div>
     </div>
     <div class="face">
      <div class="nose"></div>
     <div class="whisker-container">
       <div class="whisker"></div>
       <div class="whisker"></div>
     </div>
     <div class="whisker-container">
       <div class="whisker"></div>
       <div class="whisker"></div>
     </div>
     </div>
     <div class="tail-container">
      <div class="tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
</div>
       
      </section>
      <h1 className='funkyTitle'>GRAB DAT CAT</h1>
      <section className='titleAndBlurb'>
          <h1 className="App-title">the purrrfect match</h1>
                    <span>Find a cat to adopt and use Myers-Briggs personality tests to determine which cat breed will suit you best! Adopting a pet can involve rough adjustment periods for beasts both 4 and 2 legged! This app will assist you in adopting a cat that is likely to strike a harmonious chord with you.</span>


          
          <div className='testLoginBox'>
          <span className='testLogin'>Username: spiderman<br/>pw: 1234567890</span>
          </div>
          <LoginForm />
       </section>
        
          
      </div>
      );
  }
    return (

      <div className="App">
      <section className='topHat'>
                <span className='notRegistered'>Not registered? Fix that, hooman.</span>

      <div class="main">
    <span class="stand"></span>
    <div class="cat">
     <div class="body"></div>
     <div class="head">
       <div class="ear"></div>
     <div class="ear"></div>
     </div>
     <div class="face">
      <div class="nose"></div>
     <div class="whisker-container">
       <div class="whisker"></div>
       <div class="whisker"></div>
     </div>
     <div class="whisker-container">
       <div class="whisker"></div>
       <div class="whisker"></div>
     </div>
     </div>
     <div class="tail-container">
      <div class="tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
</div>
       
      </section>
      <h1 className='funkyTitle'>GRAB DAT CAT</h1>
      <section className='titleAndBlurb'>
          <h1 className="App-title">the purrrfect match</h1>
                    <span>Find a cat to adopt and use Myers-Briggs personality tests to determine which cat breed will suit you best! Adopting a pet can involve rough adjustment periods for beasts both 4 and 2 legged! This app will assist you in adopting a cat that is likely to strike a harmonious chord with you.</span>


        
          <div className='testLoginBox'>
          <span className='testLogin'>Username: spiderman<br/>pw: 1234567890</span>
          </div>
          <LoginForm />
       </section>
        
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  validLogin: state.app.user.validLogin
});

export default connect(mapStateToProps)(Landing);