<?php
  session_start();
  $user_path = "../data/recordings/" . $_SESSION["session_name"];
<<<<<<< HEAD
  echo '<div id="text">';
  foreach(glob($user_path . '/*') as $file) {
    echo "<p>$file</p>";
  }
  echo "</div>";
=======
  echo '<div id="text">'
  foreach(glob($user_path . '/*') as $file) {
    echo "<p>$file</p>"
  }
  echo "</div>"
>>>>>>> 6718ee6db86f91dcbfb02d19940ff1622d10701f
?>
