"use strict";

(function () {

  LicenseURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2";

  // ********CREATING A PROMISE FOR NEWS********

  var newsURL = "https://json-data.herokuapp.com/restaurant/news/1";
  var newsPromise = $.getJSON(newsURL);
  newsPromise.then(function (newsobject) {
    // console.log(newsobject);

    // ********TEMPLATE FOR NEWS*************
    var newsTemplate = "\n<h3 class='heading'> Latest News</h3>\n<hr>\n<div class=\"data1\">\n  <div class=\"content\">\n      <h3 id=\"nh1\">" + newsobject.title + " </h3>\n      <h3  id=\"nh2\">" + newsobject.date_published + "</h3>\n  </div>\n  <p> " + newsobject.post + " </p>\n</div>";
    $('#latestNews').append(newsTemplate); // ***********APPEND to HTML
  });

  // *********CREATING A PROMISE FOR SPECIAL AND ONE FOR MENU

  var specialURL = "https://json-data.herokuapp.com/restaurant/special/1";
  var menuURL = "https://json-data.herokuapp.com/restaurant/menu/1";

  // creating objects to get informations from the url
  var menuObj = undefined,
      specialObj = undefined;
  var menuArr = undefined,
      tempArr = undefined;
  var special_ID = undefined;

  // *******************CAPTURING DYNAMIC VALUES OF ID FROM THE URLS***********
  var specialPromise = $.getJSON(specialURL).then(function (specialObj) {
    special_ID = specialObj.menu_item_id;
    //console.log('special info', special_ID);
  });

  var menuPromise = $.getJSON(menuURL).then(function (menuObj) {
    //console.log(menuObj);
    var temp = menuObj.entrees;
    //console.log('info of temp',temp); //****[returned array of objects]
    for (var i = 0; i < temp.length; i++) {
      //console.log(temp[i].id);
      // var my_ids= temp[i].id +" " +temp[i].item;
      // console.log(my_ids);

      if (special_ID === temp[i].id) {
        // console.log(temp[i].item);
        // // ********TEMPLATE FOR SPECIAL*************
        var specialTemplate = "\n      <div class=\"data2\">\n      <h3 id=\"item_id1\">" + temp[i].item + "</h3>\n      <h3 id=\"item_id2\">" + temp[i].id + "</h3>\n      </div>";

        $('#todaySpecial').append(specialTemplate); // ***********APPEND to HTML
      }
    }
  });

  // ****************************************************

  //tabbed content
  $(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('open');
      $('.tabContent').removeClass('open');

      $(this).addClass('open');
      $("#" + tab_id).addClass('open');
    });
  });

  //FOOD PHOTOS

  // var templateString = $('#itemTemplate').text();

  // var templateFunction = _.template(templateString);

  // let url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=34feffaacaaae2381e9612ed289f9683&tags=expensive+food&format=json&nojsoncallback=1';

  // $.ajax({
  //   url: url,
  //   dataType: 'jsonp',
  //   method: 'get'
  // }).then (function (response) {

  // _.each(response.results, function (item) {
  //     var itemHTML = templateFunction(item);
  //     $('.graphics').append(itemHTML);

  //   // console.log(response);

  // });
})();