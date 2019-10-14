<?php

// prevent going to php page directly without supplying required form data
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
  echo "<h1>Error</h1>\n
     <p>Accessing this page directly is not allowed.</p>";
  exit;
}

// check reCAPTCHA 2

function isValid() 
{
    try {
        include 'secrets.php';
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = ['secret'   => $secretRecaptchaKey,
                 'response' => $_POST['g-recaptcha-response'],
                 'remoteip' => $_SERVER['REMOTE_ADDR']];

        $options = [
            'http' => [
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data) 
            ]
        ];

        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return json_decode($result)->success;
    }
    catch (Exception $e) {
        return null;
    }
}

if(!isValid()) {
  echo "<h1>Error</h1>\n
  <p>reCAPTCHA verification failed. Please make sure to check the 'I'm not a robot' box and resubmit form again.</p>\n
  <button><a href='donate_form.html'>Back</a></button>";

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
$success = mail($to, $subject, $finalMessage, $headers);

// go to Paypal

if ($success == 1) {
  $paypalUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6MPTTY4GX3UGL&source=url';
  header( "Location: $paypalUrl" ); 
} else {
  echo "<h1>Error</h1>\n
     <p>Information not sent successfully. Please email info@biologyofskinfoundation.org to complete your donation instead.</p>";
  exit;
}
?>