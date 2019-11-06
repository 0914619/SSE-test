// Declare an EventSource
const eventSource = new EventSource('http://localhost:5000');

// Handler for events without an event type specified
eventSource.onmessage = (e) => {
    if (e.lastEventId === '-1') {
        // This is the end of the stream
        eventSource.close();
    } else {
        console.log(e.data);
        // Process message that isn't the end of the stream...
    }
};
eventSource.addEventListener('ping', (e) => {
    // Do something - event data will be in e.data,
    // message will be of type 'ping'

});