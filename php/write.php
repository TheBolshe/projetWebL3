<?php

$path = "../data/test.txt";
$data = $_POST["tata"];
echo gettype($data), "\n";
$file = fopen($path, "w") or die("Unable to open file!");
fwrite($file, $data);


fclose($file);

?>
