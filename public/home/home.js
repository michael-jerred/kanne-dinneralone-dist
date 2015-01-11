/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var App;
(function (App) {
    (function (Home) {
        var module = angular.module('app.home', ['ngRoute']);
        module.controller('homeCtrl', Controller);
        module.config([
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/', {
                    controller: Controller,
                    controllerAs: 'home',
                    templateUrl: 'home/home.html'
                });
            }]);

        var Controller = (function () {
            function Controller() {
                this.test = 'working!';
            }
            return Controller;
        })();
    })(App.Home || (App.Home = {}));
    var Home = App.Home;
})(App || (App = {}));
//# sourceMappingURL=home.js.map
