Reading documentation like a pro

We learned that we have the models we can use with Clarifai 
We learned we can use them to make predictions 
In dashboard in clarifai 

If we go to the documentation 
Which is the process we would use as a developer 
and read Making Predictions, Images 

We want to use JavaScript (REST) documentation
If you look at the code, it may look different then 
previous versions 

Part of our job as a developer is to stay on top of API changes 
When there is a new update we have to really understand our code
so that we can make updates 

Go to documentation and see that it is different 
Copy the documentation and work with our existing way of doing things 
Copy at the top from the documentation 

We see that Clarifai now requires us to create an access token 
This is a new way to require us to have a key 
This is more secure 
Enter your PAT, which is personal access token located in your
dashboard in security

Can create personal access token, select all scopes and name 
whatever you want token
Copy and paste into syntax given in documentation 
This is the process to update 
Follow other instructions 

Name of the app is the app id 

This is the same as face-detection model
copy face-detection 

Model version id is optional 

Don't need to use it in latest version 

Image url is one we will provide for testing 

to clean things up create a Const for the documentation instructions
and change the image parameter imageUrl which will be dynamic:

const setupClarifai(imageUrl) => {

}

Now from here 

We don't need to change anything 

Copy const raw json to send to clarify 

Lets return from this set up clarifai the raw json we will send 

return raw = JSON.stringify 

Set up clarifai will return json 

can change const to returnClarifaiJSONRequest or similar 
for those reading will understand what is happening 

What else 

some requestOptions to include 

copy the
and return from
convery to const to
to return requestOptions - see video 

returning the request options in

Now the only thing left is the fetch request 

Can remove the model id is

Keep the fetch 

We can go to our onButtonSubmit 

API models has been updated to fetch with Model ID which is face detection

We can change model id to face detection 

requestOptions is now our function making it dynamic 

We don't want text, so update to json 

We don't need to console log the result or catch errors 

We will do later with

All we are doing will be the same as the past only using fetch

1. Javascript NPM package 
2. No NPM package (fetch)
3. GRPC NPM Package 

Check if working but

Don't worry about 404 error which we will build out later 

We just did exactly what a client library does 

Clarifai package is not needed anymore 

with fetch 

and not use any NPM packages 

Not needed anymore, lowers dependecies of project with a simple
fetch 

No need to install, import, export etc 



