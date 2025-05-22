<?php
session_start();

$servername = "localhost";  // Database server (replace with your server address)
$username = "u157699425_register_form";         // Your database username
$password = "Paradox@code20";             // Your database password
$dbname = "u157699425_register_form";      // Your database name

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    // Get username/email and password from POST request
    $usernameoremail = htmlspecialchars($_POST['usernameoremail']);
    $password = $_POST['password'];

    // Validate input (make sure fields are not empty)
    if (!empty($usernameoremail) && !empty($password)) {
        // Prepare SQL to select user by either username or email
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :usernameoremail OR email = :usernameoremail");
        $stmt->bindParam(':usernameoremail', $usernameoremail);
        $stmt->execute();

        // Fetch user data
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            // Start the session and store the username/email
            $_SESSION['username'] = $user['username'];
            echo "Login successful! Welcome " . $_SESSION['username'];

            // Redirect to a protected page (e.g., dashboard.php)
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Incorrect username, email, or password.";
        }
    } else {
        echo "Please fill in all fields.";
    }
}
?>
