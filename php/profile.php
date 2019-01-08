<?php
  session_start();
  $user_path = "../data/recordings/" . $_SESSION["session_name"];
  echo '<div id="text">';
  foreach(glob($user_path . '/*') as $file) {
    echo "<p>$file</p>";
  }
  echo "</div>";
?>
