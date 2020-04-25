<?php
    $ip = $_SERVER['REMOTE_ADDR'];

    $id = $_POST['id'];

    $str = file_get_contents('./db_new.txt');
    $arr = unserialize($str);

    if (!array_key_exists( $ip, $arr['user'])) {
        $arr['user'][$ip] = [
            'ip' => $ip,
            'like_list' => [
                $id,
            ]
        ];
    } else {
        if (in_array($id, $arr['user'][$ip]['like_list'])) {
            $response = [
                'code' => 'FAIL',
            ];
            echo json_encode($response);
            return;
        } else {
            $arr['user'][$ip]['like_list'][] = $id;
        }

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





