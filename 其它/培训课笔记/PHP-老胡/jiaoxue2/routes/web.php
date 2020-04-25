<?php

 return [
     "" => [
        "GET" => "PostController@list",
     ],

     /**
      * 帖子相关
      */
    "posts" => [
        "GET" => "PostController@list", // 获取帖子列表
        "POST" => "PostController@create", // 新建帖子
    ],
    "posts/{id}" => [
        "GET" => "PostController@details", // 获取帖子详情
    ],
    "posts/{id}/like" => [
        "POST" => "PostController@like", // 点赞帖子
    ],

    /**
     * 用户相关
     */
    "login" => [
        "POST" => "UserController@login", // 登录
    ],
    "register" => [
        "POST" => "UserController@register", // 注册
    ],
    "profile" => [
        "GET" => "UserController@profile", // 用户信息
    ],
];
