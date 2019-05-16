/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

function createTweetElement(tweetObj) {

  let avatar = tweetObj.user.avatars.small
  let name = tweetObj.user.name
  let handle = tweetObj.user.handle;
  let content = tweetObj.content.text
  let timestamp = tweetObj.created_at

  let $tweet = $("<article>").addClass("tweet");
  let $img = $("<img>").addClass("logo").attr("src", avatar);
  let $h1 = $("<h1>").addClass("name").text(name);
  let $span = $("<span>").addClass("user").text(handle);
  let $div = $("<div>").addClass("header").append($img).append($h1).append($span);

  let $content = $("<div>").addClass("content").text(content);

  let $hr = $("<hr>");
  let $footer = $("<footer>").addClass("footer").text(timestamp);

  $tweet = $tweet.append($div).append($content).append($hr).append($footer);
  console.log($tweet);
  return $tweet;
}

function renderTweets(tweetDb) {
  for(let tweet in tweetDb) {
    $(".tweetbox").append(createTweetElement(tweetDb[tweet]));
  }
}

function reloadTweets() {
  $(".tweetbox").empty();
  $.getJSON("/tweets", function(data) {
    renderTweets(data);
  });
}

$(".tweetForm").submit(function (event) {
  event.preventDefault();
  if ($('textarea').val().length <= 140) {
    let $form = $(this),
    tweet = $form.find("textarea[name='text']").val(),
    url = $form.attr("action");
    $.post(url, {text: tweet}).done(data => {
      $("textarea").val("").trigger('keyup');
      reloadTweets();
    });
    } else {
      $("#error").show();
    }
});

$(".composebutton").click(function () {
  $(".new-tweet").slideToggle("slow", function() {
    if ($(".new-tweet").is(":visible")) {
      $("textarea[name='text']").focus();
    }
  });
});

// $("#error").hide();

$(".error-ok").click(function() {
  $("#error").hide();
});

reloadTweets();

});