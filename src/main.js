(function(){

}());

(function () {
//tabbed content
  $(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('open');
    $('.tabContent').removeClass('open');

    $(this).addClass('open');
    $("#"+tab_id).addClass('open');
  })
})
//end of tabbed content  
}());


(function () {
 // LicenseURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2"; 

//flickr API
var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=365dccc5a182acbc32b9f3b607f26f73&tags=expensive+food&format=json&nojsoncallback=1";
//AJAX Call
var promise = $.getJSON(url);
//------------------------------------
  promise.then (function(photos) {
    photoFilter(photos); //send the JSON object to my photoFilter function
    console.dir(photos); //look at the JSON object
  });
 //end of AJAX Call 
//------------------------------------ 
// function for storing and manipulating the flickr object
// use this for LANDING PAGE
var photoFilter = function(obj){
//set a variable for using in the flickrURL
  var images = obj.photos.photo;
// check what images is equal to (array of many objects)
// console.log(images);

//iterate of each
    _.each(images, function(image){
//look at each object in the array
// console.dir(image); 
//build a URL according to the API manual
    var flickrURL = "http://farm"+image.farm+".static.flickr.com/"+image.server+"/"+image.id+"_"+image.secret+".jpg";
//build a TEMPLATE to insert into the HTML
    var slideshow = `
    <div class="slideImage">
    <img src="${ flickrURL }" />
    </div>`;
    console.dir(slideshow);
    $('#enterSlide').append(slideshow);
    $(".slideImage").hide();
    // $('#slideTest').append(slideshow);


    

    });//end of _.each()
}; //end of photoFilter function
 //slideshow 

 // $("#enterSlide div:gt(0)").hide();
 $("#enterSlide div:gt(0)").hide();
 


setInterval(function() { 
  
  $('#enterSlide div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#enterSlide');
},  3000); 
//end of slideshow

}());
//-----------------------------------------



// Group Project
// Key:
// 365dccc5a182acbc32b9f3b607f26f73

// Secret:
// 66c5a2e1caa18608
