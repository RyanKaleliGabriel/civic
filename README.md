## Setup instructions.

Clone the repository :

```bash
git clone https://github.com/RyanKaleliGabriel/civic.git

```

Install the dependencies :

```bash
 npm install
```

Run the app:

```bash
 npm run dev
```

## A description of the features.

- Items Management . All CRUD operations.
- Restful APIs, security and performance best practices like versioning, rate limiting and cors

## Instructions for testing the endpoints in postman.

- (GET request: All items)

```bash
   127.0.0.1/api/v1/civic-api/
```

- (GET request: A specific item)

```bash
   127.0.0.1/api/v1/civic-api/<item-id>
```

- (POST: Add an item)

```bash
   127.0.0.1/api/v1/civic-api/

    #Body
   {
      "todo":"Read"
   }
```

- (PATCH request: Update an item)

```bash
   127.0.0.1/api/v1/civic-api/<item-id>

   #Body
    {
      "todo":"Rest"
    }
```

- (DELETE request: Remove an item)

```bash
   127.0.0.1/api/v1/civic-api/<item-id>
```

- The .env file contains all the db logins

