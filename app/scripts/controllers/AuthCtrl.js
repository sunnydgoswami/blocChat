(function() {
    'use strict';

    function AuthCtrl(Auth, $state) {

        this.newUser = newUser;
        this.login = login;

        function newUser() {
            // log out logged in user
            Auth.$unauth();

            Auth.$createUser({
                email: this.email,
                password: this.password
            }).then(function(userData) {
                login();
            }).catch(function(error) {
                this.error = error;
            });
        }

        function saveUser() {
          //save the user data at /users endpoint?
        }

        function login() {
            Auth.$authWithPassword({
                email: this.email,
                password: this.password
            }).then(function(data) {
                this.email = null;
                this.password = null;
                $state.go('status');
            }).catch(function(error) {
                console.log(error);
            });
        }
    }

    angular
        .module('blocChat')
        .controller('AuthCtrl', ['$state', AuthCtrl]);
})();
