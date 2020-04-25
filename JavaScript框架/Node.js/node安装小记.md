# 安装最新最稳定的 node

## 安装低版本 npm

```
sudo apt install npm
```

低版本 npm 不需要 node 支持即可使用，此时千万不可升级 npm

> ### 需要说明的是：
> - 此时用 `node -v` 查看 `node` 确实是未安装状态
> - 但用 `nodejs -v` 查看 `nodejs` 是有个低版本的，大约是 4.x 的版本
>> 这个暂时不用管，等 node 安装完成后，再来处理 `nodejs` ，要杀要剐可随意

## 安装 node 版本管理插件 n

使用 npm 安装 n 插件

```
sudo npm install -g n
```

> 记得使用参数 `-g` ，不然可能会提示无法安装之类的错误

## 使用 n 安装最稳定的 node

```
sudo n stable
```

此时查看 `node -v` 时，可以看到版本已经出来了，已安装成功

> 此时你可以处理 `nodejs` 了，前面不处理的原因是可能会导致 `npm` 无法继续使用
