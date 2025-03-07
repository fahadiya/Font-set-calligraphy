<?php
session_start();
$errorUser = $errorPass = $matchError = "";

// Database Connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "mydb";
$port = 3333;

$conn = new mysqli($servername, $username, $password, $database, $port);

// Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username)) {
        echo "<script>alert('Username is required!');</script>";
    }
    if (empty($password)) {
        echo "<script>alert('Password is required!');</script>";
    }
    
    if (!empty($username) && !empty($password)) {
        // Check if user exists in the database
        $sql = "SELECT Name, Password FROM signup WHERE Name = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($dbUser, $dbPass);
            $stmt->fetch();

            // Verify the password
            if (password_verify($password, $dbPass)) {
                $_SESSION['username'] = $dbUser;
                echo "<script>alert('Login successful! Redirecting to homepage...'); window.location.href='index.php';</script>";
                exit();
            } else {
                echo "<script>alert('Invalid password!');</script>";
            }
        } else {
            echo "<script>alert('Username not found! Please sign up first.');</script>";
        }
        $stmt->close();
    }
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="CSS/login.css">
    <title>Login</title>
</head>
<body>
    <div id="form">
        <h1>Login</h1>
        <form method="POST" action="">
            <div class="styleerror">
                <label>Username</label>
                <br>
                <input type="text" name="username" id="user" placeholder="Enter username" value="<?php echo htmlspecialchars($username ?? ''); ?>">
                <span class="errors"><?php echo $errorUser; ?></span>
            </div>
            <br>
            <div class="styleerror">
                <label>Password</label>
                <br>
                <input type="password" name="password" id="pass" placeholder="Password">
                <span class="errors"><?php echo $errorPass; ?></span>
            </div>
            <br>
            <button type="submit">Login</button>
            <span class="errors"><?php echo $matchError; ?></span>
        </form>
    </div>
</body>
</html>
