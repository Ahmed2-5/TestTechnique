# Custom Domain Configuration for Local Development
### Overview
This project demonstrates how to configure a custom domain (myexample.com) for local development by modifying the hosts file and setting up a simple Node.js web server. When accessed through the custom domain, the server displays "Hello Gentaur!".
### Technical Challenge 
the main tasks involved in this setup include:
- Configuring the /etc/hosts file (or equivalent on Windows) to assign a custom domain (myexample.com) to localhost.
- Creating a simple Node.js web server that serves a web page with the message "Hello Gentaur!".

### Implementation
#### Step 1: Host File Configuration
Modify the hosts file to map the custom domain to ```localhost```: 
- ```127.0.0.1 myexample.com```
##### Location of the hosts file:
- C:\Windows\System32\drivers\etc\hosts

#### Step 2: Web Server Setup
Create a minimal Node.js HTTP server that:
- Runs on port 3000
- Serves a simple HTML page with "Hello Gentaur!"
- Responds to requests at http://myexample.com:3000

###### Node.js Server Code:
```Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html>\n<head>\n<title>myexample.com</title>\n</head>\n<body>\n<h1>Hello Gentaur!</h1>\n</body>\n</html>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://myexample.com:${port}/`);
});
```

#### Step 3: Testing
To verify the configuration:
1. Start the Node.js server by running:
```node server.js```
2. Open a web browser and navigate to: ```http://myexample.com:3000```
3. Confirm that "Hello Gentaur!" is displayed.

