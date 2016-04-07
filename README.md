## Twilio Test with Node.js and Express

### To install dependencies
[code] npm install [/code]

### To run
[code] nodemon app.js [/code]

### How to use
- config.js is where the Twilio tokens are kept, I set the tokens as env variables in my ~./bash-profile
- Add your own cell number to administrators.json
 - (Number must be verified inside Twilio account since this is a trial)
 - Mine is verified
- Add new notification methods to twilioNotifications.js
- Call these methods in app.js

### Link to tutorial
- https://www.twilio.com/docs/tutorials/walkthrough/server-notifications/node/express
