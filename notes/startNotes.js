Lets start by removing things we don't need:

Remove logo imports 
Remove Div content 

Now lets start building out some components (even though we haven't created them)

Since we are using Vite start
replace template with the standard React component render syntax

class App extends Component {
	render() {
		return (
			<div classname="App">

			</div>
			);
	}
}

full view:

import { useState } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div classname="App">
      
      </div>
      );
  }
}

export default App;

full view adding components we will create:

import { useState } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div classname="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
      );
  }
}

export default App;

Lets start with navigation, in the meantime, wrap the components 
we will not use in curly brackets and comment out 

import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/*{<Logo />
        <ImageLinkForm />
        <FaceRecognition />}*/}
      </div>
      );
  }

Now lets begin to organize. Create a folder for components
and one for Navigation within that 

Within Navigation component we will have everything related to navigation 
CSS, JS...just js for now 

Once js file is created 

Start doing standard import 

import React from 'react';

Since it will be a simple component with no state 
we will do a pure function 

const Navigation = () => {
	return (
		<nav>
			<p>Sign Out</p>
		</nav)
} 

and of coarse add the at the end

export default Navigation; 

Now lets import the component into our App.js from current directory

import Navigation from './components/Navigation/Navigation'

Now we have a sign out 

We want our nav element in paragraph element to display on the right 

<nav style={{display: 'flex', justifyContent: 'flex-end'}}>

in react use camel case

Now will be to the right 

Now we need some CSS 

Lets install Tachyons 

Using tachyons will begin to style 

<p className='f3 link dim black underline pa3 pointer'>Sign Out</p>

In index.css, going to add a background to family 

body {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	background: linear-gradient()
}

Now lets move on to logo 

Create a folder in components and a js file for Logo in the folder 

To open all new files as Javascript Babel 

in Sublime, go to View, Syntax, Javascript (Babel)

To make things fast 

copy the Navigation 

Replace Navigation with Logo, as well as what we return 

import React from 'react';

const Logo = () => {
	return (
		<div className="ma4 mt0">
		</div>
	);
}

export default Logo;

react tilt is a cool library 

npm install react-parallax-tilt

from 

https://www.npmjs.com/package/react-parallax-tilt

Install in terminal 

What is --save 

In earlier versions, if you wanted to have packages installed 
in Json you had to do --save 

Now it does so by default 

After installing the package 

Follow the documentation 

import Tilt from 'react-parallax-tilt';

<Tilt>
		      <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
		        <h1>React Parallax Tilt</h1>
		      </div>
		    </Tilt>

Styling as per course 

		<div className="ma4 mt0">
			<Tilt className="Tilt" style={{ height: 150, width: 150 }} >
		     <div className="Tilt-inner">Alien</div>
		    </Tilt>

Lets add some more styling with tachyons 

<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }} >
		     <div className="Tilt-inner">Alien</div>
		    </Tilt>
		</div>

	///

This way we can see more clearly where it is 

Its working but our colors are off 

Create a new file 

Logo.css to make background 

Give it the same background as our index for now 
and import into the logo.jsx file 

One of the cool things with tilt are many options in documentation

Lets grab a free logo online 

Royalty free 

Get your image, in PNG and size selected
Place file in your logo folder 

Import into the logo.jsx file 

import Brain from './Brain.jpg';

Now lets give it an image tag 

<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }} >
		     <div className="Tilt-inner"><img alt='logo' src={Brain}/></div>
		    </Tilt>
		</div>

		//

Bringing the brain a little bit lower 

<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" style={{ height: 120, width: 150 }} >
		     <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} alt='logo' src={Brain}/></div>
		    </Tilt>
		</div>
		
// 

Lets see what else we need 

Image link form 

We will create a new component just as we did with the Navigation
and the Logo 

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

Create a new folder in components 
as well as a jsx file 

Copy and paste from another component to load the files
Remove what we don't need or will use such as tilt 








