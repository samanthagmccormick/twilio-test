var cfg = {};

// Set tokens, I set these up as environment variables on my machine
cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.authToken = process.env.TWILIO_AUTH_TOKEN;
cfg.sendingNumber = process.env.TWILIO_NUMBER;

// These are required
var requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber];

console.log('Account SID: ' + cfg.accountSid);

// Check that each required variable has a value
var isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

// If that returns false, throw an error message
if (!isConfigured) {
  var errorMessage =
    'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.';

  throw new Error(errorMessage);
} else {
  console.log('Twilio tokens are all set up');
}

// Export configuration object
module.exports = cfg;