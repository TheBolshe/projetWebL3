$("#capture").toggle();
$("#out").toggle();

function login() {
  $.post("php/login.php", {
    name: prompt("name", "tito")
  });
  $("#capture").toggle();
  $("#in").toggle();
  $("#out").toggle();
}

function logout() {
  $.post("php/logout.php");
  $("#capture").toggle();
  $("#in").toggle();
  $("#out").toggle();
}
