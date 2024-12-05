<?php 

$servername = "lego"; // Имя проекта в папке
$username = "root"; // по дефолту root
$password = ""; // Пароль так ставишь
$dbname = "RegOfCall"; // Как создашь бд, введи сюда её название

$connect = mysqli_connect($servername, $username, $password, $dbname); // Коннект к бд

if (!$connect) {
    die("Неудачная попытка отправки запроса". mysqli_connect_error()); // Условия неудачного подключения
} else {
    header("Location: reg.html"); // Удачное подключение + перекинет на переходную страницу 
} 