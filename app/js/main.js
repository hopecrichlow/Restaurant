"use strict";

(function () {

  LicenceURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2";

  // *******************CREATING A PROMISE FOR NEWS***************************

  var newsURL = "https://json-data.herokuapp.com/restaurant/news/1";
  var newsPromise = $.getJSON(newsURL);
  newsPromise.then(function (newsobject) {
    // ********TEMPLATE FOR NEWS*************
    var newsTemplate = "\n<h3 class='heading'> Latest News </h3>\n<hr>\n<div class=\"data1\">\n<h3>\"" + newsobject.title + "\"  \"" + newsobject.date_published + "\"</h3>\n<p> \"" + newsobject.post + "\" </p>\n</div>";
    $('#latestNews').append(newsTemplate);
  });

  // ***********APPEND to HTML
})();