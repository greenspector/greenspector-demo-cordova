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
  function fetch() {
    return $http.get('https://randomuser.me/api/?seed=gspt&results=30&page=1');
  }

  function fetch(nbItems, page) {
    return $http.get('https://randomuser.me/api?seed=gspt&results=' + nbItems + '&page=' + page);
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
