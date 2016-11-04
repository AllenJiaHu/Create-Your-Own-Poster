$(document).ready(function(){

swal({
  title: "Insert the title of your band",
  type: "input",
}, function () {
  
var insert = ('');
 	$("h1.answer").html(insert);

});


	// $('h1.answer').text(myAnswer);


// function(inputValue){
//   if (inputValue === false) return false;
  
//   if (inputValue === "") {
//     swal.showInputError("You need to write something!");
//     return false
//   }
  
//   swal("Nice!", "You wrote: " + inputValue, "success");
// });



} );