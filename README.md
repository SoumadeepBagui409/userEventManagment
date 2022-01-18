
# Project

This is User-Event managment 


# TechStack

mongoDB is used for Database

Express is used for Server

This project is based on server side rendering 


# Requirement  

->This project requires you to have install mongoDB locally on your system

for windows -> https://www.youtube.com/watch?v=MCpbfYvvoPY&t=203s

-> Download an chrome extention that parse the incoming JSON will help you with
/findUser and /findEvents GET request 

for eg JSON formattar

 https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa

## Common error for running mongoDB on windows

 1.) Not setting up the enviorment variable 

 2.) before starting the project open two cmd prompt 

    run mongod in first cmd -> (Just type mongod)

    run mongo in second cmd  -> (just type mongo)

   
    


## how to run the project

To run this project run

```bash
. make the clone of the project
. run "npm install" from the root directory
   -> it will download all the dependencies required
. run mongod and mongo in two separate cmd prompt    
. run npm start or node index.js
. website will be hosted at localhost:3001

```


## REST API

#### Get User form 

```http
  GET /
```

#### Get event forms 

```http
  GET /events
```
 

#### Fetch all users

```http
  GET /findUser
```
This project is currntly in development phase hence this api will helps a lot for for developer to get the all user stored in the Database so it ease out the process to fecth the user ID

#### Fetch all Events

```http
  GET /findEvents
``` 
This project is in development phase will ease out developers a lot to fecth all the events


#### Fetch all Events

```http
  GET /findEvent
``` 



#### Fetch All the event for the user

```http
  POST /showEventnow
``` 

This will help to fetch all the event for the corresponing user ID


#### Fetch All the event for the user

```http
  POST /addUser
``` 
This will help to send the data of user and stored in DB for every unique email

#### Fetch All the event for the user

```http
  POST /addEvents
```

This will help use too store event against the user ID
