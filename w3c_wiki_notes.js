// the most accesible way to write an optimized loop
// ---------------------------------------------
var names = ['George','Ringo','Paul','John'];
var j=names.length;
for(var i=0,i<j;i++){
  doSomeThingWith(names[i]);
}


// the shortest way to write an optimized loop
// ---------------------------------------------
var names = ['George','Ringo','Paul','John'];
for(var i=0,j=names.length;i<j;i++){
  doSomeThingWith(names[i]);
}

// Do not build for yourself or the browser — build for the next developer who takes over from you.

// native equivalents to jQuery
// -------------------------------------------------------------------------------------------------------- 
document.querySelector(selector) // $() - fetches the first matching node only
document.getElementById(idname) // $() - fetches a single node by its ID name
document.getElementsByTagName(tagname) // $() - fetches nodes matching an element (e.g. h1, p, strong, etc).
document.getElementsByClassName(class) // $() - fetches nodes with a specific class name

document.getElementById("container").innerHTML += "<p>more content</p>"; // append()
document.getElementById("container").innerHTML = null; // empty()

var c = document.getElementById("container"); c.parentNode.removeChild(c); // remove()

//JQuery Fundamentals 
//-----------------------------------------------------
$( '<p>', {
  html: 'Hello!',
  'class': 'greet'
});// creates the element p with attributes and html content in memory.

$( 'li' ).eq( 0 ).is( '.special' ); // false // determines whether our selection meets a certain criteria
$( 'li' ).eq( 1 ).is( '.special' ); // true

$( 'li' ).html( 'New HTML' ); // changes the html of all the elements with a tag name of 'li' to provided string.
$( 'li' ).html(function( index, oldHtml ) {
  return oldHtml + '!!!'
}); // the above method expanded to accomodate an index variable
