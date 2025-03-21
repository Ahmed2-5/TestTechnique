Custom Domain Configuration for Local DevelopmentOverviewThis project demonstrates how to configure a custom domain (myexample.com) for local development by modifying the hosts file and setting up a simple Node.js web server. When accessed through the custom domain, the server displays "Hello Gentaur!".
Technical ChallengeThe main tasks involved in this setup include:
Configuring the /etc/hosts file (or equivalent on Windows) to assign a custom domain (myexample.com) to localhost.
Creating a simple Node.js web server that serves a web page with the message "Hello Gentaur!".
ImplementationStep 1: Host File ConfigurationModify the hosts file to map the custom domain to localhost:
127.0.0.1 myexample.comLocation of the hosts file:
Windows: C:\Windows\System32\drivers\etc\hosts
Linux/Mac: /etc/hosts
Step 2: Web Server SetupCreate a minimal Node.js HTTP server that:
Runs on port 3000
Serves a simple HTML page with "Hello Gentaur!"
Responds to requests at http://myexample.com:3000
Node.js Server Code:const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><head><title>myexample.com</title></head><body><h1>Hello Gentaur!</h1></body></html>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://myexample.com:${port}/`);
});Step 3: TestingTo verify the configuration:
Start the Node.js server by running:
node server.jsOpen a web browser and navigate to:http://myexample.com:3000
Confirm that "Hello Gentaur!" is displayed.
Technologies UsedNode.js (v20.13.0)
JavaScript
Hosts file configuration
HTTP server
Setup InstructionsPrerequisitesNode.js installed
Administrative privileges (to modify the hosts file)
Installation StepsClone this repository:
git clone <repository-url>
cd <repository-folder>Modify your hosts file to add:
127.0.0.1 myexample.comRun the server:
node server.jsOpen your browser and navigate to:http://myexample.com:3000
Challenges EncounteredDuring implementation, some challenges were addressed:
Issues with package management (npm) configuration.
Adapting the solution to work across different operating systems.
Creating a minimal yet effective implementation.
