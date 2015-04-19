var request = require('sync-request');
var cheerio = require('cheerio');

module.exports = {
  byOutcode:function(outcode, page){
    return JSON.parse(request('GET', "https://mobile-api.onthemarket.com/api/v1/property/search?location-id="+outcode+"&new-home=false&page="+(page||0)+"&search-type=for-sale&under-offer=false", {
      headers:{
        'Api-Token':'923f89e2-cddc-4c56-999d-2fd1e4a8e5de'
      }
    }).getBody());
  },
  detail:function(id){
    return JSON.parse(request('GET', "https://mobile-api.onthemarket.com:443/api/v1/property/"+id, {
      headers:{
        'Api-Token':'923f89e2-cddc-4c56-999d-2fd1e4a8e5de'
      }
    }).getBody());
  }
};
