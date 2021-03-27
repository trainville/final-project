const accountSid = process.env.TWILIO_APP_ID
const authToken = process.env.TWILIO_APP_TOKEN
const client = require('twilio')(accountSid, authToken);

let twilioController = {

    makeCall: (req, twilioMessage) => {
        client.messages
        .create({
            body: twilioMessage,
            from:  process.env.TWILIO_FROM_NUMBER,
            to: req.body.phone
        })
        .then(message => console.log(message.sid));
    }
}

module.exports = twilioController;