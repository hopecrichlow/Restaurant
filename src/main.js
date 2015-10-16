(function () {

 LicenceURL: "https://api.flickr.com/services/rest/?method=flickr.photos.licenses.getInfo&api_key=cd9871ce6a78cb3e9d4a625e7f7e70c4&format=json&nojsoncallback=1&auth_token=72157659473943268-c7d1bff06042a246&api_sig=9f30153bc5371c42dfe2ba4359865ff2";


// ********CREATING A PROMISE FOR NEWS******** 

let newsURL ="https://json-data.herokuapp.com/restaurant/news/1";
let newsPromise = $.getJSON(newsURL);
newsPromise.then(function(newsobject){
// ********TEMPLATE FOR NEWS*************
var newsTemplate=`
<h3 class='heading'> Latest News </h3>
<hr>
<div class="data1">
<h3 class="nh1">${newsobject.title} </h3>
<h3 class="nh2">${newsobject.date_published}</h3>
<p> "${newsobject.post}" </p>
</div>`;
$('#latestNews').append(newsTemplate);  // ***********APPEND to HTML
});

// *********CREATING A PROMISE FOR SPECIAL 

let specialURL ="https://json-data.herokuapp.com/restaurant/special/1";
let specialPromise = $.getJSON(specialURL);
specialPromise.then(function(specialobject){
// ********TEMPLATE FOR SPECIAL*************
var specialTemplate=`
<h3 class='heading'> Todays Special </h3>
<hr>
<div class="data2">
<h3 class="item_id">${specialobject.menu_item_id}</h3>

</div>`;
$('#todaySpecial').append(specialTemplate);  // ***********APPEND to HTML
});
// <p> "${specialobject.post}" </p> (need to access info from fancymenu)



// // PROMISE FOR MAP
// let newsURL ="https://json-data.herokuapp.com/restaurant/news/1";
// let newsPromise = $.getJSON(newsURL);
// newsPromise.then(function(newsobject){
// // ********TEMPLATE FOR NEWS*************
// var newsTemplate=`
// <h3 class='heading'> Latest News </h3>
// <div class="data1">
// <h3>"${newsobject.title}"  "${newsobject.date_published}"</h3>
// <p> "${newsobject.post}" </p>
// </div>`;
// $('#latestNews').append(newsTemplate);  // ***********APPEND to HTML
// });



}());
