<?php

// prevent going to php page directly without supplying required form data
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
  echo "<h1>Error</h1>\n
     <p>Accessing this page directly is not allowed.</p>";
  exit;
}

// sanitize inputs
$unsanitizedName = htmlspecialchars($_POST['name']);
$name = filter_var($unsanitizedName, FILTER_SANITIZE_STRING);

$unsanitizedEmail  = htmlspecialchars($_POST['email']);
$email = filter_var($unsanitizedEmail, FILTER_SANITIZE_EMAIL);

$unsanitizedMessage = htmlspecialchars($_POST['message']);
$message = filter_var($unsanitizedMessage, FILTER_SANITIZE_STRING);

// prevent meta/header injection
$email = preg_replace("([\r\n])", "", $email);
$find = "/(content-type|bcc:|cc:)/i";
if (preg_match($find, $name) || preg_match($find, $email) || preg_match($find, $url) || preg_match($find, $comments)) {
  echo "<h1>Error</h1>\n
     <p>No meta/header injections, please.</p>";
  exit;
}

// target email address
$to = "webmaster@biologyofskinfoundation.org";
$subject = "Donate Form Submission";

// compose headers
$headers = "From: info@biologyofskinfoundation.org\r\n";
$headers .= "Reply-To: info@biologyofskinfoundation.org\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

// compose message
$finalMessage = "
  <html>
  <body>
  <h1>Donate Form Submission</h1>
  <h4>Name</h4><p>".$name."</p>
  <h4>Email</h4><p>".$email."</p>
  <h4>Message</h4><p>".$message."</p>
  </body>
  </html>
";

// send email
mail($to, $subject, $finalMessage, $headers);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
</head>
<body>
    <h1>Thank You</h1>
    <p>Here is the information you have submitted:</p>
    <ol>
        <li><em>Name:</em> <?php echo $name?></li>
        <li><em>Email:</em> <?php echo $email?></li>
        <li><em>Message:</em> <?php echo $message?></li>
    </ol>
</body>
</html>