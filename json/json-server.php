<?php
$animalObj->name = "American Bison";
$animalObj->pop = 1500;
$animalObj->region = "Custer State Park, South Dakota";
$animalObj->image ="assets/bison.jpg";
$animalJSON = json_encode($animalObj);
echo $animalJSON;
?>