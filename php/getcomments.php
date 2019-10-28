<?php
    header('Access-Control-Allow-Origin: *'); 


    if (!isset($_GET['id']) || !$_GET['id']) {
        $data = array('error' => 'no id found');
        die (json_encode($data));
    }
    

    require('./connection.php');
    $comments = array();
    $result = $connection->get("statuses/mentions_timeline", ["since_id" => $_GET['id']]);
    foreach ($result as $tweet) {
        if($tweet->in_reply_to_status_id_str == $_GET["id"]) {
            array_push($comments, $tweet);
        }
    }
    echo json_encode($comments)
?>