$(document).on("ready", function() {
  $("button").on("click", castVote)
})

var errorHandler = function() {
  $(".notice").show().text("Something went wrong. You've probably cast too many votes for the week.")
}

var castVote = function () {
  $.ajax("/", {
    method: "GET",
    error: errorHandler,
    success: alert('success!')
    // success: $(".voter").load("/vote .voter > *")
  })
}
