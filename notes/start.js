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




