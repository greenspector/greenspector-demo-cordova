angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, $stateParams, $ionicLoading, $timeout, ContactsService) {

  var showingSpinner = false;
  var vm = $scope;
  vm.contacts;
  vm.page = 0;
  vm.pageEnd = false;
  vm.pageSize = 30;

  if(!showingSpinner) {
    showingSpinner = true;
    $ionicLoading.show({
      template: '<ion-spinner class="spinner-light" icon="bubbles" name="circles"></ion-spinner>',
      content: 'Loading...',
      animation: 'fade-in',
      showBackDrop: true,
      maxWidth: 300,
      showDelay:0
    })
  }

  vm.loadMoreContacts = function() {
    vm.page++;
    ContactsService
    .fetch(vm.pageSize, vm.page)
    .then(function(success){
      ContactsService.push(success.data.results);
      vm.contacts = ContactsService.getAll();
    }, function(error){
      //AlertPopupCtrl.showAlert(error);
      console.error('Oups! Something went wrong', error);
    })
    .finally(function(){
      $ionicLoading.hide();
      showingSpinner = false;
      vm.$broadcast('scroll.infiniteScrollComplete');
    });
  }

})

.controller('ContactDetailCtrl', function($scope, $stateParams, ContactsService) {
  var vm = $scope;
  vm.contact = ContactsService.get($stateParams.contactId);
})

.controller('LoginCtrl', function($scope, $stateParams, $state, LoginService) {
  var vm = $scope;
  vm.data = {};

  vm.login = function() {
    LoginService.login(vm.data.email, vm.data.password);
    setInterval(function() {
      $state.go('tab.contacts');
    }, 2500);
  }
})

.controller('SideMenuCtrl', function($scope, $ionicSideMenuDelegate, $timeout){
  var vm = $scope;

  $scope.toggleLeft = function() {
    console.log("$ionicSideMenuDelegate.toggleLeft");
    $ionicSideMenuDelegate.toggleLeft();
  };
})

/*
.controller('AlertPopupCtrl', function($scope, $ionicPopup, $timeout){
  var vm = $scope;

  vm.showAlert = function(message) {
    var alertPopup = $ionicPopup.alert({
      title: 'Oups, Something went wrong',
      template: message
    });
  }
}) // */
