# Users Endpoint Documentation

## POST /users/register

### Description

This endpoint registers a new user. It creates a user record and returns a JSON Web Token along with the user data.

### Request Headers

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

#### 400 Bad Request - Validation Error (User Registration)

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

### Description - User Login

This endpoint logs in an existing user. It validates the user's credentials and returns a JSON Web Token along with the user data.

### Request Headers - User Login

The request must include the following headers:

- `Content-Type: application/json`

### Request Body - User Login

The endpoint expects a JSON object with the following structure:

- `email` (string, required): Must be a valid email.
- `password` (string, required): Must be at least 6 characters.

### Example - User Login

```json
{
                "email": "john.doe@example.com",
                "password": "secret123"
}
```

### Responses - User Login

#### 200 OK - User Login

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

### Description - User Profile

This endpoint retrieves the profile of the authenticated user.

### Request Headers - User Profile

The request must include the following headers:

- `Authorization: Bearer <token>`

### Example - User Profile

```json
{
                "Authorization": "Bearer jwt-token-string"
}
```

### Responses - User Profile

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

#### 401 Unauthorized - Captain Profile

**Description:** Invalid or missing token.

**Response Body:**

```json
{
                "message": "Invalid or missing token"
}
```

## POST /users/logout

### Description - User Logout

This endpoint logs out the authenticated user.

### Request Headers - User Logout

The request must include the following headers:

- `Authorization: Bearer <token>`

### Example - User Logout

```json
{
                "Authorization": "Bearer jwt-token-string"
}
```

### Responses - User Logout

#### 200 OK - Logout Successful

**Description:** User is successfully logged out.

**Response Body:**

```json
{
                "message": "User successfully logged out"
}
```

#### 401 Unauthorized - User Profile

**Description:** Invalid or missing token.

**Response Body:**

```json
{
                "message": "Invalid or missing token"
}
```

## POST /captains/register

### Description - Captain Register

This endpoint registers a new captain. It creates a captain record and returns the captain data.

### Request Headers - Captain Register

The request must include the following headers:

- `Content-Type: application/json`

### Request Body - Captain Register

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

### Example - Captain Register

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

### Responses - Captain Register

#### 201 Captain Created

**Description:** Captain is successfully registered.

**Response Body:**

```json
{
                "captain": {
                                "_id": "captainId",
                                "fullname": {
                                                "firstname": "John",
                                                "lastname": "Doe"
                                },
                                "email": "john.doe@example.com",
                                "vehicle": {
                                                "color": "red",
                                                "plate": "ABC123",
                                                "capacity": 4,
                                                "vehicleType": "car"
                                }
                },
                "token": "jwt-token-string"
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

#### 400 Bad Request - Captain Already Exists

**Description:** Captain with the given email already exists.

**Response Body:**

```json
{
                "message": "Captain already exists"
}
```

## POST /captains/login

### Description - Captain Login

This endpoint logs in an existing captain. It validates the captain's credentials and returns a JSON Web Token along with the captain data.

### Request Headers - Captain Login

The request must include the following headers:

- `Content-Type: application/json`

### Request Body - Captain Login

The endpoint expects a JSON object with the following structure:

- `email` (string, required): Must be a valid email.
- `password` (string, required): Must be at least 6 characters.

### Example - Captain Login

```json
{
                "email": "john.doe@example.com",
                "password": "secret123"
}
```

### Responses - Captain Login

#### 200 OK

**Description:** Captain is successfully logged in.

**Response Body:**

```json
{
                "captain": {
                                "_id": "captainId",
                                "fullname": {
                                                "firstname": "John",
                                                "lastname": "Doe"
                                },
                                "email": "john.doe@example.com",
                                "vehicle": {
                                                "color": "red",
                                                "plate": "ABC123",
                                                "capacity": 4,
                                                "vehicleType": "car"
                                }
                },
                "token": "jwt-token-string"
}
```

#### 400 Bad Captain Request - Validation Error

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

#### 404 Not Found - Invalid Email or Password

**Description:** Invalid email or password.

**Response Body:**

```json
{
                "message": "Invalid email or password"
}
```

## GET /captains/profile

### Description - Captain Profile

This endpoint retrieves the profile of the authenticated captain.

### Request Headers - Captain Profile

The request must include the following headers:

- `Authorization: Bearer <token>`

### Example - Captain Profile

```json
{
                "Authorization": "Bearer jwt-token-string"
}
```

### Responses - Captain Profile

#### 200 OK - Captain Profile Retrieved

**Description:** Captain profile is successfully retrieved.

**Response Body:**

```json
{
                "_id": "captainId",
                "fullname": {
                                "firstname": "John",
                                "lastname": "Doe"
                },
                "email": "john.doe@example.com",
                "vehicle": {
                                "color": "red",
                                "plate": "ABC123",
                                "capacity": 4,
                                "vehicleType": "car"
                }
}
```

#### 401 captain Unauthorized

**Description:** Invalid or missing token.

**Response Body:**

```json
{
                "message": "Invalid or missing token"
}
```

## POST /captains/logout

### Description - Captain Logout

This endpoint logs out the authenticated captain.

### Request Headers - Captain Logout

The request must include the following headers:

- `Authorization: Bearer <token>`

### Example - Captain Logout

```json
{
                "Authorization": "Bearer jwt-token-string"
}
```

### Responses - Captain Logout

#### 200 OK - Captain Logout Successful

**Description:** Captain is successfully logged out.

**Response Body:**

```json
{
                "message": "Logout successfully"
}
```

#### 401 Captain Unauthorized

**Description:** Invalid or missing token.

**Response Body:**

```json
{
                "message": "Invalid or missing token"
}
```
