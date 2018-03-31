<h1>GRAB DAT CAT</h1>
<p><a href='https://affectionate-panini-e16d31.netlify.com'>GRAB DAT CAT</a> is an app that allows you find cats to adopt, but also offers recommendations based on your Meyers-Briggs Personality Type</p>


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Other packages employed in the creation of this app include:
- [Emotion](https://github.com/emotion-js/emotion)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Enzyme-Adapter-React-16]
- [Jsonp](https://github.com/webmodules/jsonp)
- [React](https://github.com/facebook/react)
- [React-Dom]https://www.npmjs.com/package/react-dom)
- [React-Redux](https://github.com/reactjs/react-redux)
- [React-Router-Dom](https://github.com/ReactTraining/react-router)
- [React-Spinners](https://github.com/davidhu2000/react-spinners)
- [Reactstrap](https://reactstrap.github.io/)
- [Redux](https://github.com/reactjs/redux)
- [Redux-Devtools-Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Redux-Form](https://github.com/erikras/redux-form)
- [Redux-Thunk](https://github.com/gaearon/redux-thunk)

##GETTING STARTED
# Installing
```
>git clone https://github.com/lightsage88/grabdatcatClient
>cd grabdatcatClient
>cd gdcclient
>npm install
```

#Launching
```
>npm start
```
Then open [`localhost:3000`](http://localhost:3000) in your browser.

#Testing
```
> npm test
```


<h2>Introduction</h2>
<p>I really love cats. They are definitely my favorite pet. Having made two capstones about my very nerdy and stereotypical, for a web developer anyways, hobbies of comic books and video games, I thought I should shift my focus towards something a bit different.Grab Dat Cat is a an app helps you find a cat to adopt near you and offers recommendations for cat breeds you should consider when making your pick based off of your Meyers-Briggs Personality Type. Grab Dat Cat only offers suggestions based on what type you are, an optional detail you can select on the registration page or edit on the account page.Actual determination of your M-B Personality Type is made at a link that is offered in the registration page, but you can take that test at any location you please.</p>



<h2>How it Works</h2>
<h3>Register</h3>
<p>In order to use this site, you need to make an account. There isn't really anything super fancy going on here that deviates from the norm in terms of user experience. While you could argue that the information should be freely available to those who stumble across the site, that would defeat the purpose of being able to keep track of the cats your find during your searches that you seriously would consider adopting. To that end, I created a part of the page called 'Cat Kennel', and it will be discussed later in this Readme.</p>
<h5>Registration Screenshots</h5>
<img src='version 2 screenshots/registration-desktop.jpg'>
<img src='version 2 screenshots/registration-mobile.jpg'>

<h3>Login</h3>
<p>You can log in with a username of your choosing, assuming it isn't already taken, and a password that is atleast 10 characters long. There is also a snooty little cat with a comic bubble who will speak to you a little bit too</p>
<p>During loading you will also see a red spinning figure courtesy of React-Spinners</p>

<h5>Landing/Login Screenshots</h5>
<img src='version 2 screenshots/landing desktop.jpg'>
<img src='version 2 screenshots/landing-mobile.jpg'>

<h3>Home/SEEK DAT CAT</h3>
<p>At the home screen, you will be greeted by your first name and you will be presented with fields to fill out in order to look for cats. The only <strong>required</strong> one is the zip code. Other than that, you can choose to seek cats of any/all breed types, genders, ages by leaving those options in their default positions.</p>

<h5>Home Screenshots</h5>
<img src='version 2 screenshots/home-desktop.jpg'>
<img src='version 2 screenshots/home-mobile.jpg'>

<h4>Upon failure to find cats (with screenshots)</h4>
<p>If your search yields no results, then a message will pop on screen saying so.</p>

<img src='version 2 screenshots/home-searchFail-desktop.jpg'>
<img src='version 2 screenshots/home-searchFail-mobile.jpg'>
<h4>Upon finding cats (with screenshots)</h4>
<p>Cats will appear in a box of their own with a decadent, gaudy, blue-dotted border containing a picture of the cat, the cats details, a description, and a button that says <strong>"Add to kennel"</strong>.</p>

<img src='version 2 screenshots/home-search1-desktop.jpg'>
<img src='version 2 screenshots/home-search2-desktop.jpg'>

<h4>Pressing "Add to kennel"</h4>
<p>If you have never pressed the button for that particular cat, then a message will appear in the center of your screen for a short while saying that a new friend as been added. However, if you've already pressed the button before for that particular cat and have not since deleted the cat from your kennel, then a message will appear saying that you already have the cat in your kennel.</p>
<h5>Adding Cats Screenshots</h5>
<img src='version 2 screenshots/home-newCat-desktop.jpg'>
<img src='version 2 screenshots/home-newCat-mobile.jpg'>
<img src='version 2 screenshots/home-alreadyHaveCat-desktop.jpg'>
<img src='version 2 screenshots/home-alreadyHaveCat-mobile.jpg'>

<h3>Cat Kennel</h3>
<p>This part of the site will contain all the pets you have added to your kennel up to this point by pressing the 'Add to kennel' buttons on your search results on the home page. If you're serious about adopting a cat, you can use the info on this page to contact the people necessary to go through with it.</p>
<h4>Pressing "Remove Cat"</h4>
<p>This simply gets rid of the cat from your 'cat kennel'. If you find that same cat again in future searches, you will be able to add the cat to your kennel again</p>
<h5>Kennel Screenshots</h5>
<img src='version 2 screenshots/kennel-desktop-occupied1.jpg'>
<img src='version 2 screenshots/kennel-desktop-occupied2.jpg'>
<img src='version 2 screenshots/kennel-mobile-occupied1.jpg'>
<img src='version 2 screenshots/kennel-mobile-occupied2.jpg'>
<h3>Account</h3>
<p>The account page lets your view and edit your account details as well as delete the account entirely</p>
<h5>Account Screenshots</h5>
<img src='version 2 screenshots/account-desktop.jpg'>
<img src='version 2 screenshots/account-mobile.jpg'><img src='version 2 screenshots/account-edit-desktop.jpg'>
<img src='version 2 screenshots/account-edit-mobile.jpg'>
<img src='version 2 screenshots/account-delete-desktop.jpg'>
<img src='version 2 screenshots/account-delete-mobile.jpg'>
<h3>Log out</h3>
<p>This lets you log out securely, clearing the localStorage for the site from your browser as well as the Redux state used to make the site work.</p>

<h2>Wireframes</h2>
<p>The original wireframes were made on Balsamiq's cloud service and can be seen in <span>gdcclient/htmlwireframes</span>. They were not followed completely to a 'T' as, during development, I came up with a few ideas that I prefered to my original designs</p>

<h2>Technology</h2>
<h3>Front End</h3>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>React-Redux</li>
  <li>React-Router-Dom</li>
  <li>React-Spinners</li>
  <li>Reactstrap</li>
  <li>Redux</li>
  <li>Redux-DevTools-Extension</li>
  <li>Redux-Form</li>
  <li>Redux-Thunk</li>
</ul>
<h3>Back End</h3>
<ul>
  <li>Bcrypt.js</li>
  <li>Body-Parser</li>
  <li>Express.js</li>
  <li>Json Web Token</li>
  <li>Mocha + Chai + ChaiHttp</li>
  <li>MongoDB/mLab.com</li>
  <li>Mongoose</li>
  <li>Morgan</li>
  <li>Node.js</li>
  <li>Passport + Passport.jwt + Passport.local</li>
  <li>Request</li>
  <li>Continuous integration and deployment with <a href='https://travis-ci.org/'>Travis-CI</a></li>
</ul>