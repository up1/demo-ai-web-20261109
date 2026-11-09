# Feature name : Login with username and password
* route name = /login

## Mock HTML User Interface 
* File login-ui.html

## User flow
1. User go to login page /login
2. Fillin username and password
3. Validate inputs and Submit to system via REST APIs (POST /api/login)
   3.1 Success, redirect to /welcome
   3.2 Fail, show inline error message

## Input validation
* username
  * rule=required, max length 10, [a-zA-Z] 
  * error message = Username invalid
* password
  * rule=required, max length 20
  * error message = Password invalid

## API spec
* Login = POSt /api/login
* Request body with json
```
{
    "username": "input from user",
    "password": "input from user"
}
```
* Response with success = 200
```
{
    "token": "jwt token"
}
```

* Response with fail = 500 (login fail + system error)
```
{
    "message": "Error na ja !!"
}
```

## Mapping UI's element with data-testid arrtibite
|  UI' element | data-testid  |  Type |
|---|---|---|
|  Username | ex-id-username  |  Textfield |
|  Password | ex-id-password  |  Textfield |
|  Sig in to workspace | ex-id-button |  Button |


## Test cases for UI testing

### Test case ID : TC001
* Case name=Success with login (valid username and password)
* Tag=login

Steps
1. Open web to login page http://localhost:5176/
2. Fillin valid username and password
3. Redirect to welcome page

Input data
* username=alex
* password=demo123