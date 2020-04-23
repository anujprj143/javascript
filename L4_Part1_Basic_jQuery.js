//try these codes in console

//used to check whether jQuery is loaded in your file or not
$

//used to grab the h1 tags
$('h1');

// Saving it to variable:
var x = $('h1');


// changing the css properties using variable x:
x.css("color",'red');
x.css("background","blue");


// Multiple CSS properties at once:
//creating object
var newCSS = {
  "color":"white",
  "background":"blue",
  "border":"red"
}
//executing object
x.css(newCSS);


// Grabbing multiple returns an array-like object:
var listItems = $('li');

// Change all items:
listItems.css("color",'red');

// Grab a particular index item:
listItems.eq(0).css('color','blue');

listItems.eq(1).css('color','purple');

// LastItem
listItems.eq(-1).css('background','red');


///////////////////////
/// TEXT and HTML ////
/////////////////////

// Grabbing Text:
$('h1').text()

// Changing Text:
$('h1').text("Brand New Text!")

// Grabbing HTML
$('h1').html()

// Changing HTML
$('h1').html("<em>Now in Italics</em>")



// ATTRIBUTES and VALUES //


// Changing an attribute
$("input").eq(1).attr('type','checkbox');

// Changing values
$("input").eq(0).attr('value',"BRAND NEW VALUE");

// Can do this more directly:
$("input").eq(0).val("cleared up");
