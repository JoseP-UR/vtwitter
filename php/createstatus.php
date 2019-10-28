<?php

    header('Access-Control-Allow-Origin: *'); 
    if (!isset($_POST['content']) || !$_POST['content']) {
        $error = array('error' => 'no content defined');
        die (json_encode($error));
    }
    require('./connection.php');

    $result = $connection->post("statuses/update", ["status" => $_POST['content']]);

    echo(json_encode($result));
?>