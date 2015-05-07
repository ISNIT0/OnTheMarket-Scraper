var request = require('sync-request');
var cheerio = require('cheerio');

module.exports = {
  byOutcode:function(outcode, page){
    return JSON.parse(request('GET', "https://mobile-api.onthemarket.com/api/v1/property/search?location-id="+outcode+"&new-home=false&page="+(page||0)+"&search-type=for-sale&under-offer=false", {
      headers:{
        'Api-Token':'8d70de5f-53e9-487d-a511-346a145cf99b'
      }
    }).getBody());
  },
  detail:function(id){
    return JSON.parse(request('GET', "https://mobile-api.onthemarket.com:443/api/v1/property/"+id, {
      headers:{
        'Api-Token':'8d70de5f-53e9-487d-a511-346a145cf99b'
      }
    }).getBody());
  }
};
