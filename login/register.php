<?php
// Database connection
$servername = "localhost";
$username = "u157699425_register_form";
$password = "Paradox@code20";
$dbname = "u157699425_register_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $pass = $_POST['password'];
    $confirm_pass = $_POST['confirm_password'];
    
    // Check if passwords match
    if ($pass != $confirm_pass) {
        die("Passwords do not match.");
    }

    // Hash the password for security
    $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

    // Insert into the database
    $sql = "INSERT INTO users (username, email, phone, password) VALUES ('$user', '$email', '$phone', '$hashed_pass')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
