/**
 * Created by 12345 on 2017/10/13.
 */
app.factory('baserServer',['$http','$q',function ($http,$q) {
    var factory={
        getts: function (type, url, data) {
            var defer=$q.defer();
            if(type=='JSONP'){
                $.ajax({
                    url:url,
                    dataType:'jsonp',
                    success: function (res) {
                        defer.resolve(res);
                    },error: function (err) {
                        defer.reject(err);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    method:type||'get',
                    url:url,
                    data:data||null
                }).success(function (data) {
                    defer.resolve(data);
                }).error(function (error) {
                    defer.reject(error);
                })
            }
            return defer.promise;
        }
    };

    return factory;

}]);
