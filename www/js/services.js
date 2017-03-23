var app = angular.module('starter.services', []);

//*
app.factory('ContactsService', function($http) {

  // Vars
  var contactsService = this;
  contactsService.contacts = [];

  // Service functions
  contactsService.pushContact = function(contact) {
    var nbContact = contact.length;
    if(nbContact > 0) {
      angular.forEach(contact, function(value, key) {
        contactsService.contacts.push(value);
      })
    }
  }

  contactsService.setAllContacts = function(contacts) {
    contactsService.contacts = contacts;
  }

  contactsService.getAllContacts = function() {
    return contactsService.contacts;
  }

  contactsService.getContact = function(contactId) {
    return contactsService.contacts[contactId];
  }

  contactsService.count = function() {
    return contactsService.contacts.length;
  }

  // Data Access functions
  function fetch(nbItems, page) {
    return $http.get('https://randomuser.me/api?results=' + nbItems + '&page=' + page);
  }

  // Service facade
  return {
    fetch: fetch,
    count: contactsService.count,
    get: contactsService.getContact,
    push: contactsService.pushContact,
    setAll: contactsService.setAllContacts,
    getAll: contactsService.getAllContacts
  }
}) // */

app.factory('LoginService', function($http) {

  var loginService = this;

  // Fake login
  loginService.login = function(email, password) {
    return $http.get('https://randomuser.me/api/?seed=' + email + password);
  }

  // Fake logout -> TODO
  loginService.logout = function() {
    return true;
  }

  // Service facade
  return {
    login: loginService.login,
    logout: loginService.logout
  }
})
