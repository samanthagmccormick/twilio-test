var twilioClient = require('../twilioClient');
var fs = require('fs');
// The recipients of the texts
var admins = require('../config/administrators.json');

/*
  Put all your SMS notifications here :)
*/

exports.sayHi = function(req, res) {
  console.log('sayHi()');
  
  // Loop through each administrator in the JSON
  admins.forEach(function(admin) {
    // Use twilioClient to send an SMS message to the admin's phone number
    twilioClient.sendSms(admin.phoneNumber, 'hi!!');
  });

};

exports.hiChris = function(req, res) {
  console.log('hiChris()');
  
  // Loop through the admins to find Chris
  admins.forEach(function(admin) {
    if (admin.name === 'Chris Cell') {
      console.log('found Chris');
      // Use twilioClient to send an SMS message to the admin's phone number
      twilioClient.sendSms(admin.phoneNumber, 'hi Chris, when will you be home? Teehee love Sam');
    }
  });
};
