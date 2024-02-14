// Create web server
// 
// This is a simple web server that listens for requests on port 3000.
// It responds to requests for the /comments endpoint with the contents
// of comments.json.  It responds to all other requests with a 404 Not
// Found error.
//
// To run this server, run the following command:
//   node comments.js
//
// Then, in a web browser, visit http://localhost:3000/comments
//
// You should see the contents of comments.json displayed in the browser.
//
// To stop the server, press Ctrl+C in the terminal window where you
// ran the server.

// Import the http module
var http = require('http');
// Import the fs module
var fs = require('fs');
// Import the path module
var path = require('path');

// Create a server
var server = http.createServer(function(req, res) {
  // If the request is for the /comments endpoint
  if (req.url === '/comments') {
    // Read the contents of comments.json
    fs.readFile('comments.json', function(err, data) {
      // If there was an error reading the file
      if (err) {
        // Respond with a 500 error
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
        return;
      }
      // Respond with the contents of comments.json
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    });
  } else {
    // If the request is for a different endpoint
    // Respond with a 404 error
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

// Start the server
server.listen(3000, function() {
  console.log('Server listening on port 3000');
});
```

The server is listening on port 3000.  If you run the server, then visit http://localhost:3000/comments in a web browser, you should see the contents of comments.json displayed in the browser.

To stop the server, press Ctrl+C in the terminal window where you ran the server.

## Summary

In this tutorial, you learned how to create a simple web server using Node.js.  You learned how to use the http module to create a server that listens for requests on a specific port.  You also learned how to use