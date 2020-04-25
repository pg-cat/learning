<?php
// 引入 数据库 操作方法
include_once("../sql/DB.php");

class PostController
{

    // 帖子列表
    public function list()
    {

        // 获取参数 page 的值以确定是 第几页
        $cursor = intval(@$_GET["page"]) ?? 1;
        // 设置 每页显示多少数据
        $limit = 10;

        // 数据库操作
        $db = new DB;

        // 查询 总数据长度
        $strAll = "SELECT count(*) FROM posts ;";
        // 当数据库内无数据时
        if (!empty($db->select($strAll)[0]["count"])) {
            $count = $db->select($strAll)[0]["count"];
        } else {
            $count = 1;
        }
        // 获取 最大页数
        $pageNumMax = intval(ceil($count / $limit));
        // 限制 $cursor 的值
        if ($cursor < 1) {
            $cursor = 1;
        }
        if ($cursor > $pageNumMax) {
            $cursor = $pageNumMax;
        }
        // 获取需要查询的数据的 起始位置
        $offset = ($cursor - 1) * $limit;
        // 分布查询
        $str = "SELECT * FROM posts ORDER BY id LIMIT $limit OFFSET $offset ;";
        $arr = $db->select($str);

        // 引用页码组件
        include_once("../utile/functions.php");
        // 生成页码组件
        $pageNums = pageNum($pageNumMax, $cursor);

        // 转换变量，加载页面
        extract([
            "arrPage" => $arr,
            "pageNums" => $pageNums,
            "cursor" => $cursor
        ]);

        // 帖子列表页面
        $class = "帖子列表";
        include("./views/home.php");
    }

    // 发帖页面
    public function sayGet()
    {
        // 发帖页面
        $class = "发帖";
        include("./views/say.php");
    }

    // 提交发帖页面
    public function say()
    {
        // 限制 登录 后才能发帖
        if (!@$_SESSION["user"]) {
            $_SESSION["err_info"] = "请登陆后发帖！";
            include_once("./views/err.php");
            return;
        };

        // 获取 用户名 密码
        $title = $_POST["title"];
        $say = $_POST["say"];
        // 获取 用户id
        $userId = $_SESSION["user"]["id"];

        // 数据库操作
        $db = new DB;

        // 需要插入的表 帖子
        $sqlPost = "posts";
        // 需要插入的数据
        $userPost = [
            "title" => $title,
            "user_id" => $userId,
            "say" => $say,
            "date" => date('Y.m.d H:i:s', time())
        ];
        // 插入 帖子信息 到数据库
        $sqlPostYes = $db->insert($sqlPost, $userPost);

        // 插入未成功时
        if (!$sqlPostYes) {
            $_SESSION["err_info"] = "发帖失败,请检查网络连接是否正常";
            include_once("./views/err.php");
            return;
        };

        // 重定向到 帖子列表页
        $class = "帖子列表";
        header("Location:/posts");
    }

    // 帖子详情
    public function details($params)
    {

        // 获取 帖子id
        $id = $params["id"];
        // 存储 帖子id 到 session
        $_SESSION["post"]["id"] = $id;
        // 获取参数 page 的值以确定是 第几页
        $cursor = intval(@$_GET["page"]) ?? 1;
        // 设置 每页显示多少数据
        $limit = 10;

        // 判断帖子 id 是否是数字
        if (!is_numeric($id)) {
            die("地址不正确");
        }

        // 数据库操作
        $db = new DB;

        // 根据 帖子id 查询 帖子主题
        $str = "SELECT * FROM posts WHERE id = {$id} ;";
        $arr = $db->select($str);
        // 判断数据库是否返回 帖子主题
        if (empty($arr)) {
            die("帖子不存在");
        }
        // 获取 帖子主题 数据
        $post = $arr[0];

        // 查询 总数据长度
        $strAll = "SELECT count(*) FROM posts_say ;";
        $count = $db->select($strAll)[0]["count"];
        // 获取 最大页数
        $pageNumMax = intval(ceil($count / $limit));
        // 限制 $cursor 的值
        if ($cursor < 1) {
            $cursor = 1;
        }
        if ($cursor > $pageNumMax) {
            $cursor = $pageNumMax;
        }
        // 获取需要查询的数据的 起始位置
        $offset = ($cursor - 1) * $limit;
        // 分布查询
        $str = "SELECT * FROM posts_say WHERE post_id = {$id} ORDER BY date LIMIT $limit OFFSET $offset ;";
        if (!$db->select($str)) {
            $arrSay = [];
        }
        $arrSay = $db->select($str);

        // 引用页码组件
        include_once("../utile/functions.php");
        // 获取网址上的参数
        $urls = "id=" . $id;
        // 生成页码组件
        $pageNums = pageNum($pageNumMax, $cursor, $urls);

        // 转换变量，加载页面
        extract([
            "postSay" => $arrSay,
            "pageNums" => $pageNums
        ]);

        // 帖子详情页面
        include("./views/details.php");
    }

    // 帖子详情 回复帖子
    public function detailsSay()
    {
        $userSay = $_POST["say"];
        $postId = $_SESSION["post"]["id"];
        $userId = $_SESSION["user"]["id"];

        // 数据库操作
        $db = new DB;

        // 查询当前 帖子id 的 回复数量 确定当前楼层
        $sayAll = "SELECT count(*) FROM posts_say WHERE post_id = {$postId} ;";
        // 当数据库内无数据时
        if (!empty($db->select($sayAll)[0]["count"])) {
            $num = $db->select($sayAll)[0]["count"];
        } else {
            $num = 0;
        }

        // 需要插入的表 帖子
        $sqlPost = "posts_say";
        // 需要插入的数据
        $postSay = [
            "post_id" => $postId,
            "user_id" => $userId,
            "user_say" => $userSay,
            "date" => date('Y.m.d H:i:s', time()),
            "floor" => $num+1
        ];
        // 插入 帖子信息 到数据库
        $sqlPostYes = $db->insert($sqlPost, $postSay);

        // 插入未成功时
        if (!$sqlPostYes) {
            $_SESSION["err_info"] = "回复失败,请检查网络连接是否正常";
            include_once("./views/err.php");
            return;
        };

        // 帖子详情
        header("Location:./{$postId}");
    }
}
