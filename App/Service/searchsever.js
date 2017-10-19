/**
 * Created by 12345 on 2017/10/13.
 */
app.factory('searchsever',['baserServer', function (baserServer) {
    var factory={
        gets: function (type, url) {
            return baserServer.getts(type,url);

        }
    };
    return factory;
}])