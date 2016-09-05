<?php

$ownermail 	= 	'varun3089@gmail.com';
$from 		= 	$_POST['email'];
$message 	= 	$_POST['message'];
$name		= 	$_POST['name'];
/*$subject 	= 	$name.' Sent a messgae from the contact form';*/


mail($ownermail/*, $subject*/, $message, "From: $name <$from>\r\n");



// mail to sender

$to = $from;
$message = 'Your e-mail message is on the way to his mailbox';
$subject = 'Mail Sent confirmation';

mail($to, $subject, $message, "From: $name <$ownermail>\r\n");