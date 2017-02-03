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
      showBackDrop: false,
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
      $ionicLoading.hide();
      showingSpinner = false;
    }, function(error){
      console.log('error:', error);
    })
    .finally(function(){
      vm.$broadcast('scroll.infiniteScrollComplete');
    });
  }

})

.controller('ContactDetailCtrl', function($scope, $stateParams, ContactsService) {
  var vm = $scope;
  vm.contact = ContactsService.get($stateParams.contactId);
})
