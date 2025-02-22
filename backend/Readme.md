# Users Endpoint Documentation

## POST /users/register

### Description

This endpoint registers a new user. It creates a user record and returns a JSON Web Token along with the user data.

### Request Body

### Headers

The request must include the following headers:

- `Content-Type: application/json`

### Request Body

The endpoint expects a JSON object with the following structure:

- `fullname`: An object containing:
  - `firstname` (string, required): Must be at least 3 characters.
  - `lastname` (string, optional)
- `email` (string, required): Must be a valid email and at least 6 characters.
- `password` (string, required): Must be at least 6 characters.

### Example

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "secret123"
}
```

### Responses

#### 201 Created

**Description:** User is successfully registered.

**Response Body:**

```json
{
    "token": "jwt-token-string",
    "user": {
        "_id": "userId",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketid": null
    }
}
```

#### 400 Bad Request

**Description:** Validation error. The response contains details of the validation errors.

**Response Body:**

```json
{
    "errors": [
        {
            "msg": "Email is not valid",
            "param": "email",
            "location": "body"
        }
    ]
}
```
