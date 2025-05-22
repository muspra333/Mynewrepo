<?php
$servername = "localhost";  // Database server (replace with your server address)
$username = "root";         // Your database username
$password = "";             // Your database password
$dbname = "user_auth";      // Your database name

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
