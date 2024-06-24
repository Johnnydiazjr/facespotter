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

Lets think about what we need now 

We will definately need a paragraph 
that will give it a class name so it has
size of f3 and within the p 
since it is JS wrap in curly brackets and quotes 

<p className='f3'>
	{'This Magic Brain will detect faces in your pictures. Give it a try'}

We want another div 

with an input and a button 

<div> 
	<input type='tex' />
	<button>Detect</button>

	//

Now lets add some class names and styling 

<input className='f4 pa2 w-70 center' type='tex' />

<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>

width 30 which completes 100%, grows when hovering over, size of f4, and more styling using tachyons 

We want the input and button on the same line together 
A good way to do that is to use the parent div that is wrapping them 

<div className='center'> 

we will do display: flex, and justify: center 

We can also create a class on app.css since we will 
using that a lot 

in App.css 

.center {
	display: flex;
	justify-content: center;
}

Now lets add another div to wrap it and maike it smaller 
We will add a class name and use tachyons

<div className='pa4 br3 shadow-5'>

Looks a bit off, lets fix a few things 

We will need some more css properties 

So lets create a new file in out image link form, .css 
and within here we will create a form class 
and give it a width of 700 pixels

.form {
	width: 700px;
}

and add center property to following div 

<div className='center pa4 br3 shadow-5'>

For the background, we don't want it to be the exact 
same as the page 

We can use a nice pattern 

We can use the following web site 

lea.verou.me/css3patterns/

Coping the CSS from the HoneyComb 

Now we can add form to the div class name 

and import the css file into our ImageLinkForm component 

import './ImageLinkForm.css';

Now we should add display flex 
by adding center classname 
so that everything is all in one line 

Lets add a pointer when hovering to the whole page (in
index.css) 

button {
  cursor: pointer;
}

So we  have the input, and the last thing is the image 

But we need some functionality before adding the image 

We forgot to do the rank, which means we want something 
at the top

This rank component will give us our username and our 
rank compared to all of the other users that have 
submitted pictures 

Lets import and create a file for rank functionality 
and add Rank to app.js to our other components 
Create a folder and jsx file just as the others 
Import react 

import React from 'react';

const Rank = () => {
	return (
		<div>
		
		</div>
	);
}

export default Rank;

Now lets create out component adding a div 
and a placeholder

/

<div className='white f3'> 
	{'Andrei, your current rank is...'}
</div>

and below the same thing it a little bit bigger 
/

<div className='white f1'> 
	{'#5'}
</div>

Now the last thing before we add functionality 
Is the generic font 

Lets change it in index.css 
for the whole page 

lets try courier new for now, with some back up 
in case the font is not available -monospace

font-family: "Courier New", Courier, monospace;

Very last thing 

That is (or was) popular is the particles.js library 

Allows interactive background 

And do lots of cool things 

They have a react version 

npm install package 
get javascript code from documentation 







