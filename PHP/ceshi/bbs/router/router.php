<?php

return [

    // 网站首页
    "" => [
        "GET" => "PostController@list"
    ],

    // 帖子列表
    "posts" => [
        "GET" => "PostController@list",
    ],

    // 发帖
    "posts/say" => [
        "GET" => "PostController@sayGet",
        "POST" => "PostController@say"
    ],

    // 帖子详情
    "posts/details/{id}" => [
        "GET" => "PostController@details",
        "POST" => "PostController@detailsSay"
    ],

    // 用户注册
    "users/register" => [
        "GET" => "UserController@registerGet",
        "POST" => "UserController@register"
    ],

    // 用户登录
    "users/login" => [
        "GET" => "UserController@loginGet",
        "POST" => "UserController@login"
    ],

    // 退出登录
    "users/loginOut" => [
        "GET" => "UserController@loginOut"
    ],

    // 个人中心
    "users/me" => [
        "GET" => "UserController@me"
    ],

    // 用户修改头像
    "users/photo" => [
        "GET" => "UserController@photoGet",
        "POST" => "UserController@photo"
    ]

];
