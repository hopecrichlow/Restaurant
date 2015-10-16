'use strict';

(function () {

  console.log('It Works!');

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

  LicenseURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2";

  // api_key: '34feffaacaaae2381e9612ed289f9683',
})();