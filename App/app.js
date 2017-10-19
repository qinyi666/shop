/**
 * Created by 橘子到底酸不酸 on 2017/10/18.
 */
var app = angular.module("app", ["ui.router"]);


app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('shop', {
        url: "/shop",
        templateUrl: "App/View/shops.html",
        controller: "shopController"
    });
    $urlRouterProvider.otherwise("/shop");
});