var orderedListEl = $('#ordered-list');

orderedListEl.on('click', '.save-btn', SaveClicked);

function SaveClicked(event){
    var clickedThing = $(event.target).parent().parent().parent().children().eq(1).children().eq(0);
    var dataId = clickedThing.attr('data-id');
    // console.log("DATA ID " + dataId);
    var newValue = clickedThing.val();
    // console.log("VALUE IS " + newValue + " " + moment().hour());
    localStorage.setItem(dataId, newValue)
    
}

function GiveValue(index){
    orderedListEl.children().eq(index).children().eq(1).children().eq(0).val("Hello world");
}

GiveValue(9);


var savedStringArray = [];
// for(var i = 0; i < )

$('.inputArea').each(function(){
    var parentId = ($(this).attr('data-id'));
    var name = localStorage.getItem(parentId);
    console.log("GOT ID: " + parentId + " GOT NAME: " + name + " THIS IS: " + this);
    $(this).val(name);
});

var currentDay = $('#currentDay').html("" + moment().format("dddd, MMMM Do"));

var getHour = moment().hour();