
# Dummy Login Api
The task is to create a react based Dummy Api which supports login of a user based on a predfied user data 
```
[
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]
```
The Login form should have following features.
- <b>Login form</b> : The application should contain a login form consisting of a `email`  and `password` input section along with a submit button. 
- <b>Login feature</b> : The application should only allow to login the above defined user with correct email and password to login and in response only `console.log(userData)` after a timeout for `3000 ms`.
- <b>Error Handling</b> : The application shall check the user data if present above with correct password else after a timeout of `3000 ms` it should `console.log` the error and application should handle the error. along with having the error it should show just near the email or password input block according to the mismatch in any of the two.


 
###  Instructions

- email input should have an id <b>"input-email"</b>.
- passowrd input should have an id <b>"input-password""</b>
- submit button should have an id <b>"submit-form-btn""</b>
- in case of no user present with the input email the application should display a text "User not found" with an id of tag <b>"user-error"</b> and if no error is present the text should be empty.
- in case of incorrect password the application should display a text "Password Incorrect" with an id of tag <b>"password-error"</b> and if no error is present the text should be empty.
