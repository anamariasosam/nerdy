<?php

$errorMSG = "";


// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}


$EmailTo = "anamariasosam@gmail.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>