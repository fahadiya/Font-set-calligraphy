<?php
session_start();
session_unset(); // Unset all session variables
session_destroy(); // Destroy the session
echo "<script>
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.php';
    } else {
        window.location.href = 'dashboard.php'; // Redirect back if canceled
    }
</script>";
exit();
?>
