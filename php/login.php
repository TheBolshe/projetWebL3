<<?php
  session_start();
  $_SESSION["session_name"] = $_POST["name"];
  $session_folder = "../data/recordings/" . $_SESSION["session_name"];
  if (file_exists($session_folder) && is_dir($session_folder)) {

  }else{
    mkdir($session_folder, 0777);
  }
?>
