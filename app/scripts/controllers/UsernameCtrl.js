(function() {
  function UsernameCtrl($uibModalInstance, $cookies) {

    this.setUsername = function() {
      $cookies.put('blocChatCurrentUser', this.username)
      $uibModalInstance.close();
    }
  };
  console.log(this.username);
  console.log("loading");

    // $scope.authObj.$removeUser({
    //     username:
    // })
    // create buttom called remove user use ng click directive when clicked user name
    // will be deleted and username modal should reappear or screen should reload causing
    //there to be no saved username and have t he username modal appear.
    // another option is create a full login area with username and password entry


  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
