<?php
header('Access-Control-Allow-Origin: *'); 

require('./connection.php');

$statuses = $connection->get("statuses/user_timeline", ["count" => 25, "list_id" => $user_list_id]);

echo json_encode($statuses);
?>