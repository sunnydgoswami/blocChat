(function() {
    'use strict';

    function AuthService($firebaseAuth) {
        var ref = new Firebase("https://bloc-chat-9225d.firebaseapp.com");
        return $firebaseAuth(ref);
    }

    angular
        .module('blocChat')
        .factory('Auth', ['$firebaseAuth', AuthService]);
})();
