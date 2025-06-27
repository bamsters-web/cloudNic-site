<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "info@cloudnic.co.uk";
  $subject = "CloudNic Contact: " . $_POST["subject"];
  $body = "Name: " . $_POST["name"] . "\n";
  $body .= "Email: " . $_POST["email"] . "\n\n";
  $body .= "Message:\n" . $_POST["message"];

  $headers = "From: " . $_POST["email"];

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>
