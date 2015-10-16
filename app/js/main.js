'use strict';

(function () {
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
  //end of tabbed content
})();

(function () {
  // LicenseURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2";

  //flickr API
  var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=365dccc5a182acbc32b9f3b607f26f73&tags=expensive+food&format=json&nojsoncallback=1";
  //AJAX Call
  var promise = $.getJSON(url);
  // var flickrURL = "http:farm"+data.photos.photo[i].farm+".static.flickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret+".jpg"
  //------------------------------------
  promise.then(function (photos) {
    photoFilter(photos);
  });
  //end of AJAX Call
  //------------------------------------
  // function for storing and manipulating the flickr object
  var photoFilter = function photoFilter(obj) {
    console.log(obj);
    // console.log(obj.photos.photo[0].id);

    _.each(obj, function (item) {
      // console.log(item.photo);
      _.each(item, function (array) {
        console.log(array);
      });
    });
  }; // end of photoFilter
  //Template for inserting a DIV and Images to the HTML
  // var imageInput = function(obj) {
  //  var template = `
  //   <div >
  //      <img src="${}">
  //    </div>  `
  //  }

  // Maxes HINT
  // var photoUrl = "www.flickr.com/${obj.secret}"

  //slideshow
  $("#enterSlide div:gt(0)").hide();

  setInterval(function () {
    $('#enterSlide div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#enterSlide');
  }, 3000);
  //end of slideshow
})();

// Group Project
// Key:
// 365dccc5a182acbc32b9f3b607f26f73

// Secret:
// 66c5a2e1caa18608