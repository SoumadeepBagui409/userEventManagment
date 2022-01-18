
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

This will help user to store event against the user ID



#Postman requests

![postman1](https://user-images.githubusercontent.com/75625374/149886990-883f9ef7-f8df-4059-9e32-88ede6fa0a15.jpeg)
![postman2](https://user-images.githubusercontent.com/75625374/149887015-3de6cb5e-28e5-4b03-bdd9-be223b576e92.jpeg)
![postman3](https://user-images.githubusercontent.com/75625374/149887045-0412b170-5733-4826-949a-04157b41a1fa.jpeg)
![postman4](https://user-images.githubusercontent.com/75625374/149887056-56e0df35-3949-45e1-8a9b-db85023d079d.jpeg)
![postman5](https://user-images.githubusercontent.com/75625374/149887066-027784c4-82b5-4d19-ae01-e9f37135cc39.jpeg)



