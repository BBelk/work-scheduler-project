var orderedListEl = $('#ordered-list');

orderedListEl.on('click', '.save-btn', SaveClicked);

var grayColor = "#D1D1D1";
var redColor = "#E28C8C";
var greenColor = "#83EA8A";  

function SaveClicked(event){
    var clickedThing = $(event.target).parent().parent().parent().children().eq(1).children().eq(0);
    var dataId = clickedThing.attr('data-id');
    var newValue = clickedThing.val();
    localStorage.setItem(dataId, newValue)
    
}

var currentDay = $('#currentDay').html("" + moment().format("dddd, MMMM Do"));

var getHour = moment().hour();
// var getHour = 12; testing


$('.inputArea').each(function(){
    var parentId = ($(this).attr('data-id'));
    var name = localStorage.getItem(parentId);

    $(this).val(name);

    if(parentId < getHour){$(this).css("background-color", grayColor);}
    if(parentId == getHour){$(this).css("background-color", redColor);}
    if(parentId > getHour){$(this).css("background-color", greenColor);}
});

