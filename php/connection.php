<?php 
require "vendor/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

define('ACCESS_TOKEN', '%%%%%%%%%');
define('ACCESS_TOKEN_SECRET', '%%%%%%%%%%%%%');
$consumer_key = '%%%%%%%%%%';
$consumer_secret = '%%%%%%%%%%%%%%%%';

$user_list_id = 1186480204669161473;

$connection = new TwitterOAuth($consumer_key, $consumer_secret, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

$connection->setTimeouts(15,15);
?>