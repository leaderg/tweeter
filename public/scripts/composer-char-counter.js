$(document).ready(function() {
let i = 0;
$("textarea").keyup(function(){
  i = $(this).val().length;
  let counter = $(this).siblings().last().text(140 - i);
  counter.css((i <= 140) ? {color: "black"} : {color: "red"})
});

//css stylesheet and just add classes

// $("textarea").keyup(function(){
//   i = $(this).val().length;
//   let counter = $(this).siblings().last().text(140 - i);
//   if (i > 140) {
//     counter.css({color: "red"})
//   } else {
//     counter.css({color: "black"})
//   }
// });


});