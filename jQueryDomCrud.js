
// The Below is the jQuery Wrapper
$( document ).ready(function(){
// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
let newA = $("<a>");
newA.text("Buy Now!");
newA.attr("id", "cta");
console.log(newA);

$('main').append(newA);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imgColor = $("img").attr('data-color');
console.log(imgColor);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const listItems = $("li").eq(2).attr('class','highlight');


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$('p').remove();
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$("#cta").on('click', function(e){
    // Input STuff Here. 
    $("#cta").text('Added to Cart');
})
});