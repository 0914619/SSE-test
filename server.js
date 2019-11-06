"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
    });
    var id = 1;
    // Send event every 3 seconds or so forever...
    setInterval(function () {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        var time = hours + ":" + minutes + ":" + seconds;
        //-----------------------------------------------------------------------------------------------------------
        if (id < 6) {
            response.write("event: myEvent\nid: " + id + "\ndata:you are in room A at " + time + "."); //just print the actual time
            response.write('\n\n');
            id++;
        }
        //-----------------------------------------------------------------------------------------------------------
        else if (id < 13) {
            response.write("event: myEvent\nid: " + id + "\ndata:you are in room B at " + time + "."); //just print the actual time
            response.write('\n\n');
            id++;
        }
        //-----------------------------------------------------------------------------------------------------------
        else {
            response.write("id: -1\ndata: you left the house " + time + "\n\n\n");
            response.end();
        }
        //-----------------------------------------------------------------------------------------------------------
    }, 3000);
    // Send an empty message with event ID -1
}).listen(5000);
