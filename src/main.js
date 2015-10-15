(function () {

  console.log('It Works!');




  $(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('open');
    $('.tabContent').removeClass('open');

    $(this).addClass('open');
    $("#"+tab_id).addClass('open');
  })

})

}());
