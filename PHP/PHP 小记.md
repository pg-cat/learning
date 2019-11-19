实例：变量转化

> 字符型 => 整型，只保留遇到的字符串中的第一个连续数值

```php
$a = "abc";
$b = "1.2ab22c";
var_dump($a); // string(3) "abc"
echo PHP_EOL;
var_dump($b); // string(3) "1.2ab22c"
echo PHP_EOL;
var_dump((int)$a); // int(0)
echo PHP_EOL;
var_dump((int)$b); // int(1)
```

---

实例：数组的裁剪

> 裁剪后的数组默认是保持键名的，不重新排序

```php
$arr = [1,2,4];
var_dump($arr);
echo json_encode($arr);
echo "\n";
unset($arr[0]); // 删除数组第一项
// $arr = array_values($arr); // 对数组进行重新排列
var_dump($arr);
echo json_encode($arr);
echo "\n";
```

输出结果：

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(4)
}
[1,2,4]
array(2) {
  [1]=>
  int(2)
  [2]=>
  int(4)
}
{"1":2,"2":4}
```

当取消 `对数组进行重新排列` 的代码注释时的结果：

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(4)
}
[1,2,4]
array(2) {
  [0]=>
  int(2)
  [1]=>
  int(4)
}
[2,4]
```

---

实例：引用通用组件

```
<?php inclue("./header.php") ?>

<div class="main">...</div>

<?php inclue("./footer.php") ?>
```

---

实例：PHP 函数 `include` `include_once` `require` `require_once` 的区别

- `include`

  会将指定的文件读入并且执行里面的程序

- `require`

  会将目标文件的内容读入，并且把自己本身代换成这些读入的内容

- `include_once`

  在脚本执行期间包含并运行指定文件

  此行为和 `include` 语句类似，唯一区别是如果该文件中已经被包含过，则不会再次包含

  如同此语句名字暗示的那样，只会包含一次

- `require_once`

  和 `require` 语句完全相同，唯一区别是 `PHP` 会检查该文件是否已经被包含过，如果是则不会再次包含

`include` 与 `require` 的区别

- `include` 与 `require` 除了在处理引入文件的方式不同外

- 最大的区别就是：

  `include` 在引入不存文件时产生一个警告且脚本还会继续执行

  而 `require` 则会导致一个致命性错误且脚本停止执行

[【更多可点击了解】](https://www.cnblogs.com/phpfensi/p/7861127.html)

---

实例：array_unique

- 对数组进行去重，移除重复的值(而不是键名)，返回新的无重复值的数组

> 仅当 `(string) $elem1 === (string) $elem2` 时两个单元被认为相同

---

实例：str_replace()

- 语法：`str_replace ( mixed $search , mixed $replace , mixed $subject [, int &$count ] ) : mixed`

- 该函数返回一个字符串或者数组。该字符串或数组是将 `subject` 中全部的 `search` 都被 `replace` 替换之后的结果

- 如果 `search` 和 `replace` 为数组，那么 `str_replace()` 将对 `subject` 做二者的映射替换

  - 如果 `replace` 的值的个数少于 `search` 的个数，多余的替换将使用空字符串来进行

  - 如果 `search` 是一个数组而 `replace` 是一个字符串，那么 `search` 中每个元素的替换将始终使用这个字符串

  - 如果 `search` 和 `replace` 都是数组，它们的值将会被依次处理

- 该转换不会改变大小写

```php
$search  = array('A', 'B', 'C', 'D', 'E');
$replace = array('B', 'C', 'D', 'E', 'F');
$subject = 'A';

echo str_replace($search, $replace, $subject);
// 输出 F ，因为 A 被 B 替换，B 又被 C 替换，以此类推...
// 由于从左到右依次替换，最终 E 被 F 替换
```

> 如果没有一些特殊的替换需求（比如正则表达式），你应该使用该函数替换 `ereg_replace()` 和 `preg_replace()`

[【点击了解更多：PHP 手册 `str_replace` 】](https://www.php.net/manual/zh/function.str-replace.php)

---

实例：重定向刷新页面，去掉当前请求头的数据

当访问触发后，将会重新刷新，清空请求头中的提交参数

- GET 不需要重定向，它不通过请求头传参，无需清空

```php
<?php
if($_POST !== []){
  header("Location:./message.php");
}
```

---

实例：
