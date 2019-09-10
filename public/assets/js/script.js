$(document).ready(function() {
  $('#submit').on('click', function(event) {
  event.preventDefault();
  var newBurger = {
      burger_name: $('#newBurgerName').val().trim(),
  };
  $.post("/api/burgers", newBurger, function(data) {
      location.reload();
  });
});
});

function update(id) {
var updateState = {
  devoured: true
};
$.ajax('/api/burgers/' + id, {
  type: "PUT",
  data: updateState
}).then(
  function() {
    location.reload();
  }
);
}