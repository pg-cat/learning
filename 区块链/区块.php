<?php

// 接收从广播传过来的参数数组，此处以赋值形式获取
$obj = [

    // 上一个区块的 body 部分的哈希值
    "beforeBlockHash" => "aaaaaaaaaaaaaaa",
    // 挖矿的函数方法，返回一个字符串
    "func" => function () {
        // 挖矿操作
        return str;
    },
    // 已被挖出的矿列表
    "arr" => ["0001", "0002", "0003"]
];

// 区块类
class Blocks
{
    // 头部操作
    private $hashs = [];
    // 储存操作
    private $body;

    // 初始化
    function __constructor($obj)
    {
        // 接收上一个区块的 body 部分的哈希值
        $this->hashs["before"] = $obj["beforeBlockHash"];
        // 储存
        $this->body = "abc";
        $this->hashs["body"]=md5($this->body);

        // $obj["func"]
    }
};
