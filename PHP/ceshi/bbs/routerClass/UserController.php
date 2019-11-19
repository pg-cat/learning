<?php
// 引入 数据库 操作方法
include_once("../sql/DB.php");

class UserController
{

    // 注册页面
    public function registerGet()
    {
        $class = "注册";
        include("./views/register.php");
    }

    // 注册页面 提交数据
    public function register()
    {
        // 获取 用户名 密码
        $username = $_POST["username"];
        $password = $_POST["password"];

        // 引入 加密方法 加密密码
        include_once("../utile/functions.php");
        $password = md5str($password);

        // 数据库操作
        $db = new DB;

        // 需要插入的表
        $sql = "users";
        // 需要插入的数据
        $user = [
            "username" => $username,
            "password" => $password,
            "ip" => $_SERVER["REMOTE_ADDR"],
            "date" => date('Y.m.d H:i:s', time())
        ];
        // 插入 用户信息 到数据库
        $sqlYes = $db->insert($sql, $user);

        // 插入未成功时
        if (!$sqlYes) {
            $_SESSION["err_info"] = "登录失败,请检查网络连接是否正常";
            include_once("./views/err.php");
            return;
        };

        // 查询 用户信息
        $userStr = "SELECT * FROM users WHERE username = '$username'";
        $arr = $db->select($userStr);

        // 查询未成功时
        if (!$arr[0]) {
            $_SESSION["err_info"] = "登录失败,请检查网络连接是否正常";
            include_once("./views/err.php");
            return;
        };

        // 查询成功则添加相应的 用户信息 到 session
        $_SESSION["user"]["id"] = $arr[0]["id"];
        $_SESSION["user"]["username"] = $arr[0]["username"];
        $_SESSION["user"]["img"] = $arr[0]["img"];

        // 重定向到 帖子列表
        $class = "帖子列表";
        header("Location:/posts");
    }

    // 登录页面
    public function loginGet()
    {
        $class = "登录";
        include("./views/login.php");
    }

    // 登录页面 提交数据
    public function login()
    {
        // 获取 用户名 密码
        $username = $_POST["username"];
        $password = $_POST["password"];

        // 引入 加密方法 加密密码
        include_once("../utile/functions.php");
        $password = md5str($password);

        // 数据库操作
        $db = new DB;

        // 使用 用户名 查询 用户信息
        $str = "SELECT * FROM users WHERE username = '" . $username . "';";
        $user = $db->select($str);

        // 比对 密码 判断是否在 session 中存入 用户信息
        if ($user === [] || $password !== @$user[0]["password"]) {
            $_SESSION["err_info"] = "用户或密码不正确";
            include_once("./views/err.php");
            return;
        }
        $_SESSION["user"] = $user[0];

        // 重定向到 帖子列表
        $class = "帖子列表";
        header("Location:/posts");
    }

    public function loginOut()
    {
        // 清空 session 用以取消登录
        $_SESSION["user"] = null;

        // 重定向到 帖子列表
        $class = "帖子列表";
        header("Location:/posts");
    }

    // 个人中心
    public function me()
    {
        // 个人中心页面
        $class = "个人中心";
        include("./views/me.php");
    }

    // 修改头像
    public function photoGet()
    {
        // 限制 登录 后才能设置头像
        if (!@$_SESSION["user"]) {
            $_SESSION["err_info"] = "请登陆后设置头像！";
            include_once("./views/err.php");
            return;
        };

        // 修改头像页面
        $class = "个人中心";
        include("./views/photo.php");
    }

    // 修改头像 提交数据
    public function photo()
    {
        // 限制 登录 后才能设置头像
        if (!@$_SESSION["user"]) {
            $_SESSION["err_info"] = "请登陆后设置头像！";
            include_once("./views/err.php");
            return;
        };

        // 上传错误的信息说明
        $err = $_FILES["userImg"]["error"];
        if ($err !== 0) {
            // 当错误代码为 1
            if ($err === 1) {
                $_SESSION["err_info"] = "上传失败，文件大小超过 2M";
                include_once("./views/err.php");
                return;
            };
            // 当错误代码为 2
            if ($err === 2) {
                $_SESSION["err_info"] = "上传失败，文件大小超过 100KB";
                include_once("./views/err.php");
                return;
            };
            // 当错误代码为 3
            if ($err === 3) {
                $_SESSION["err_info"] = "上传失败，文件只有部分被上传";
                include_once("./views/err.php");
                return;
            };
            // 当错误代码为 4
            if ($err === 4) {
                $_SESSION["err_info"] = "上传失败，没有文件被上传";
                include_once("./views/err.php");
                return;
            };
            // 当错误代码为 6
            if ($err === 6) {
                $_SESSION["err_info"] = "上传失败，找不到临时文件夹";
                include_once("./views/err.php");
                return;
            };
            // 当错误代码为 7
            if ($err === 7) {
                $_SESSION["err_info"] = "上传失败，文件写入失败";
                include_once("./views/err.php");
                return;
            };
            // 未知错误
            $_SESSION["err_info"] = "上传失败，未知错误，请联系傻逼程序！";
            include_once("./views/err.php");
            return;
        };

        // 判断上传的文件类型
        // 获取 上传文件类型 字符串并切割成数组，数组第一项为 文件类型，第二项为文件后缀名
        $imgArr = explode("/", $_FILES["userImg"]["type"]);
        // 上传文件类型 不为 image 时报错
        if ($imgArr[0] !== "image") {
            $_SESSION["err_info"] = "上传失败，上传文件类型非图片类型";
            include_once("./views/err.php");
            return;
        }
        // 可继续根据后缀名 $imgArr[0] 限制图片类型

        // 上传成功后续操作
        // 临时文件位置
        $path = $_FILES["userImg"]["tmp_name"];
        // 获取当前用户的 用户id
        $username = $_SESSION["user"]["username"];
        // 指定服务器上 存放图片位置
        $pathOK =  "/img/" . $username . "." . $imgArr[1];

        // 移动临时图片到服务器指定位置
        $moveYes = move_uploaded_file($path, $_SERVER['DOCUMENT_ROOT'] . $pathOK);

        if (!$moveYes) {
            $_SESSION["err_info"] = "上传失败，图片未保存至服务器";
            include_once("./views/err.php");
            return;
        }

        // 数据库操作
        $db = new DB;

        // 需要插入的表
        $sql = "users";
        // 需要插入的数据
        $userImg = [
            "img" => $pathOK,
            "date_change" => date('Y.m.d H:i:s', time())
        ];
        $username = $_SESSION["user"]["username"];
        // 插入 用户信息 到数据库
        $sqlYes = $db->update($sql, $userImg, $username);
        // 插入成功则添加 用户信息 到 session
        if (!$sqlYes) {
            $_SESSION["err_info"] = "上传失败，请检查网络连接是否正常";
            include_once("./views/err.php");
            return;
        };
        $_SESSION["user"]["img"] = $pathOK;

        // 修改头像页面
        $class = "个人中心";
        include("./views/photo.php");
    }
};
