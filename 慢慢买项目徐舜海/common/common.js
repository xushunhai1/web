/**
 * Created by Administrator on 2017/6/5.
 */
(function() {
  var Route = function(){
    this.baseUrl = "http://192.168.16.58:9090/"
  }
  Route.prototype={
    constructor:Route,
    getDate:function (callback,url_pi,data) {
      var data = data || {};
      var url = this.baseUrl +"api/"+ url_pi;
      $.get( url, data,function( res ) {
        callback && callback( res );
      }, 'json');
    },
    query:function(url){
      var obj = {};
      // 解析字符串 进行拼接 成 对象
      var str = url.split('?')[1];
      // 在进行切割
      var arr = str.split('&');
      arr.forEach( function( value, index ) {
        var arrObj = value.split( "=" );
        var key = arrObj[ 0 ];
        var value = arrObj[ 1 ];
        // 将对象的键值对 添加到对象中
        obj[ key ] = value;
      })
      return obj;
    }
  }

  window.Route = Route;
})()

