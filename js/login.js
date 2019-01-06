function login() {
  $.post("php/login.php", {
    name: prompt("name", "tito")
  });
}
