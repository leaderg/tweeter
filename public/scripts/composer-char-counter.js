$(document).ready(function() {
let i = 0;
$("textarea").keyup(function(){
  i = $(this).val().length;
  let counter = $(this).siblings().last().text(140 - i);
  counter.css((i <= 140) ? {color: "black"} : {color: "red"})
});

});