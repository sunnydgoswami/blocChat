(function() {
  function UsernameCtrl($uibModalInstance, $cookies) {
    console.log(this.username)

    this.setUsername = function() {
      $cookies.put('blocChatCurrentUser', this.username)
      $uibModalInstance.close();
    }
  };
  console.log("loading");

  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
