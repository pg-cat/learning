<?php
    session_start();

    if (!isset($_SESSION['user'])) {
        $response = [
            'code' => 'FAIL',
        ];
        echo json_encode($response);
        return;
    }

    $user = $_SESSION['user'];

    $id = $_POST['id'];

    $str = file_get_contents('./db_new.txt');
    $arr = unserialize($str);

    
    if (in_array($id, $user['like_list'])) {
        $response = [
            'code' => 'FAIL',
        ];
        echo json_encode($response);
        return;
    } else {
        $user['like_list'][] = $id;
    }

    

    $arr['posts'][$id]['like_num'] += 1;

    file_put_contents('./db_new.txt', serialize($arr));

    $response = [
        'code' => 'SUCCESS',
        'data' => [
            'like_num' => $arr['posts'][$id]['like_num']
        ],
    ];
    echo json_encode($response);





