<?php

require_once("db.php"); 

$FIO = $_POST['fio']; 
$Email = $_POST['email'];
$PhoneNumber = $_POST['phoneNumber'];
$Product = $_POST['Product'];




$sql = "INSERT INTO `Calls` (FIO, Email, PhoneNumber, Product) 
    VALUES ('$FIO', '$Email', '$PhoneNumber', '$Product')";

$connect -> query($sql);
















