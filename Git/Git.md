## 常用命令：

* git branch -a

  查看所有分支（包括远程仓库上的分支）




## 版本管理

* 查看远程分支是否有更新

```
git fetch
```
* 合并远程分支

同步远程服务器上的数据到本地

```
git fetch origin
```

把远程`master`分支的内容合并到本地`master`分支

```
git merge origin/master
```

* 在本地新建分支进行开发任务

```
git checkout -b dev
```

开发完成确认没问题后合并到本地`master`分支中

```
git merge dev
```

再次确认后将`master`分支内容推送到远程自己的分支

```
git push origin master:dev
```


---
---

# `Git` 起步

## `Git` 简史

> 同生活中的许多伟大事物一样，`Git` 诞生于一个极富纷争大举创新的年代

## `Git` 基础

* 直接记录快照，而非差异比较

    * `Git` 更像是把数据看作是对小型文件系统的一组快照

    * `Git` 对待数据更像是一个 快照流

* 近乎所有操作都是本地执行

    * 在 `Git` 中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其它计算机的信息

* `Git` 保证完整性

    * `Git` 中所有数据在存储前都计算校验和，然后以校验和来引用

* `Git` 一般只添加数据

    * 你执行的 `Git` 操作，几乎只往 Git 数据库中增加数据

* `Git` 有三种状态，你的文件可能处于其中之一:

    * 已提交（`committed`）- `Git` 仓库

        * `Git` 仓库目录是 `Git` 用来保存项目的元数据和对象数据库的地方。 这是 `Git` 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据

    * 已修改（`modified`）- 工作目录

        * 工作目录是对项目的某个版本独立提取出来的内容。 这些从 `Git` 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改

    * 已暂存（`staged`）- 暂存区域

        * 暂存区域是一个文件，保存了下次将提交的文件列表信息，一般在 `Git` 仓库目录中。 有时候也被称作`‘索引’'，不过一般说法还是叫暂存区域

* 基本的 Git 工作流程如下:

    1. 在工作目录中修改文件

    2. 暂存文件，将文件的快照放入暂存区域

    3. 提交更新，找到暂存区域的文件，将快照永久性存储到 `Git` 仓库目录

> 如果 `Git` 目录中保存着的特定版本文件，就属于已提交状态

> 如果自上次取出后，作了修改但还没有放到暂存区域，就是已修改状态

> 如果作了修改并已放入暂存区域，就属于已暂存状态

## 命令行

> `Git` 有多种使用方式

* 可以使用原生的命令行模式

    * 只有在命令行模式下你才能执行 `Git` 的 `所有命令`

* 可以使用 `GUI` 模式，这些 `GUI` 软件也能提供多种功能

    * 大多数的 `GUI` 软件只实现了 `Git` 所有功能的一个子集以降低操作难度

## 安装 `Git`

> 本书写作时使用的 `Git` 版本为 `2.0.0` ,因为 `Git` 在保持向后兼容方面表现很好，本书使用的这些命令在 `2.0` 之后的版本应该有效

### 在 `Linux` 上安装

* 以 `Fedora` 上为例，你可以使用 `yum`

    ```
    $ sudo yum install git
    ```

* 在基于 `Debian` 的发行版上，请尝试用 `apt-get`

    ```
    $ sudo apt-get install git
    ```

* [【更多操作点击访问】](http://git-scm.com/download/linux)

### 在 `Mac` 上安装

> 在 `Mac` 上安装 `Git` 有多种方式,最简单的方法是安装 `Xcode Command Line Tools`

* `Mavericks （10.9）` 或更高版本的系统中，在 `Terminal` 里尝试首次运行 `git` 命令即可

* [【更多操作点击访问】](https://git-scm.com/download/mac)

* [【作为 GitHub for Mac 的一部分来安装】](http://mac.github.com/)

### 在 `Windows` 上安装

* [【Git 官方网站自动下载】](http://git-scm.com/download/win)

    * 这是一个名为 `Git for Windows` 的项目（也叫做 `msysGit`），和 `Git` 是分别独立的项目[【更多信息请访问】](https://gitforwindows.org)

* 另一个简单的方法是安装 `GitHub for Windows`[【GitHub for Windows 网站下载】](https://desktop.github.com)

### 从源代码安装

> 如果你想从源码安装 `Git` ，需要安装 `Git` 依赖的库：`curl`、`zlib`、`openssl`、`expat`，还有 `libiconv`

* 系统上有 `yum` （如 `Fedora`），分两行输入：

    ```
    $ sudo yum install curl-devel expat-devel gettext-devel \
    openssl-devel zlib-devel
    ```

* 系统上有 `apt-get`（如基于 `Debian` 的系统），分两行输入：

    ```
    $ sudo apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
    libz-dev libssl-dev
    ```

* 为了能够添加更多格式的文档（如 `doc`, `html`, `info`），你需要安装以下的依赖包：

    ```
    $ sudo yum install asciidoc xmlto docbook2x
    $ sudo apt-get install asciidoc xmlto docbook2x
    ```

* 当你安装好所有的必要依赖，你可以继续从几个地方来取得最新发布版本的 `tar` 包

    * [可以从 `Kernel.org` 网站获取](https://www.kernel.org/pub/software/scm/git)

    * [或从 `GitHub` 网站上的镜像来获得](https://github.com/git/git/releases)

    * 通常在 `GitHub` 上的是最新版本，但 `kernel.org` 上包含有文件下载签名，如果你想验证下载正确性的话会用到

* 接着，编译并安装：

    ```
    $ tar -zxf git-2.0.0.tar.gz
    $ cd git-2.0.0
    $ make configure
    $ ./configure --prefix=/usr
    $ make all doc info
    $ sudo make install install-doc install-html install-info
    ```

* 完成后，你可以使用 Git 来获取 Git 的升级：

    ```
    $ git clone git://git.kernel.org/pub/scm/git/git.git
    ```

## 初次运行 `Git` 前的配置

> `Git` 自带一个 `git config` 的工具来帮助设置控制 `Git` 外观和行为的配置变量，这些变量存储在三个不同的位置：

1. `/etc/gitconfig` 文件: 包含系统上每一个用户及他们仓库的通用配置

    * 如果使用带有 `--system` 选项的 `git config` 时，它会从此文件读写配置变量

2. `~/.gitconfig` 或 `~/.config/git/config` 文件：只针对当前用户。 可以传递 `--global` 选项让 `Git` 读写此文件

3. 当前使用仓库的 `Git` 目录中的 `config` 文件（就是 `.git/config`）：针对该仓库

> 每一个级别覆盖上一级别的配置，所以 `.git/config` 的配置变量会覆盖 `/etc/gitconfig` 中的配置变量

> 在 `Windows` 系统中，`Git` 会查找 `$HOME` 目录下（一般情况下是 `C:\Users\$USER`）的 `.gitconfig` 文件。 `Git` 同样也会寻找 `/etc/gitconfig` 文件，但只限于 `MSys` 的根目录下，即安装 `Git` 时所选的目标位置

### 用户信息

> 当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址

* 每一个 `Git` 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：

    ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    ```

* 再次强调，如果使用了 `--global` 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， `Git` 都会使用那些信息

    * 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 `--global` 选项的命令来配置

* 很多 `GUI` 工具都会在第一次运行时帮助你配置这些信息

### 文本编辑器

* 既然用户信息已经设置完毕，你可以配置默认文本编辑器了，当 `Git` 需要你输入信息时会调用它

* 如果未配置，`Git` 会使用操作系统默认的文本编辑器，通常是 `Vim`

* 如果你想使用不同的文本编辑器，例如 `Emacs` ，可以这样做：

    ```
    $ git config --global core.editor emacs
    ```

### 检查配置信息

> 如果想要检查你的配置，可以使用 `git config --list` 命令来列出所有 Git 当时能找到的配置

```
$ git config --list
user.name=John Doe
user.email=johndoe@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

> 你可能会看到重复的变量名，因为 `Git` 会从不同的文件中读取同一个配置（例如：`/etc/gitconfig` 与 `~/.gitconfig`），这种情况下，Git 会使用它找到的每一个变量的最后一个配置

* 检查 Git 的某一项配置

    ```
    $ git config user.name
    John Doe
    ```

## 获取帮助

> 若你使用 `Git` 时需要获取帮助，有三种方法可以找到 `Git` 命令的使用手册

```
$ git help <verb>
$ git <verb> --help
$ man git-<verb>
```

* 例如，要想获得 config 命令的手册，执行:

    ```
    $ git help config
    ```


# `Git` 基础

> 假如你只能阅读一章来学习 `Git` ，本章就是你的不二选择

## 获取 `Git` 仓库

* 有两种取得 `Git` 项目仓库的方法:

    1. 在现有项目或目录下导入所有文件到 `Git` 中

    2. 从一个服务器克隆一个现有的 `Git` 仓库

### 在现有目录中初始化仓库

* (新建的空文件)侠进入该项目目录并输入:

    ```
    $ git init
    ```

> 该命令将创建一个名为 `.git` 的子目录，这个子目录含有你初始化的 `Git` 仓库中所有的必须文件，这些文件是 `Git` 仓库的骨干

* (已经存在文件的文件夹)你应该开始跟踪( `git add` 命令)这些文件并提交(`git commit` 命令):

    ```
    $ git add *.c
    $ git add LICENSE
    $ git commit -m 'initial project version'
    ```

### 克隆现有的仓库

* 克隆仓库的命令格式是 `git clone [url]` ，比如，要克隆 `Git` 的可链接库 `libgit2` ，可以用下面的命令：

    ```
    $ git clone https://github.com/libgit2/libgit2
    ```

> 这会在当前目录下创建一个名为 `libgit2` 的目录，并在这个目录下初始化一个 `.git` 文件夹，从远程仓库拉取下所有数据放入 `.git` 文件夹，然后从中读取最新版本的文件的拷贝

* 克隆远程仓库的时候，自定义本地仓库的名字，你可以使用如下命令：

    ```
    $ git clone https://github.com/libgit2/libgit2 mylibgit
    ```

> 这将执行与上一个命令相同的操作，不过在本地创建的仓库名字变为 `mylibgit`

### `Git` 支持多种数据传输协议

* `https://` 协议

* `git://` 协议

* `SSH` 传输协议

    * `user@server:path/to/repo.git`

* [【在服务器上搭建 `Git`】](https://git-scm.com/book/zh/v2/ch00/r_git_on_the_server)

## 记录每次更新到仓库

> 你工作目录下的每一个文件都不外乎这两种状态：

* 已跟踪

    * 指那些被纳入了版本控制的文件，在上一次快照中有它们的记录，在工作一段时间后，它们的状态可能处于未修改，已修改或已放入暂存区

* 未跟踪

    * 工作目录中除已跟踪文件以外的所有其它文件都属于未跟踪文件，它们既不存在于上次快照的记录中，也没有放入暂存区

> 初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态

### 检查当前文件状态

* 查看文件处于什么状态：`git status`

* 如果在克隆仓库后立即使用此命令，会看到类似这样的输出：

```
$ git status
On branch master
nothing to commit, working directory clean
```

> 这说明你现在的工作目录相当干净，也就是说，所有已跟踪文件在上次提交后都未被更改过

> 上面的信息还表明，当前目录下没有出现任何处于未跟踪状态的新文件，否则 `Git` 会在这里列出来

> 该命令还显示了当前所在分支，并告诉你这个分支同远程服务器上对应的分支没有偏离

* `master` 是默认的分支名

### 创建新文件

* 创建一个新的未跟踪的内容为 `My Project` 的名为 `README` 的文件

    ```
    $ echo 'My Project' > README
    ```

    * 使用 git status 命令，你将看到它：

        ```
        $ git status
        On branch master
        Untracked files:
        (use "git add <file>..." to include in what will be committed)

            README

        nothing added to commit but untracked files present (use "git add" to track)
        ```

> 在状态报告中可以看到新建的 `README` 文件出现在 `Untracked files` 下面

> 未跟踪的文件意味着 `Git` 在之前的快照（提交）中没有这些文件

* `Git` 不会自动将新出现的文件纳入跟踪范围，除非你明明白白地告诉它“我需要跟踪该文件”，这样的处理让你不必担心将生成的二进制文件或其它不想被跟踪的文件包含进来

### `git add` 跟踪新文件

* 使用命令 `git add` 开始跟踪一个名为 `README` 的新文件：

    ```
    $ git add README
    ```

    * 此时再运行 `git status` 命令，会看到 `README` 文件已被跟踪，并处于暂存状态：

        ```
        $ git status
        On branch master
        Changes to be committed:
        (use "git reset HEAD <file>..." to unstage)

            new file:   README
        ```

> 只要在 `Changes to be committed` 这行下面的，就说明是已暂存状态

> 如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中

### `git add` 暂存已修改文件

* 修改了一个名为 `CONTRIBUTING.md` 的已被跟踪的文件，然后运行 `git status` 命令，会看到下面内容：

    ```
    $ git status
    On branch master
    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        new file:   README

    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
    ```

> 文件 `CONTRIBUTING.md` 出现在 `Changes not staged for commit` 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区

> 要暂存这次更新，需要运行 git add 命令

* `git add` 命令是个多功能命令：

    * 可以用它开始跟踪新文件

    * 或者把已跟踪的文件放到暂存区

    * 还能用于合并时把有冲突的文件标记为已解决状态等

    * 将这个命令理解为 `添加内容到下一次提交中` 而不是 `将一个文件添加到项目中` 要更加合适

> 运行 git add 将 `CONTRIBUTING.md` 放到暂存区，然后再看看 `git status` 的输出：

```
$ git add CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
    modified:   CONTRIBUTING.md
```

> 现在两个文件都已暂存，下次提交时就会一并记录到仓库

* 每次修改文件后，都需要重新运行 `git add` 把最新版本重新暂存起来，否则提交的就是最后一次存入暂存区的最新文件，而不是修改后的最新文件

### `git status` 状态简览

> `git status` 命令的输出十分详细，但其用语有些繁琐，运行 `git status -s` ，状态报告输出如下：

```
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

* 文字名前的状态字母(注意字母长度是有两个字母的位置)解释：

    * `??` - 新添加的未跟踪文件

    * `A ` - 新添加到暂存区中的文件

    * ` M` - 右边时表示该文件在工作区中被修改了，但是还没放入暂存区

    * `M ` - 左边时表示该文件被修改了并放入了暂存区

    * `MM` - 表示被修改并提交到暂存区后又在工作区中被修改了，所以在暂存区和工作区都有该文件被修改了的记录

    * ` D` - 右边时表示在工作区中已被删除的文件

    * `D ` - 左边时表示在暂存区中已被删除

    * `R ` - 左边时表示被改名的文件，且新文件会继承原文件的存在状态

### `.gitignore` 忽略文件

> 我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式，操作：

```
$ cat .gitignore
*.[oa]
*~
```

> 第一行查看 `.gitignore` 的文件内容，以下两行是其具体内容：

* 第二行告诉 `Git` 忽略所有以 `.o` 或 `.a` 结尾的文件

* 第二行告诉 `Git` 忽略所有以波浪符（`~`）结尾的文件，许多文本编辑软件（比如 `Emacs` ）都用这样的文件名保存副本

> 文件 `.gitignore` 的格式规范如下:

* 所有空行或者以 `＃` 开头的行都会被 Git 忽略

* 可以使用标准的 `glob` 模式匹配

* 匹配模式可以以（`/`）开头防止递归

* 匹配模式可以以（`/`）结尾指定目录

* 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（`!`）取反

> 所谓的 `glob` 模式是指 shell 所使用的简化了的正则表达式:

* `*` - 星号匹配零个或多个任意字符

* `[abc]` - 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 `a` ，要么匹配一个 `b` ，要么匹配一个 `c` ）

* `?` - 问号只匹配一个任意字符

* `[0-9]` - 表示匹配所有 `0` 到 `9` 的数字（如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配）

* `**` - 表示匹配任意中间目录，比如`a/**/z` 可以匹配 `a/z`, `a/b/z` 或 `a/b/c/z`等

* 一个 `.gitignore` 文件的例子

    ```
    # 忽略 .a 结尾的任意文件
    *.a

    # 即使执行了上面的忽略条件，也不忽略 lib.a 文件
    !lib.a

    # 只忽略当前目录中的 TODO 文件
    /TODO

    # 忽略 build 目录中的所有文件
    build/

    # 只忽略 doc 当前目录下的所有 .txt 结尾文件
    doc/*.txt

    # 忽略 doc 目录及其子目录中的所有 .pdf 结尾文件
    doc/**/*.pdf
    ```

### `git diff` 查看已暂存和未暂存的修改

> 此命令比较的是工作目录中当前文件和暂存区域快照之间的差异， 也就是修改之后还没有暂存起来的变化内容

* `git diff` 将通过文件补丁的格式显示具体哪些行发生了改变

* 要查看尚未暂存的文件更新了哪些部分，不加参数直接输入 `git diff`

* 若要查看已暂存的将要添加到下次提交里的内容，可以用 `git diff --cached` 命令

    * `Git 1.6.1` 及更高版本还允许使用 `git diff --staged` ，效果是相同的，但更好记些

* 请注意，`git diff` 本身只显示尚未暂存的改动，而不是自上次提交以来所做的所有改动

    * 有时候你一下子暂存了所有更新过的文件后，运行 `git diff` 后却什么也没有，就是这个原因

### `git commit` 提交更新

```
$ git commit
```

>这种方式会启动文本编辑器以便输入本次提交的说明

* 将提交信息与命令放在同一行

    ```
    $ git commit -m '这是一次提交'
    [master (root-commit) cdb9719] 这是一次提交
    2 files changed, 3 insertions(+)
    create mode 100644 .gitignore
    create mode 100644 README
    ```

### `git commit -a` 跳过使用暂存区域

> 自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤

```
$ git status -s
 M CONTRIBUTING.md
$ git commit -a -m '这是第二次提交'
[master dbb4916] 这是第二次提交
 1 file changed, 1 insertion(+), 1 deletion(-)
```

* 提交之前不再需要 git add 文件 `CONTRIBUTING.md` 了

### `git rm` 移除文件

> 要从 `Git` 中移除某个文件，就必须要从已跟踪文件清单中移除（确切地说，是从暂存区域移除），然后提交

* 移除暂存区中的 PROJECTS.md 文件

    ```
    $ git rm PROJECTS.md
    rm 'PROJECTS.md'
    $ git status -s
    D  abc.tt
    ```

* 如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 `-f`（译注：即 `force` 的首字母），用于防止误删还没有添加到快照的数据，这样的数据不能被 `Git` 恢复

* 把文件从 `Git` 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录中

    * 在暂存区中删除 `README` ，但在工作区中依然存在

        ```
        $ git rm --cached README
        ```

    * 删除 `log/` 目录下扩展名为 `.log` 的所有文件

        ```
        $ git rm log/\*.log
        ```

    * 删除以 ~ 结尾的所有文件

        ```
        $ git rm \*~
        ```

### `git mv` 移动文件

* 修改文件的名字 `README.md` 为 `README`

    ```
    $ git mv README.md README
    ```

* 其实，运行 `git mv` 就相当于运行了下面三条命令：

    ```
    $ mv README.md README
    $ git rm README.md
    $ git add README
    ```

## `git log` 查看提交历史

> `git log` 会按提交时间列出所有的更新，最近的更新排在最上面

* 显示每次提交的内容差异，也可以加上 `-2` 来仅显示最近两次提交：

    * `$ git log -p -2`

    * 该选项除了显示基本信息之外，还附带了每次 `commit` 的变化

* 想看到每次提交的简略的统计信息，你可以使用 `--stat` 选项：

    * `$ git log --stat`

    * `--stat` 选项在每次提交的下面列出所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了

* 指定使用不同于默认格式的方式展示提交历史,比如用 `oneline` 将每个提交放在一行显示，查看的提交数很大时非常有用

    * `$ git log --pretty=oneline`

    * 另外还有 `short` `full` 和 `fuller` 可以用，展示的信息或多或少有些不同

    * 可以使用 `format` 定制要显示的记录格式

        ```
        $ git log --pretty=format:"%h - %an, %ar : %s"
        ca82a6d - Scott Chacon, 6 years ago : changed the version number
        085bb3b - Scott Chacon, 6 years ago : removed unnecessary test
        a11bef0 - Scott Chacon, 6 years ago : first commit
        ```

> `git log --pretty=format` 常用的选项

选项|说明
-|-
`%H`|提交对象（`commit`）的完整哈希字串
`%h`|提交对象的简短哈希字串
`%T`|树对象（`tree`）的完整哈希字串
`%t`|树对象的简短哈希字串
`%P`|父对象（`parent`）的完整哈希字串
`%p`|父对象的简短哈希字串
`%an`|作者（`author`）的名字
`%ae`|作者的电子邮件地址
`%ad`|作者修订日期（可以用 `--date=` 选项定制格式）
`%ar`|作者修订日期，按多久以前的方式显示
`%cn`|提交者（`committer`）的名字
`%ce`|提交者的电子邮件地址
`%cd`|提交日期
`%cr`|提交日期，按多久以前的方式显示
`%s`|提交说明

* 作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人

> `git log` 的常用选项

选项|说明
-|-
`-p`|按补丁格式显示每个更新之间的差异
`--stat`|显示每次更新的文件修改统计信息
`--shortstat`|只显示 `--stat` 中最后的行数修改添加移除统计
`--name-only`|仅在提交信息后显示已修改的文件清单
`--name-status`|显示新增、修改、删除的文件清单。
`--abbrev-commit`|仅显示 `SHA-1` 的前几个字符，而非所有的 `40` 个字符
`--relative-date`|使用较短的相对时间显示（比如 `2 weeks ago` ）
`--graph`|显示 `ASCII` 图形表示的分支合并历史
`--pretty`|使用其他格式显示历史提交信息(可用的选项包括 `oneline` `short` `full` `fuller` 和 `format` ，后跟指定格式)

### 限制输出长度

> `git log` 还有许多非常实用的限制输出长度的选项，也就是只输出部分提交信息

* 列出所有最近两周内的提交：

    * `$ git log --since=2.weeks`

* 可以给出若干搜索条件，列出符合的提交：用 `--author` 选项显示指定作者的提交，用 `--grep` 选项搜索提交说明中的关键字(请注意，如果要得到同时满足这两个选项搜索条件的提交，就必须用 `--all-match` 选项，否则，满足任意一个条件的提交都会被匹配出来)

* 找出添加或移除了某一个特定函数的引用的提交：

    * `$ git log -Sfunction_name`

* 如果只关心某些文件或者目录的历史提交，可以在 `git log` 选项的最后指定它们的路径(因为是放在最后位置上的选项，所以用两个短划线 `--` 隔开之前的选项和后面限定的路径名)

> 限制 `git log` 输出的选项

选项|说明
-|-
`-(n)`|仅显示最近的 n 条提交
`--since` `--after`|仅显示指定时间之后的提交
`--until` `--before`|仅显示指定时间之前的提交
`--author`|仅显示指定作者相关的提交
`--committer`|仅显示指定提交者相关的提交
`--grep`|仅显示含指定关键字的提交
`-S`|仅显示添加或移除了某个关键字的提交

* 查看 `Git` 仓库中，`2008` 年 `10` 月期间，`Junio Hamano` 提交的但未合并的测试文件，可以用下面的查询命令(在近 `40000` 条提交中，上面的输出仅列出了符合条件的 `6` 条记录)：

```
$ git log --pretty="%h - %s" --author=gitster --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch
```

## 撤消操作

* 提交后发现忘记了暂存某些需要的修改，可以像下面这样操作(修改上次提交的提交信息)：

    * `$ git commit --amend`

```
$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
```

### 取消暂存的文件

* `git reset HEAD <file>...`

* 取消暂存 `CONTRIBUTING.md` 文件(只从暂存区中删除此文件，但工作区中依然存在)：

    ```
    $ git reset HEAD CONTRIBUTING.md
    Unstaged changes after reset:
    M	CONTRIBUTING.md
    $ git status
    On branch master
    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        renamed:    README.md -> README

    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
    ``

### 撤消对文件的修改

* `git checkout -- [file]`

* 撤消暂存区中对 `CONTRIBUTING.md` 之前所做的修改:

    ```
    $ git checkout -- CONTRIBUTING.md
    $ git status
    On branch master
    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        renamed:    README.md -> README
    ```

    * `git checkout -- [file]` 是一个危险的命令，你对那个文件做的任何修改都会消失(你只是拷贝了另一个文件来覆盖它)，除非你确实清楚不想要那个文件了，否则不要使用这个命令

    * `git checkout .` 撤消工作区所有文件的操作直到上一次提交时的状态

## 远程仓库的使用

> 远程仓库是指托管在因特网或其他网络中的你的项目的版本库(你可以有好几个远程仓库，通常有些仓库对你只读，有些则可以读写)

### `git remote` 查看远程仓库

* `$ git remote`

    ```
    $ git remote
    origin
    ```

    * 可以指定选项 `-v`，会显示需要读写远程仓库使用的 `Git` 保存的简写与其对应的 `URL`

        ```
        $ git remote -v
        origin	https://github.com/schacon/ticgit (fetch)
        origin	https://github.com/schacon/ticgit (push)
        ```

    * 与几个协作者合作的，拥有多个远程仓库的仓库看起来像下面这样：

        ```
        $ git remote -v
        bakkdoor  https://github.com/bakkdoor/grit (fetch)
        bakkdoor  https://github.com/bakkdoor/grit (push)
        cho45     https://github.com/cho45/grit (fetch)
        cho45     https://github.com/cho45/grit (push)
        defunkt   https://github.com/defunkt/grit (fetch)
        defunkt   https://github.com/defunkt/grit (push)
        koke      git://github.com/koke/grit.git (fetch)
        koke      git://github.com/koke/grit.git (push)
        origin    git@github.com:mojombo/grit.git (fetch)
        origin    git@github.com:mojombo/grit.git (push)
        ```

### `git remote add` 添加远程仓库

* `git remote add <shortname> <url>`

```
$ git remote
origin
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

> 现在你可以在命令行中使用字符串 `pb` 来代替整个 `URL` ，例如，如果你想拉取 `Paul` 的仓库中有但你没有的信息，可以运行 `git fetch pb` ：

```
$ git fetch pb
remote: Counting objects: 43, done.
remote: Compressing objects: 100% (36/36), done.
remote: Total 43 (delta 10), reused 31 (delta 5)
Unpacking objects: 100% (43/43), done.
From https://github.com/paulboone/ticgit
 * [new branch]      master     -> pb/master
 * [new branch]      ticgit     -> pb/ticgit
 ```

### `git fetch` 从远程仓库中抓取与拉取

* `$ git fetch [remote-name]`

* 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看

### `git push` 推送到远程仓库

* `$ git push [remote-name] [branch-name]`

```
$ git push origin master
```

* 只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效

### `git remote show` 查看远程仓库

* `$ git remote show [remote-name]`

```
$ git remote show origin
```

> 这个命令列出了当你在特定的分支上执行 `git push` 会自动地推送到哪一个远程分支; 它也同样地列出了哪些远程分支不在你的本地，哪些远程分支已经从服务器上移除了;还有当你执行 `git pull` 时哪些分支会自动合并

### `git remote rename` 远程仓库的重命名

* `$ git remote rename pb paul`

    * 将 pb 重命名为 paul

* 值得注意的是这同样也会修改你的远程分支名字,那些过去引用 `pb/master` 的现在会引用 `paul/master`

### `git remote rm` 远程仓库的移除

* `$ git remote rm paul`

    * 移除一个名为 `paul` 的远程仓库

## 打标签

> Git 可以给历史中的某一个提交打上标签，以示重要；比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）

### `git tag` 列出标签

```
$ git tag
v0.1
v1.3
```

* `Git` 自身的源代码仓库包含标签的数量超过 `500` 个。 如果只对 `1.8.5` 系列感兴趣，可以运行：

    ```
    $ git tag -l 'v1.8.5*'
    v1.8.5
    v1.8.5-rc0
    v1.8.5-rc1
    v1.8.5-rc2
    v1.8.5-rc3
    v1.8.5.1
    v1.8.5.2
    v1.8.5.3
    v1.8.5.4
    v1.8.5.5
    ```

### 创建标签

> `Git` 使用两种主要类型的标签：

* 轻量标签（`lightweight`）

    * 一个轻量标签很像一个不会改变的分支 - 它只是一个特定提交的引用

    * 轻量标签本质上是将提交校验和存储到一个文件中 - 没有保存任何其他信息

    * 创建轻量标签，不需要使用 `-a`、`-s` 或 `-m` 选项，只需要提供标签名字

* 附注标签（`annotated`）

    * 附注标签是存储在 `Git` 数据库中的一个完整对象，它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 `GNU Privacy Guard`（`GPG`）签名与验证；通常建议创建附注标签，这样你可以拥有以上所有信息

    * 当你在运行 `tag` 命令时指定 `-a` 选项，`-m` 选项指定了一条将会存储在标签中的信息：

        ```
        $ git tag -a v1.4 -m 'my version 1.4'
        $ git tag
        v0.1
        v1.3
        v1.4
        ```

    * 通过使用 git show 命令可以看到标签信息与对应的提交信息

        ```
        $ git show v1.4
        tag v1.4
        Tagger: Ben Straub <ben@straub.cc>
        Date:   Sat May 3 20:19:12 2014 -0700

        my version 1.4

        commit ca82a6dff817ec66f44342007202690a93763949
        Author: Scott Chacon <schacon@gee-mail.com>
        Date:   Mon Mar 17 21:52:11 2008 -0700

            changed the version number
        ```

* 后期打标签

    * 假设提交历史是这样的：

        ```
        $ git log --pretty=oneline
        15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'experiment'
        a6b4c97498bd301d84096da251c98a07c7723e65 beginning write support
        0d52aaab4479697da7686c15f77a3d64d9165190 one more thing
        6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'
        0b7434d86859cc7b8c3d5e1dddfed66ff742fcbc added a commit function
        4682c3261057305bdd616e23b64b0857d832627b added a todo file
        166ae0c4d3f420721acbb115cc33848dfcc2121a started write support
        9fceb02d0ae598e95dc970b74767f19372d61af8 updated rakefile
        964f16d36dfccde844893cac5b347e7b3d44abbc commit the todo
        8a5cbc430f1a9c3d00faaeffd07798508422908a updated readme
        ```

    * 现在，假设在 `v1.2` 时你忘记给项目打标签，也就是在 `updated rakefile` 提交(你可以在之后补上标签)要在那个提交上打标签，你需要在命令的末尾指定提交的校验和（或部分校验和）:

        ```
        $ git tag -a v1.2 9fceb02
        ```

* 共享标签

    * `git push origin [tagname]`

    * 默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上

    * 在创建完标签后你必须显式地推送标签到共享服务器上

        ```
        $ git push origin v1.5
        Counting objects: 14, done.
        Delta compression using up to 8 threads.
        Compressing objects: 100% (12/12), done.
        Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
        Total 14 (delta 3), reused 0 (delta 0)
        To git@github.com:schacon/simplegit.git
        * [new tag]         v1.5 -> v1.5
        ```

    * 一次性推送很多标签，也可以使用带有 `--tags` 选项的 `git push` 命令

        ```
        $ git push origin --tags
        Counting objects: 1, done.
        Writing objects: 100% (1/1), 160 bytes | 0 bytes/s, done.
        Total 1 (delta 0), reused 0 (delta 0)
        To git@github.com:schacon/simplegit.git
        * [new tag]         v1.4 -> v1.4
        * [new tag]         v1.4-lw -> v1.4-lw
        ```

* 删除标签

    * `git tag -d <tagname>`

    * 删除掉一个轻量级标签：

        ```
        $ git tag -d v1.4-lw
        Deleted tag 'v1.4-lw' (was e7d5add)
        ```

    * 上述命令并不会从任何远程仓库中移除这个标签，你必须使用 `git push <remote> :refs/tags/<tagname>` 来更新你的远程仓库：

        ```
        $ git push origin :refs/tags/v1.4-lw
        To /git@github.com:schacon/simplegit.git
        - [deleted]         v1.4-lw
        ```

* 检出标签

    * 如果你需要进行更改——比如说你正在修复旧版本的错误——这通常需要创建一个新分支：

        ```
        $ git checkout -b version2 v2.0.0
        Switched to a new branch 'version2'
        ```

    * 如果在这之后又进行了一次提交，`version2` 分支会因为这个改动向前移动，`version2` 分支就会和 `v2.0.0` 标签稍微有些不同，这时就应该当心了

## `Git` 别名

> 如果不想每次都输入完整的 `Git` 命令，可以通过 `git config` 文件来轻松地为每一个命令设置一个别名

```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```

> 这意味着，当要输入 `git commit` 时，只需要输入 `git ci`

* 为了解决取消暂存文件的易用性问题，可以向 `Git` 中添加你自己的取消暂存别名：

```
$ git config --global alias.unstage 'reset HEAD --'
```

* 这会使下面的两个命令等价：

    ```
    $ git unstage fileA
    $ git reset HEAD -- fileA
    ```

* 通常也会添加一个 `last` 命令，像这样：

```
$ git config --global alias.last 'log -1 HEAD'
```

* 这样，可以轻松地看到最后一次提交：

    ```
    $ git last
    commit 66938dae3329c7aebe598c2246a8e6af90d04646
    Author: Josh Goebel <dreamer3@example.com>
    Date:   Tue Aug 26 19:48:51 2008 +0800

        test for current head

        Signed-off-by: Scott Chacon <schacon@example.com>
    ```

* 想要执行外部命令，而不是一个 `Git` 子命令，可以在命令前面加入 `!` 符号

    * 将 `git visual` 定义为 `gitk` 的别名：

    ```
    $ git config --global alias.visual '!gitk'
    ```


# `Git` 分支

> Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷

## 分支简介

> `Git` 的分支，其实本质上仅仅是指向提交对象的可变指针

### `git branch` 分支创建

* `$ git branch testing`

    * 仅仅 `创建` 一个新分支，并不会自动切换到新分支中去

* 使用 `git log` 命令查看各个分支当前所指的对象

    ```
    $ git log --oneline --decorate
    f30ab (HEAD, master, testing) add feature #32 - ability to add new
    34ac2 fixed bug #1328 - stack overflow under certain conditions
    98ca9 initial commit of my project
    ```

    * 当前 `master` 和 `testing` 分支均指向校验和以 f30ab 开头的提交对象

### `git checkout` 分支切换

* `$ git checkout testing`

    * 切换到了新创建的 `testing` 分支，这样 `HEAD` 就指向 `testing` 分支了

* 分支切换会改变你工作目录中的文件

    * 在切换分支时，一定要注意你工作目录里的文件会被改变

    * 如果是切换到一个较旧的分支，你的工作目录会恢复到该分支最后一次提交时的样子

    * 如果 `Git` 不能干净利落地完成这个任务，它将禁止切换分支

* 使用 `git log` 命令查看分叉历史

    ```
    $ git log --oneline --decorate --graph --all
    * c2b9e (HEAD, master) made other changes
    | * 87ab2 (testing) made a change
    |/
    * f30ab add feature #32 - ability to add new formats to the
    * 34ac2 fixed bug #1328 - stack overflow under certain conditions
    * 98ca9 initial commit of my project
    ```

## 分支的新建与合并

* 让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流。 你将经历如下步骤：

    * 开发某个网站

    * 为实现某个新的需求，创建一个分支

    * 在这个分支上开展工作

* 正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补，你将按照如下方式来处理：

    * 切换到你的线上分支 `production branch`

    * 为这个紧急任务新建一个分支，并在其中修复它

    * 在测试通过之后，切换回线上分支，然后合并这个修补分支，最后将改动推送到线上分支

    * 切换回你最初工作的分支上，继续工作

### `git checkout -b` 新建并切换到该分支

* `$ git checkout -b iss53`

    * 新建并切换到了新分支 `iss53`

    * 它是下面两条命令的简写：

    ```
    $ git branch iss53
    $ git checkout iss53
    ```

### `git merge` 合并分支

* `$ git merge hotfix`

    * 把分支 hotfix 合并到当前分支

### `git branch -d` 删除分支

* `$ git branch -d hotfix`

    * 删除分支 `hotfix`

### 遇到冲突时的分支合并

> 如果你在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，`Git` 就没法干净的合并它们，`Git` 会暂停下来，等待你去解决合并产生的冲突

* 任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来，出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：

```
<<<<<<< HEAD:index.html
<div id="footer">contact : email.support@github.com</div>
=======
<div id="footer">
 please contact us at support@github.com
</div>
>>>>>>> iss53:index.html
```

> 这表示 `HEAD` 所指示的版本（也就是你的 `master` 分支所在的位置，因为你在运行 `merge` 命令的时候已经检出到了这个分支）在这个区段的上半部分（======= 的上半部分），而 `iss53` 分支所指示的版本在 ======= 的下半部分

> 为了解决冲突，你必须选择使用由 `=======` 分割的两部分中的一个，或者你也可以自行合并这些内容；例如，你可以通过把这段内容换成下面的样子来解决冲突：

```html
<div id="footer">
please contact us at email.support@github.com
</div>
```

> 上述的冲突解决方案仅保留了其中一个分支的修改，并且 `<<<<<<<` `=======` `>>>>>>>` 这些行被完全删除了

> 在你解决了所有文件里的冲突之后，对每个文件使用 `git add` 命令来将其标记为冲突已解决：一旦暂存这些原本有冲突的文件，`Git` 就会将它们标记为冲突已解决

* 如果你想使用图形化工具来解决冲突，你可以运行 `git mergetool` ，该命令会为你启动一个合适的可视化合并工具，并带领你一步一步解决这些冲突：

    ```
    $ git mergetool

    This message is displayed because 'merge.tool' is not configured.
    See 'git mergetool --tool-help' or 'git help config' for more details.
    'git mergetool' will now attempt to use one of the following tools:
    opendiff kdiff3 tkdiff xxdiff meld tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis bc3 codecompare vimdiff emerge
    Merging:
    index.html

    Normal merge conflict for 'index.html':
    {local}: modified file
    {remote}: modified file
    Hit return to start merge resolution tool (opendiff):
    ```

## 分支管理

* 查看每一个分支的最后一次提交：

    ```
    $ git branch -v
    iss53   93b412c fix javascript issue
    * master  7a98805 Merge branch 'iss53'
    testing 782fd34 add scott to the author list in the readmes
    ```

* `--merged` 与 `--no-merged` 这两个有用的选项可以过滤这个列表中已经合并或尚未合并到当前分支的分支

    * 查看哪些分支已经合并到当前分支，可以运行 `git branch --merged` ：

    ```
    $ git branch --merged
    iss53
    * master
    ```

    * 查看所有包含未合并工作的分支，可以运行 `git branch --no-merged` ：

    ```
    $ git branch --no-merged
    testing
    ```

    * 这里显示了其他分支。 因为它包含了还未合并的工作，尝试使用 `git branch -d` 命令删除它时会失败：

    ```
    $ git branch -d testing
    error: The branch 'testing' is not fully merged.
    If you are sure you want to delete it, run 'git branch -D testing'.
    ```

    * 如果真的想要删除分支并丢掉那些工作，如同帮助信息里所指出的，可以使用 `-D` 选项强制删除它

## 分支开发工作流

### 长期分支

* 许多使用 `Git` 的开发者都喜欢使用这种方式来工作，比如只在 `master` 分支上保留完全稳定的代码——有可能仅仅是已经发布或即将发布的代码

* 他们还有一些名为 `develop` 或者 `next` 的平行分支，被用来做后续开发或者测试稳定性——这些分支不必保持绝对稳定，但是一旦达到稳定状态，它们就可以被合并入 `master` 分支了

* 这样，在确保这些已完成的特性分支（短期分支，比如之前的 `iss53` 分支）能够通过所有测试，并且不会引入更多 `bug` 之后，就可以合并入主干分支中，等待下一次的发布。

### 特性分支

* 考虑这样一个例子，你在 `master` 分支上工作到 `C1`

* 这时为了解决一个问题而新建 `iss91` 分支，在 `iss91` 分支上工作到 `C4`，然而对于那个问题你又有了新的想法，于是你再新建一个 `iss91v2` 分支试图用另一种方法解决那个问题

* 接着你回到 `master` 分支工作了一会儿，你又冒出了一个不太确定的想法，你便在 `C10` 的时候新建一个 `dumbidea` 分支，并在上面做些实验

### 注意事项

* 请牢记，当你做这么多操作的时候，这些分支全部都存于本地

* 当你新建和合并分支的时候，所有这一切都只发生在你本地的 `Git` 版本库中 —— 没有与服务器发生交互

## 远程分支

* 远程跟踪分支是远程分支状态的引用

* 它们是你不能移动的本地引用，当你做任何网络通信操作时，它们会自动移动

* 远程跟踪分支像是你上次连接到远程仓库时，那些分支所处状态的书签

### 推送

* 推送本地的 `serverfix` 分支来更新远程仓库上的 `serverfix` 分支：

    * `$ git push origin serverfix`

* 将本地的 serverfix 分支推送到远程仓库上的 awesomebranch 分支

    * `$ git push origin serverfix:awesomebranch`

* 特别注意的一点是当抓取到新的远程跟踪分支时，本地不会自动生成一份可编辑的副本（拷贝）

    * 换一句话说，这种情况下，不会有一个新的 `serverfix` 分支 - 只有一个不可以修改的 `origin/serverfix` 指针

    * 可以运行 `git merge origin/serverfix` 将这些工作合并到当前所在的分支

* 想要在自己的 `serverfix` 分支上工作，可以将其建立在远程跟踪分支之上：

    ```
    $ git checkout -b serverfix origin/serverfix
    Branch serverfix set up to track remote branch serverfix from origin.
    Switched to a new branch 'serverfix'
    ```

    * 这会给你一个用于工作的本地分支，并且起点位于 `origin/serverfix`

### 跟踪分支

* 想要将本地分支与远程分支设置为不同名字，你可以轻松地增加一个不同名字的本地分支的上一个命令：

    ```
    $ git checkout -b sf origin/serverfix
    Branch sf set up to track remote branch serverfix from origin.
    Switched to a new branch 'sf'
    ```

* 使用 `-u` 或 `--set-upstream-to` 选项运行 `git branch` 来显式地设置正在跟踪的上游分支

    ```
    $ git branch -u origin/serverfix
    Branch serverfix set up to track remote branch serverfix from origin.
    ```

* 想要查看设置的所有跟踪分支，可以使用 `git branch` 的 `-vv` 选项:

    ```
    $ git branch -vv
    iss53     7e424c3 [origin/iss53: ahead 2] forgot the brackets
    master    1ae2a45 [origin/master] deploying index fix
    * serverfix f8674d9 [teamone/server-fix-good: ahead 3, behind 1] this should do it
    testing   5ea463a trying something new
    ```

    * 这里可以看到 `iss53` 分支正在跟踪 `origin/iss53` 并且 `ahead` 是 `2`，意味着本地有两个提交还没有推送到服务器上

    * 也能看到 `master` 分支正在跟踪 `origin/master` 分支并且是最新的

    * 接下来可以看到 `serverfix` 分支正在跟踪 `teamone` 服务器上的 `server-fix-good` 分支并且领先 `3` 落后 `1`，意味着服务器上有一次提交还没有合并入同时本地有三次提交还没有推送

    * 最后看到 `testing` 分支并没有跟踪任何远程分支

    * `需要重点注意的一点是这些数字的值来自于你从每个服务器上最后一次抓取的数据。 这个命令并没有连接服务器，它只会告诉你关于本地缓存的服务器数据`

### 拉取

> 当 git fetch 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容；它只会获取数据然后让你自己合并

> 然而，有一个命令叫作 `git pull` 在大多数情况下它的含义是一个 `git fetch` 紧接着一个 `git merge` 命令

### 删除远程分支

> 可以运行带有 `--delete` 选项的 `git push` 命令来删除一个远程分支

* 从服务器上删除 `serverfix` 分支，运行下面的命令：

```
$ git push origin --delete serverfix
To https://github.com/schacon/simplegit
 - [deleted]         serverfix
```

* 基本上这个命令做的只是从服务器上移除这个指针, `Git` 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的

## 变基

### `git rebase` 变基的基本操作

> 切换到当前分支，再进行变基操作（复制某个分支到当前分支）

```
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

* 它的原理是首先找到这两个分支（即当前分支 `experiment`、变基操作的目标基底分支 `master`）的最近共同祖先，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底, 最后以此将之前另存为临时文件的修改依序应用

* 请注意，无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了；变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起

### 更有趣的变基例子

* 可以使用 `git rebase` 命令的 `--onto` 选项，选中在 `client` 分支里但不在 `server` 分支里的修改

* `$ git rebase --onto master server client`

    * 以上命令的意思是：取出 `client` 分支，找出处于 `client` 分支和 `server` 分支的共同祖先之后的修改，然后把它们在 `master` 分支上重放一遍

* 使用 `git rebase [basebranch] [topicbranch]` 命令可以直接将特性分支（即本例中的 `server`）变基到目标分支（即 `master`）上

    * `$ git rebase master server`

    * 将 `server` 中的修改变基到 `master` 上（当前依然在 `master` 分支）

### 变基的风险

> 变基并非完美无缺，要用它得遵守一条准则：`不要对在你的仓库外有副本的分支执行变基`

* 变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交

### 用变基解决变基

* `Git` 除了对整个提交计算 `SHA-1` 校验和以外，也对本次提交所引入的修改计算了校验和—— 即 `patch-id`

* [【了解更多点击即可】](https://git-scm.com/book/zh/v2/Git-分支-变基)

### 变基 `vs` 合并

* 有一种观点认为，仓库的提交历史即是 `记录实际发生过什么` ：

    * 它是针对历史的文档，本身就有价值，不能乱改

    * 从这个角度看来，改变提交历史是一种亵渎，你使用_谎言_掩盖了实际发生过的事情

    * 如果由合并产生的提交历史是一团糟怎么办？既然事实就是如此，那么这些痕迹就应该被保留下来，让后人能够查阅

* 另一种观点则正好相反，他们认为提交历史是 `项目过程中发生的事` ：

    * 没人会出版一本书的第一版草稿，软件维护手册也是需要反复修订才能方便使用

    * 持这一观点的人会使用 `rebase` 及 `filter-branch` 等工具来编写故事，怎么方便后来的读者就怎么写

* 总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史，从不对已推送至别处的提交执行变基操作，这样，你才能享受到两种方式带来的便利
