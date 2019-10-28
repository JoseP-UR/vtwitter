<?php
    header('Access-Control-Allow-Origin: *'); 


    if (!isset($_GET['id']) || !$_GET['id']) {
        $data = array('error' => 'no id found');
        die (json_encode($data));
    }
    

    require('./connection.php');

    $result = $connection->post("statuses/destroy", ["id" => $_GET['id']]);

    echo json_encode($result)
?>