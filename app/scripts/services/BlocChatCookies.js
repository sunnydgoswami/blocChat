(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/username.html',
                size: 'sm',
                controller: 'UsernameCtrl as username',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }
console.log("loading");
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
