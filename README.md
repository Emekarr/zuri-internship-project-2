# zuri-internship-project-2 #  
<br></br>
DEPLOYED ON HEROKU https://aqueous-taiga-46614.herokuapp.com  
There are 4 endpoints in this project.  
They all return a payload when the process gets completed but returns a string when an error occurs.  
```json
{
"message": "message",
"data": "data" 
}  
```
message will contain information about the operation being a success or failure, etc  
data will contain the result.
<br></br>
* ## First endpoint ##
```
/user/send
```  
This is the end point for creating a new user in the database. It takes in a json in the body and the data from this json is used to create a new entry.  
The data passed should be:
```json
{
	"name": "name",
	"email": "email@email.com",
	"country": "country"
}
```
<br></br>

* ## Second endpoint ##
```
/user/update
```
This second endpoint is used to update already existing data in the database. Pass the user identifier (email) as a query parameter and also pass the new update for the database through the body.
```
/user/update?email=email@email.com
```
```json
{
"name": "name2"
}
```

<br></br>

* ## Third endpoint ##
```
/user/data
```
This endpoint returns a user profile when a user passes an email address through query parameters.
```
/user/data?email=email@email.com
```

<br></br>

* ## Foirth endpoint ##
```
/user/delete
```
This endpoint deletes a user detail from the database when you pass in the target email address as a query parameter.
```
/user/data?email=email@email.com
```
