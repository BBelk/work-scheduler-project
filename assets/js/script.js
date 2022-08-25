var orderedListEl = $('#ordered-list');

orderedListEl.on('click', '.save-btn', SaveClicked);

function SaveClicked(event){
    var parent = $(event.target).parent().parent().parent().children().eq(1).children().eq(0).val();
    console.log("VALUE IS " + parent);
}

function GiveValue(index){
    orderedListEl.children().eq(index).children().eq(1).children().eq(0).val("Hello world");
}

// GiveValue(2);


var savedStringArray = [];
for(var i = 0; i < )
