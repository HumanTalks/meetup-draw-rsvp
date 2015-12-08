var Url = (function(){
  return {
    getUrlParams: getUrlParams,
    getUrlParam: getUrlParam
  };

  function getUrlParam(name){
    return getUrlParams()[name];
  }
  function getUrlParams(){
    var results = {};
    var params = window.location.search.substring(1).split('&');
    for(var i in params){
      var arr = params[i].split('=');
      results[arr[0]] = arr[1];
    }
    return results;
  }
})();
