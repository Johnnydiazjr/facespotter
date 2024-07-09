TIME FOR SOME FUNCTIONALITY!!!

Website is set up

Now lets enter a URL, press detect, and an image appears 
with a face detection box if it exists in the image link

Where to begin 

First thing is to create functionality to detect what user 
enters in the text field 

input that filters the text in search field 

Using react ImageLinkForm we can create functionality 

We need state 

We need to create a state so that our app knows what the value 
is the user enters it, remembers it, and updates it whenever it gets 

The way to start this is to define a constructor 

constructor() {
	super();
	this.state = {
		input: ','
	}
}

This inpit will have a on change or on input change that we will use with
arrow functions so that we don't get the 404 error. Any time there is an 
event listener on a web page we receive an event

onInputChange = (event) => {

}

lets test to see if it works 

onInputChange = (event) => {
	console.log(event);
}

and on ImageLinkForm we can pass it as a prop 

Now to get a value from your input use event.target.value 

Now to detect an image 

One step at a time 

Lets create a function 

onButtonSubmit = () => {
	console.log('click');
}

We can pass onSubmit to our image link form 

<ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>

Now in our image link form jsx file 

const ImageLinkForm = ({ onInputChange, omButtonSubmit }) => {

and 

<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
			onClick={onButtonSubmit}

Adding onClick event to the button 

So now we move on to add our API 

