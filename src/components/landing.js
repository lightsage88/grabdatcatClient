import React, { Component } from 'react';
import './app.css';
import './landing.css';

import LoginForm from './loginForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
render() {
  let validLogin = this.props.validLogin;
  console.log(validLogin);
  //   if(validLogin === false){
  //     return (
  //     <script>
  //       document.getElementById('catBubbleSpeech').innerHTML = 'You made a mistake, hooman';
  //     </script>
  //     );
  // }
    return (

       
      <div className="App">
      <section className='topHat'>
      {(validLogin !== false) ? (
        <span id='catBubbleSpeech' className='notRegistered'>
                Not registered?<Link id='registerCaption' to='/registration'> Fix that, hooman.</Link>
        </span>
                ) : 
      (<span className='notRegistered'>You made a mistake, hooman.</span>)}
                

      <div className="main">
    <span className="stand"></span>
    <div className="cat">
     <div className="body"></div>
     <div className="head">
       <div className="ear"></div>
     <div className="ear"></div>
     </div>
     <div className="face">
      <div className="nose"></div>
     <div className="whisker-container">
       <div className="whisker"></div>
       <div className="whisker"></div>
     </div>
     <div className="whisker-container">
       <div className="whisker"></div>
       <div className="whisker"></div>
     </div>
     </div>
     <div className="tail-container">
      <div className="tail">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail"></div>
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
      <LoginForm />
        <section id='tab1' className='titleAndBlurb'>
          <h1 className="App-title">the</h1>
                    <span>key to adopting a cat that is best to you lies in figuring out which breed for the kind of person you are.</span>


        
          
          
       </section>
        <section id='tab2' className='titleAndBlurb'>
          <h1 className="App-title">purrfect</h1>
                    <span>cats are available all over the world and this app can help you find cats of any age, gender, or breed.</span>

       </section>
        <section id='tab3' className='titleAndBlurb'>
          <h1 className="App-title">match</h1>
                    <span>-es can be made with the help of your Myers-Briggs Personality Type, it is not necessary, but can assist you in adopting a cat that is more your speed, so to speak!</span>

          
          
       </section>
        
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  validLogin: state.app.user.validLogin
});

export default connect(mapStateToProps)(Landing);