## Listening for sockets connections

### Questions

1. What are networked services?
2. Network services exist to do two things: connect endpoints and transmit information between them. No matter what kind og information is trasmitted a connection must first be made.

## Binding a Server to a TCP Port

TCP socket connections consist of two endpoints. One endpoint binds to a numbered port while the other endpoint connects to a port.

Any number of clients, which may or may not be node.js processes, can connect to that bound port.

In Node.js, the bind and connect operations are provided by the net module.Binding a TCP port to listen for connections looks likw this:

```bash
'use strict';

const net =
    require('net'),
    server= net.createServer(connection => {
        // use the connection object to transfer data
    });

server.listen(60300)
```

## Writing data to a socket

Write info to the client using connection.write

## Implementing a Messaging Protocol
