## What is the Fetch API?

The **Fetch API** is a modern way to make network requests (like getting data or sending information) in JavaScript. It allows your web pages to communicate with servers and APIs, making them interactive.

Imagine you’re shopping online at Amazon. When you click on a product, your browser asks Amazon’s server to send details about that product, like its name, price, and description. This is a network request, and **Fetch** is the tool that lets your browser ask for data and get a response.

---

## How Does Fetch Work?

### Behind the Scenes:

When you call **fetch()**, it’s like placing an order at a restaurant:

1. **You** (the browser) make a request (like asking for a dish on the menu).
2. **The restaurant** (the server) processes that request and prepares the information.
3. **You** receive the data, and it gets served on your page (like food coming to your table).

In simple terms, fetch:

-   Sends requests to get or send data.
-   Returns a **Promise**, which you can use to handle the response or errors.

### Example of Fetch Request:

```javascript
fetch("https://api.example.com/data") // Asking the server for data
    .then((response) => response.json()) // Convert the response into a usable format (JSON)
    .then((data) => console.log(data)) // Work with the data
    .catch((error) => console.error("Error:", error)); // Catch and handle errors
```

---

## HTTP Methods: Different Ways to Interact

When making a fetch request, you need to specify how you want to interact with the server. Think of it like choosing a method of communication: Do you want to ask for something, send something, or update something?

### 1. **GET** – "Please give me this!"

The **GET** method is used when you want to retrieve data. Think of it as browsing a product on Amazon and asking the server to send back the details of the product.

```javascript
fetch("https://example.com/products") // Asking for the list of products
    .then((response) => response.json())
    .then((data) => console.log(data));
```

-   **When to use**: Use GET when you want to **fetch data** from a server without changing anything. For example, getting product details or user info.

### 2. **POST** – "I want to send you something!"

The **POST** method is used when you need to **send data** to the server. For example, when you submit a form to create a new account, your browser sends a POST request with the form data.

```javascript
fetch("https://example.com/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json", // Sending data in JSON format
    },
    body: JSON.stringify({
        username: "john_doe",
        email: "john@example.com",
        password: "password123",
    }),
});
```

-   **When to use**: Use POST when you are **sending data** to the server, like submitting a form or creating a new user.

### 3. **PUT** – "I want to update this!"

The **PUT** method is used when you want to **update** an existing resource. Imagine uploading a new profile picture to Facebook. You’ve already created an account (the resource), and now you’re updating your profile picture. That’s a **PUT request**.

```javascript
fetch("https://example.com/user/123", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        profilePic: "newProfilePic.jpg",
    }),
});
```

-   **When to use**: Use PUT when you want to **replace** or **update** an existing resource, like updating user profile details or changing a post.

### 4. **DELETE** – "I want to delete this!"

The **DELETE** method is used when you want to **delete** an existing resource, like deleting a comment or a user account.

```javascript
fetch("https://example.com/user/123", {
    method: "DELETE",
});
```

-   **When to use**: Use DELETE when you want to **remove** something from the server, like deleting a message or account.

---

## What Are Headers and Content Types?

### Headers: The Information That Goes Along With Your Request

Headers are like **additional instructions** or **metadata** that you send along with your request. They help the server understand how to handle the request or response.

For example:

-   **Content-Type** tells the server what type of data you’re sending. Are you sending text, JSON, or a file?
-   **Authorization** tells the server who you are (like sending your login credentials).

### Common Headers:

1. **Content-Type**: Describes the type of data you’re sending or expecting.
    - `application/json` – This means you’re sending or expecting data in **JSON** format.
2. **Authorization**: Used for passing authentication tokens, like when you log in.
    - `Bearer <token>` – This is how you send a secure token to access a protected resource.

### Example of using headers with fetch:

```javascript
fetch("https://example.com/protected-data", {
    method: "GET",
    headers: {
        Authorization: "Bearer my-secure-token",
    },
});
```

---

## Content Types: What Data Are You Sending?

When you send data, you need to tell the server what format you're sending. This is where the **Content-Type** header comes in.

### Common Content Types:

1. **application/json**: Used when sending **JSON data** (like user information or product details).
2. **application/x-www-form-urlencoded**: Used when sending form data in the traditional way.
3. **multipart/form-data**: Used when you’re uploading files (like profile pictures or documents).

### Example of sending JSON:

```javascript
fetch("https://example.com/update", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "john", email: "john@example.com" }),
});
```

---

## Handling Errors with Fetch

When you make requests, things can sometimes go wrong. Maybe the server is down, or there’s a typo in the URL. You’ll need to **catch and handle errors**.

Here’s how you can handle errors using **fetch**:

```javascript
fetch("https://example.com/data")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Server error!"); // If the server responds with an error code, throw an error
        }
        return response.json();
    })
    .then((data) => console.log(data)) // If everything’s fine, work with the data
    .catch((error) => console.error("Error:", error)); // Catch and log any errors
```

### HTTP Response code catergories:

1. **Everthing 200-299**: These are success codes.
   They indicate that the request was successful, and the server is responding as expected.
2. **Everthing 300-399**: These are redirection codes. They tell the client that it needs to take additional actions to complete a request.
3. **Everthing 400-499**: These are client error codes. They indicate that there’s something wrong with the request, and the server cannot process it due to the client’s mistake.
4. **Everthing 500-599**: These are server error codes. They indicate that there’s a problem with the server while processing the request.

### Common HTTP Response Codes:

1. **200 OK**: The request was successful.
2. **404 Not Found**: The resource (like a page or file) doesn’t exist.
3. **500 Internal Server Error**: There was an issue with the server.
4. **403 Forbidden**: You don’t have permission to access the resource.

---

## What is JSON and Why Do We Use JSON.stringify() and JSON.parse()?

### JSON (JavaScript Object Notation):

-   JSON is a lightweight data format used to store and exchange data. It’s like a box where you can store things (like data), and it’s easy to read and write.

**Example of JSON**:

```json
{
    "name": "John",
    "age": 30,
    "email": "john@example.com"
}
```

### JSON.stringify():

-   This is used when you want to **convert a JavaScript object into JSON** so you can send it to a server.
-   Think of it like putting your data into a neat package before sending it.

```javascript
const user = {
    username: "john_doe",
    email: "john@example.com",
};
const jsonData = JSON.stringify(user); // Convert JavaScript object to JSON
```

### JSON.parse():

-   This is used when you want to **convert a JSON string into a JavaScript object** so you can work with it in your code.

```javascript
const jsonResponse = '{"name": "John", "age": 30}';
const parsedData = JSON.parse(jsonResponse); // Convert JSON string to JavaScript object
```

---

## Interview Questions

### 1. **What is the Fetch API?**

-   The Fetch API is a modern method used in JavaScript to make HTTP requests to servers, allowing you to fetch or send data asynchronously. It returns a Promise, which resolves to the response from the server.

### 2. **What are the main HTTP methods?**

-   **GET**: Used to retrieve data from the server.
-   **POST**: Used to send data to the server (e.g., creating a new resource).
-   **PUT**: Used to update an existing resource on the server.
-   **DELETE**: Used to delete a resource from the server.

### 3. What is JSON ?

-   Json is a language and JSON stands for JavaScript Object Notation
-   JSON format is text only
-   JSON is used to send data between computers,

    -   Why : Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

-   https://www.w3schools.com/js/js_json_intro.asp

### 4. **What is the difference between JSON.stringify() and JSON.parse()?**

-   **JSON.stringify()**: Converts a JavaScript object into a JSON string (for sending to the server).
-   **JSON.parse()**: Converts a JSON string into a JavaScript object (for using it in your code).
