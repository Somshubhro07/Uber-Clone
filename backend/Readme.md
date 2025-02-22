# Users Endpoint Documentation

## POST /users/register

### Description

This endpoint registers a new user. It creates a user record and returns a JSON Web Token along with the user data.

### Login Request Headers

The request must include the following headers:

- `Content-Type: application/json`

### Login Request Body

The endpoint expects a JSON object with the following structure:

- `fullname`: An object containing:
  - `firstname` (string, required): Must be at least 3 characters.
  - `lastname` (string, optional)
- `email` (string, required): Must be a valid email and at least 6 characters.
- `password` (string, required): Must be at least 6 characters.

### Register Example

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

### Login Responses

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

#### 400 Bad Request - Validation Error

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

## POST /users/login

### Login Description

This endpoint logs in an existing user. It validates the user's credentials and returns a JSON Web Token along with the user data.

### Request Headers

The request must include the following headers:

- `Content-Type: application/json`

### Request Body

The endpoint expects a JSON object with the following structure:

- `email` (string, required): Must be a valid email.
- `password` (string, required): Must be at least 6 characters.

### Profile Request Example

```json
{
        "email": "john.doe@example.com",
        "password": "secret123"
}
```

### Responses

#### 200 OK

**Description:** User is successfully logged in.

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

#### 401 Unauthorized

**Description:** Invalid email or password.

**Response Body:**

```json
{
        "message": "Invalid email or password"
}
```

## GET /users/profile

### Profile Retrieval Description

This endpoint retrieves the profile of the authenticated user.

### Profile Request Headers

The request must include the following headers:

- `Authorization: Bearer <token>`

### Profile Example

```json
{
        "Authorization": "Bearer jwt-token-string"
}
```

### Profile Responses

#### 200 OK - Profile Retrieved

**Description:** User profile is successfully retrieved.

**Response Body:**

```json
{
        "_id": "userId",
        "fullname": {
                "firstname": "John",
                "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketid": null
}
```

#### 401 Unauthorized - Profile Retrieval

**Description:** Invalid or missing token.

**Response Body:**

```json
{
        "message": "Invalid or missing token"
}
```

## POST /users/logout

### Logout Description

This endpoint logs out the authenticated user.

### Logout Request Headers

The request must include the following headers:

- `Authorization: Bearer <token>`

### Logout Example

```json
{
        "Authorization": "Bearer jwt-token-string"
}
```

### Logout Responses

#### 200 OK - Logout Successful

**Description:** User is successfully logged out.

**Response Body:**

```json
{
        "message": "User successfully logged out"
}
```

#### 401 Unauthorized - Logout

**Description:** Invalid or missing token.

**Response Body:**

```json
{
        "message": "Invalid or missing token"
}
```

## POST /captain/register

### Captain Registration Description

This endpoint registers a new captain. It creates a captain record and returns the captain data.

### Captain Registration Request Headers

The request must include the following headers:

- `Content-Type: application/json`

### Captain Registration Request Body

The endpoint expects a JSON object with the following structure:

- `fullname`: An object containing:
  - `firstname` (string, required): Must be at least 3 characters.
  - `lastname` (string, optional)
- `email` (string, required): Must be a valid email.
- `password` (string, required): Must be at least 6 characters.
- `vehicle`: An object containing:
  - `color` (string, required): Must be at least 3 characters.
  - `plate` (string, required): Must be at least 3 characters.
  - `capacity` (number, required): Must be 1 or more.
  - `vehicleType` (string, required): Must be one of 'car', 'motorcycle', or 'auto'.

### Captain Registration Example

```json
{
        "fullname": {
                "firstname": "John",
                "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "secret123",
        "vehicle": {
                "color": "red",
                "plate": "ABC123",
                "capacity": 4,
                "vehicleType": "car"
        }
}
```

**Description:** Invalid or missing token.

**Response Body:**

```json
{
        "message": "Invalid or missing token"
}
```

**Description:** Invalid or missing token.

**Response Body:**

```json
{
        "message": "Invalid or missing token"
}
```
