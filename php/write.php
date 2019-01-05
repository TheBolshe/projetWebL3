<?php

$path = "../data/test.txt";
$file = fopen($path, "w") or die("Unable to open file!");
fwrite($file, "toto");


fclose($file);

?>
