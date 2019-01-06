<?php
$path = "../data/" . $_POST["name"] . ".json";
//echo gettype($data), "\n";
$file = fopen($path, "w") or die("Unable to open file!");
fwrite($file, $_POST["data"]);


fclose($file);

?>
