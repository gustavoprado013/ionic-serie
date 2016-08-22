// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('mainController', function ($scope, $ionicPopup, $ionicListDelegate) {
  var tasks = new getTasks();

  $scope.list = tasks.items;

  $scope.markTask = function (item) {
    item.status = !item.status;
    tasks.save();
  };

  $scope.completed = false;

  $scope.hideItem = function (item) {
    return item.status && !$scope.completed;
  };

  $scope.showItem = function (item) {
    return !item.status && !$scope.completed;
  };

  function getItem(item, novo) {

    $scope.data = {};

    $scope.data.newTask = item.name;

    $ionicPopup.show({
      title: 'New Task',
      scope: $scope,
      template: '<input type="text" placeholder="Task" autofocus="true" ng-model="data.newTask">',
      buttons: [
        {text: 'Cancel'},
        {text: 'Add', onTap: function (e) {
          item.name = $scope.data.newTask;
          if(novo){
            tasks.add(item);
          }
          tasks.save();
        }}
      ]
    });

    $ionicListDelegate.closeOptionButtons();
  }

  $scope.addItem = function () {
    var item = {name: "", status: false};
    getItem(item, true);
  }

  $scope.editItem = function (item) {
    getItem(item, false);
  };

  $scope.removeItem = function (item) {
    tasks.remove(item);
    tasks.save();
  };

  $scope.removeStatus = false;

  $scope.removeClick = function () {
    $scope.removeStatus = !$scope.removeStatus;
  }
});
