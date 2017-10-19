/**
 * Created by 橘子到底酸不酸 on 2017/10/18.
 */
app.factory("baseServer",function($http,$q){
    var factory={
        ajax:function(type,url,data){
            var defer=$q.defer();
            if(type=="JSONP"){
                $.ajax({
                    url:url,
                    type:type,
                    success:function(res){
                        defer.resolve(res);
                    },
                    error:function(error){
                        defer.reject(error);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    method:type||"get",
                    url:url,
                    data:data||null
                }).then(function(data){
                    defer.resolve(data)
                },function(error){
                    defer.reject(error)
                })
            }
            return defer.promise;
        }

    }
    return factory;
})
