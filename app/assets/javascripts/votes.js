$(document).on("ready", function() {
  $("form").on("ajax:success", castVote)
})

var errorHandler = function() {
  $(".notice").show().text("Something went wrong. You've probably cast too many votes for the week.")
}

var castVote = function () {
  var vote_count = $(this).siblings(".voter")
  $.ajax("/song/total", {
    method: "GET",
    data: {
      song_id: $(".voter").data("song-id")
    },
    error: errorHandler,
    success: function (data) {
      vote_count.text(data.total)
    }
  })
}
