<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From: " . $name . "<" . $email . ">\r\n";

$mailto = "quezt@outlook.com";

if (mail($mailto, $subject, $message, $mailheader)) {
    echo 'Sent mail';
} else {
    die("Error sending mail");
}
?>