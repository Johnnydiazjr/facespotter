Testing out API 

May have to revisit 

No code along for this video 

How the project will look 

Starting with the end product and how to debug 

face-recognition-brain 

will be turned into the SmartBrain project by the end 
of the course 

There will be different versions 

Version 1, smart brain api, and final version 

That will deploy to production 

This project will be linked to 

Clone the repo 

run npm install and npm start 

Have app running on tab 

Haven't built sign in component and others 

But if you go to the project we have some components 

First thing 

Grab the API key from clarifai 

Click on Create an APP 

Name it whatever 

In App Settings 

there should  be the api key 

Copy the API key from

Put the API key in app.js 

syntax:

const app = new Clarifai.app({
	apiKey: 'your api key here'
});

Next part is going back to the app 

When we open up the app 

We create a route: flex

Change to home so we don't need to sign in and have available 

Test home page by entering an image 

Look at the error 

It will say Model does not exist 

Why is that?

This is something that we will encounter. Clarifai has updated 
how to call their API 

We will code this in the future 

app.models.predict methos with face detect model (the old way)

this has now changed to 

model id based on the name in our app 

In the documentation, go to making predictions 

clarifai models 

click on model gallery 

this is linked

we want to use the face detection model 

face-detection by clarifai 

model id is just face-detection (copy)

Instead of old way of doing it, update to new way from web site 

Now no error except for 404 image since it is our own end point 
That we will fix later with our API 

In console log you will see outputs, data, and regions 

 