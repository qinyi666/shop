/**
 * Created by 橘子到底酸不酸 on 2017/10/18.
 */
app.directive('shopcar', function () {
    return {
        restrict:'EA',
        scope:{
            item:'=item',
            index:'@index'
        },
        templateUrl:'App/View/temp/shop.html',
        controller:'shopItemController'
    }
});