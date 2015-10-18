(function () { //IIFE01

 LicenseURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2";
"use strict";
// ********CREATING A PROMISE FOR NEWS******** 

let newsURL ="https://json-data.herokuapp.com/restaurant/news/1";
let newsPromise = $.getJSON(newsURL);
newsPromise.then(function(newsobject){ 
  console.log(newsobject);

// ********TEMPLATE FOR NEWS*************
var newsTemplate=`
<h3 class='heading'> Latest News</h3>
<hr>
<div class="data1">
  <div class="content">
      <h3 id="nh1">${newsobject.title} </h3>
      <h3  id="nh2">${newsobject.date_published}</h3>
  </div> //end of content
  <div id="post"><p> ${newsobject.post} </p></div>
</div>`;
$('#latestNews').append(newsTemplate);  // ***********APPEND to HTML
  });
})(); //end of IIFE01

(function () { //IIFE02
// *********CREATING A PROMISE FOR SPECIAL AND ONE FOR MENU

let specialURL ="https://json-data.herokuapp.com/restaurant/special/1";
let menuURL = "https://json-data.herokuapp.com/restaurant/menu/1";

// creating objects to get informations from the url
let menuObj, specialObj;
let menuArr, tempArr;
let special_ID;

// *******************CAPTURING DYNAMIC VALUES OF ID FROM THE URLS***********
let specialPromise = $.getJSON(specialURL).then(function(specialObj){
  special_ID = specialObj.menu_item_id;
  //console.log('special info', special_ID);
}); //end of AJAX 


let menuPromise= $.getJSON(menuURL).then( function (menuObj){
  //console.log(menuObj);
  var temp = menuObj.entrees;      
  //console.log('info of temp',temp); //****[returned array of objects]
for (var i=0;i<temp.length; i++){
  //console.log(temp[i].id);
  // var my_ids= temp[i].id +" " +temp[i].item;
  // console.log(my_ids);

   if (special_ID === temp[i].id){
     // console.log(temp[i].item);
    // // ********TEMPLATE FOR SPECIAL*************
       var specialTemplate=`
      <h3 class="item_id1">${temp[i].item}...................................</h3>
      <h3 class="item_id2">${temp[i].price}</h3>
      <h3 class="item_id3">${temp[i].description}</h3>
      `;
      //console.log(temp[i].description)
      $('#todaySpecial').append(specialTemplate);  // ***********APPEND to HTML
    } //end of IF
} //end of FOR LOOP

}); //end of AJAX

 // <div class="data2">
      // <h3 id="item_id1">${temp[i].item}</h3>
      // <h3 id="item_id2">${temp[i].id}</h3>
      // </div>`
})(); //end of IIFE02
// ****************************************************


(function(){ //IIFE03
//tabbed content
//linked NAV
  $(document).ready(function(){

    $('#fixed ul li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('open');
    $('.tabContent').removeClass('open');

    
    if (tab_id == "tab1") {
      $('#nav1a').addClass('open');
      $("#"+tab_id).addClass('open');
    } 
    else if (tab_id == "tab2"){
      $('#nav2a').addClass('open');
      $("#"+tab_id).addClass('open');}

      else
        $('#nav3a').addClass('open');
        $("#"+tab_id).addClass('open');

  }) //end of EVENT LISTENER for linked NAV
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('open');
    $('.tabContent').removeClass('open');

    $(this).addClass('open');
    $("#"+tab_id).addClass('open');

  }) //end of EVENT LISTENER
})//end of .ready function
//end of tabbed content  
})(); //end of IIFE03

(function(){//IFFE04

//flickr API
var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=365dccc5a182acbc32b9f3b607f26f73&tags=thomas+keller+food+porn&format=json&nojsoncallback=1";

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
console.dir(obj);
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
    // console.dir(slideshow);
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

}()); //end of IIFE04


(function(){ //IIFE05
// get 4-6 photos from flickr to use for the right hand photos  
// get the URL for flickr 
var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=365dccc5a182acbc32b9f3b607f26f73&tags=thomas+keller+food&format=json&nojsoncallback=1";
//AJAX Call
var promise = $.getJSON(url);
// //------------------------------------
  promise.then (function(obj) {

    var images = _.first(obj.photos.photo, [4]);

     _.each(images, function(image){
      console.log(image);
//build a URL according to the API manual
       var flickrURL = "http://farm"+image.farm+".static.flickr.com/"+image.server+"/"+image.id+"_"+image.secret+".jpg";
//build a TEMPLATE to insert into the HTML
    var foodPhoto = `
    <div class="foodPhotos">
    <img src="${ flickrURL }" />
    </div>`;
    // console.dir(slideshow);
    $('#foodPhotosContainer').append(foodPhoto);
    }); //end of _.each
  }); //end of AJAX Call 

})(); //end of IIFE05
