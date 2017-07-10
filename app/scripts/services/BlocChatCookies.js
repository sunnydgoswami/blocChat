(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/username.html',
                controller: 'UsernameCtrl as username',
                size: 'sm',
                keyboard: false,
                backdrop: 'static'
            })
        }
    }
console.log("loading");

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
