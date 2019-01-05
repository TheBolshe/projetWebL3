<?php

$path = "../data/test.txt";
$data = "toto";
$file = fopen($path, "w") or die("Unable to open file!");
fwrite($file, $data);


fclose($file);

?>
