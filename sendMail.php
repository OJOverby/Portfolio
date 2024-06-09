<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From: " . $name . "<" . $email . ">\r\n";

$mailto = "mail@olejorgen.no";

if (mail($mailto, $subject, $message, $mailheader)) {
    echo '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: hsl(248, 100%, 6%); color: white;">';
    echo '<h2>Email sent successfully</h2>';
    echo '</div>';
} else {
    echo '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: black; color: white;">';
    echo '<h2>Sorry, there was an error sending the email</h2>';
    echo '</div>';
}

echo '<script>setTimeout(function(){ window.location.href = "index.html"; }, 3000);</script>';
?>