<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "mydb";
$port = 3333;
$conn = new mysqli($servername, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = trim($_POST['user']);
    $email = trim($_POST['email']);
    $pass = trim($_POST['pass']);
    $cpass = trim($_POST['cpass']);

    // Validation
    if (empty($user) || empty($email) || empty($pass) || empty($cpass)) {
        echo "<script>alert('All fields are required!');</script>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format!');</script>";
    } elseif ($pass !== $cpass) {
        echo "<script>alert('Passwords do not match!');</script>";
    } else {
        // Check if username or email already exists
        $check_sql = "SELECT * FROM signup WHERE Name = ? OR Email = ?";
        $stmt = $conn->prepare($check_sql);
        $stmt->bind_param("ss", $user, $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            // Username or email already exists
            echo "<script>alert('Username or Email already exists! Redirecting to login page...'); window.location.href='login.php';</script>";
            exit();
        } else {
            // Hash password
            $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

            // Insert into database
            $insert_sql = "INSERT INTO signup (Name, Email, Password) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($insert_sql);
            $stmt->bind_param("sss", $user, $email, $hashed_password);

            if ($stmt->execute()) {
                echo "<script>alert('Signup successful! Redirecting to homepage...'); window.location.href='index.html';</script>";
                exit();
            } else {
                echo "<script>alert('Error: " . $conn->error . "');</script>";
            }
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
    <link rel="stylesheet" href="CSS/signup.css">
    <title>SignUp Form</title>
</head>
<body>
    <div id="form">
        <h1>SignUp Form</h1>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
        <form action="" method="POST">
            <div class="styleerror">
                <i class="fa-solid fa-user"></i>
                <input type="text" name="user" placeholder="Enter username">
            </div>
            <br>
            <div class="styleerror">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" name="email" placeholder="Enter Email">
            </div>
            <br>
            <div class="styleerror">
                <i class="fa-solid fa-lock"></i>
                <input type="password" name="pass" placeholder="Create Password">
            </div>
            <br>
            <div class="styleerror">
                <i class="fa-solid fa-lock"></i>
                <input type="password" name="cpass" placeholder="Confirm Password">
            </div>
            <br>
            <button type="submit">SignUp</button>
            <br>
            <p class="aldy-ac">Already have an account? <a class="login" href="login.php">Login</a></p>
        </form>
    </div>
</body>
</html>
