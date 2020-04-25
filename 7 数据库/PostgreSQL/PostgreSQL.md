【2019年10月24日】整理自[【菜鸟教程：PostgreSQL 教程】](https://www.runoob.com/postgresql/postgresql-tutorial.html)

---

# PostgreSQL 基础

PostgreSQL 是一个免费的 **`对象-关系`** 数据库服务器( `ORDBMS` )，在灵活的 BSD 许可证下发行

- PostgreSQL 开发者把它念作 `post-gress-Q-L`

- PostgreSQL 的 `Slogan` 是 **`世界上最先进的开源关系型数据库`**

> [【参考内容：PostgreSQL 10.1 手册】](https://www.runoob.com/manual/PostgreSQL/index.html)

## 什么是数据库？

数据库( `Database` )是按照数据结构来组织、存储和管理数据的仓库

- 每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据

  - 我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢

- 现在我们使用 关系型数据库管理系统( `RDBMS` ) 来存储和管理的大数据量

  - 所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据

- **`ORDBMS 对象关系数据库系统`** 是面向对象技术与传统的关系数据库相结合的产物，查询处理是 ORDBMS 的重要组成部分，它的性能优劣将直接影响到 DBMS 的性能

  - ORDBMS 在原来关系数据库的基础上，增加了一些新的特性

  - RDBMS 是关系数据库管理系统，是建立实体之间的联系，最后得到的是关系表

  - OODBMS 面向对象数据库管理系统，将所有实体都看着对象，并将这些对象类进行封装，对象之间的通信通过消息 OODBMS 对象关系数据库在实质上还是关系数据库

### ORDBMS 术语

在我们开始学习 PostgreSQL 数据库前，让我们先了解下 ORDBMS 的一些术语：

- 数据库：数据库是一些关联表的集合

- 数据表：表是数据的矩阵

  在一个数据库中的表看起来像一个简单的电子表格

- 列：一列(数据元素)

  包含了相同的数据，例如邮政编码的数据

- 行：一行(=元组，或记录)

  一组相关的数据，例如一条用户订阅的数据

- 冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性

- 主键：主键是唯一的

  一个数据表中只能包含一个主键

  你可以使用主键来查询数据

- 外键：外键用于关联两个表

- 复合键：复合键(组合键)

  将多个列作为一个索引键，一般用于复合索引

- 索引：使用索引可快速访问数据库表中的特定信息

  索引是对数据库表中一列或多列的值进行排序的一种结构

  类似于书籍的目录

- 参照完整性：参照的完整性要求关系中不允许引用不存在的实体

  与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性

### PostgreSQL 特征

- 函数：通过函数，可以在数据库服务器端执行指令程序

- 索引：用户可以自定义索引方法，或使用内置的 B 树，哈希表与 GiST 索引

- 触发器：触发器是由SQL语句查询所触发的事件

  如：一个 INSERT 语句可能触发一个检查数据完整性的触发器

  触发器通常由 INSERT 或 UPDATE 语句触发

  多版本并发控制：PostgreSQL 使用多版本并发控制( `MVCC ，Multiversion concurrency control` )系统进行并发控制，该系统向每个用户提供了一个数据库的 `快照` ，用户在事务内所作的每个修改，对于其他的用户都不可见，直到该事务成功提交

- 规则：**`规则(RULE)`** 允许一个查询能被重写，通常用来实现对 **`视图(VIEW)`** 的操作，如 **`插入(INSERT)`** 、**`更新(UPDATE)`** 、**`删除(DELETE)`**

- 数据类型：包括文本、任意精度的数值数组、JSON 数据、枚举类型、XML 数据等

- 全文检索：通过 `Tsearch2` 或 `OpenFTS` ，**`8.3 版本`** 中内嵌 `Tsearch2`

- `NoSQL` ：`JSON` ，`JSONB` ，`XML` ，`HStore` 原生支持，至 NoSQL 数据库的外部数据包装器

- 数据仓库：能平滑迁移至同属 PostgreSQL 生态的 `GreenPlum` ，`DeepGreen` ，`HAWK` 等，使用 `FDW` 进行 `ETL`

### 相关资源

[【 `PostgreSQL 10.1` 手册 在线手册】](http://www.runoob.com/manual/PostgreSQL/)

[【离线手册 PDF 百度云盘版本】](https://pan.baidu.com/s/1h1J14i8tzJUY3p9yyeW0mA) 提取码：xs7r

[【离线手册 CHM 百度云盘版本】](https://pan.baidu.com/s/1h1J14i8tzJUY3p9yyeW0mA) 提取码：tq4z

[【查看最新版 `PostgreSQL` 】](https://github.com/postgres-cn/pgdoc-cn/releases)

## Linux 上安装 PostgreSQL

打开[【 `PostgreSQL` 官网】](https://www.postgresql.org/)，点击菜单栏上的 `Download` ，可以看到这里包含了很多平台的安装包，包括 `Linux` 、`Windows` 、`Mac OS` 等

> 此处我们仅介绍 linux 上安装，其他系统上安装方式可点击下列链接进行了解：
> - [【菜鸟教程：Windows 上安装 PostgreSQL】](https://www.runoob.com/postgresql/windows-install-postgresql.html)
> - [【菜鸟教程：Mac OS 上安装 PostgreSQL】](https://www.runoob.com/postgresql/mac-install-postgresql.html)

- Linux 我们可以看到支持 `Ubuntu` 和 `Red Hat` 等各个平台，点击具体的平台链接，即可查看安装方法：

![图片](https://www.runoob.com/wp-content/uploads/2019/05/28AD14E3-B089-4235-A2ED-626CE011E4EC.jpg)

- 点击上图中的 `file browser` ，我们还能下载 PostgreSQL 最新的源码

![图片](https://www.runoob.com/wp-content/uploads/2019/05/235E36B8-603B-4335-B3A6-26F0C9A3910A.jpg)

### Ubuntu 安装 PostgreSQL

我们以 Ubuntu 为例，可以使用 apt-get 安装 PostgreSQL

```
sudo apt-get update
sudo apt-get install postgresql postgresql-client
```

- 安装完毕后，系统会创建一个数据库超级用户 `postgres` ，密码为空，执行以下命令可进行登录，并进入 `postgres`

```
sudo -u postgres psql
```

> 也可分两次输入以下命令分别进行 **`登录`** 和 **`进入 postgres`** 操作
> - `sudo -i -u postgres`
> - `psql`

- 输入 `psql --version` 可查看 Postgres 版本信息，输出以下类似信息，说明安装成功

```
psql (PostgreSQL) 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
```

- 输入以下命令退出 PostgreSQL 提示符：

```
\q
```

- PostgreSQL 安装完成后默认是已经启动的，但是也可以通过下面的方式来手动启动服务

```
sudo /etc/init.d/postgresql start   # 开启
sudo /etc/init.d/postgresql stop    # 关闭
sudo /etc/init.d/postgresql restart # 重启
```

> 若 psql 进入不了 `postgres`
> - 可能需要开启服务，执行命令 `sudo /etc/init.d/postgresql start`
> - 管理员权限是非必须的，也可尝试执行命令 `/etc/init.d/postgresql start`

## 语法

默认情况下 PostgreSQL 安装完成后，自带了一个命令行工具 `SQL Shell(psql)`

- Linux 系统可以直接切换到 postgres 用户来开启命令行工具：

```
# sudo -i -u postgres
```

- Windows 系统一般在它的安装目录下：

  `Program Files` → `PostgreSQL 11.3` → `SQL Shell(psql)`

- Mac OS 我们直接搜索就可以了找到：

![图片](https://www.runoob.com/wp-content/uploads/2019/05/70500F3B-F304-4887-8064-9DD04F8B4BB8.jpg)

进入命令行工具，我们可以使用 `\help` 来查看各个命令的语法 ：

```
postgres-# \help <command_name>
```

- 例如，我们查看下 `select` 语句的语法：

```sql
postgres=# \help SELECT
Command:     SELECT
Description: retrieve rows from a table or view
Syntax:
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    [ * | expression [ [ AS ] output_name ] [, ...] ]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW window_name AS ( window_definition ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT | SKIP LOCKED ] [...] ]

where from_item can be one of:

    [ ONLY ] table_name [ * ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
                [ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
    [ LATERAL ] ( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
    with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    [ LATERAL ] function_name ( [ argument [, ...] ] )
                [ WITH ORDINALITY ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    [ LATERAL ] function_name ( [ argument [, ...] ] ) [ AS ] alias ( column_definition [, ...] )
    [ LATERAL ] function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
    [ LATERAL ] ROWS FROM( function_name ( [ argument [, ...] ] ) [ AS ( column_definition [, ...] ) ] [, ...] )
                [ WITH ORDINALITY ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]

and grouping_element can be one of:

    ( )
    expression
    ( expression [, ...] )
    ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
    CUBE ( { expression | ( expression [, ...] ) } [, ...] )
    GROUPING SETS ( grouping_element [, ...] )

and with_query is:

    with_query_name [ ( column_name [, ...] ) ] AS ( select | values | insert | update | delete )

TABLE [ ONLY ] table_name [ * ]
```

### SQL 语句

一个 SQL 语句通常包含了：

- 关键字
- 标识符(字段)
- 常量
- 特殊符号 等

下面是一个简单的 SQL 语句：

```sql
SELECT id, name FROM runoob
```

-|SELECT|id, name|FROM|runoob
-|-|-|-|-
符号类型|关键字|标识符(字段)|关键字|标识符
描述|命令|id 和 name 字段|语句，用于设置条件规则等|表名

### PostgreSQL 命令

- `ABORT`

  用于退出当前事务

```sql
ABORT [ WORK | TRANSACTION ]
```

- `ALTER AGGREGATE`

  修改一个聚集函数的定义

```sql
ALTER AGGREGATE _name_ ( _argtype_ [ , ... ] ) RENAME TO _new_name_
ALTER AGGREGATE _name_ ( _argtype_ [ , ... ] ) OWNER TO _new_owner_
ALTER AGGREGATE _name_ ( _argtype_ [ , ... ] ) SET SCHEMA _new_schema_
```

- `ALTER COLLATION`

  修改一个排序规则定义

```sql
ALTER COLLATION _name_ RENAME TO _new_name_
ALTER COLLATION _name_ OWNER TO _new_owner_
ALTER COLLATION _name_ SET SCHEMA _new_schema_
```

- `ALTER CONVERSION`

  修改一个编码转换的定义

```sql
ALTER CONVERSION name RENAME TO new_name
ALTER CONVERSION name OWNER TO new_owner
```

- `ALTER DATABASE`

  修改一个数据库

```sql
ALTER DATABASE name SET parameter { TO | = } { value | DEFAULT }
ALTER DATABASE name RESET parameter
ALTER DATABASE name RENAME TO new_name
ALTER DATABASE name OWNER TO new_owner
```

- `ALTER DEFAULT PRIVILEGES`

  定义默认的访问权限

```sql
ALTER DEFAULT PRIVILEGES
    [ FOR { ROLE | USER } target_role [, ...] ]
    [ IN SCHEMA schema_name [, ...] ]
    abbreviated_grant_or_revoke

where abbreviated_grant_or_revoke is one of:

GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }
    [, ...] | ALL [ PRIVILEGES ] }
    ON TABLES
    TO { [ GROUP ] role_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]
...
```

- `ALTER DOMAIN`

  修改一个域的定义

```sql
ALTER DOMAIN name { SET DEFAULT expression | DROP DEFAULT }
ALTER DOMAIN name { SET | DROP } NOT NULL
ALTER DOMAIN name ADD domain_constraint
ALTER DOMAIN name DROP CONSTRAINT constraint_name [ RESTRICT | CASCADE ]
ALTER DOMAIN name OWNER TO new_owner
```

- `ALTER FUNCTION`

  修改一个函数的定义

```sql
ALTER FUNCTION name ( [ type [, ...] ] ) RENAME TO new_name
ALTER FUNCTION name ( [ type [, ...] ] ) OWNER TO new_owner
```

- `ALTER GROUP`

  修改一个用户组

```sql
ALTER GROUP groupname ADD USER username [, ... ]
ALTER GROUP groupname DROP USER username [, ... ]
ALTER GROUP groupname RENAME TO new_name
```

- `ALTER INDEX`

  修改一个索引的定义

```sql
ALTER INDEX name OWNER TO new_owner
ALTER INDEX name SET TABLESPACE indexspace_name
ALTER INDEX name RENAME TO new_name
```

- `ALTER LANGUAGE`

  修改一个过程语言的定义

```sql
ALTER LANGUAGE name RENAME TO new_name
```

- `ALTER OPERATOR`

  改变一个操作符的定义

```sql
ALTER OPERATOR name ( { lefttype | NONE }, { righttype | NONE } )
OWNER TO new_owner
```

- `ALTER OPERATOR CLASS`

  修改一个操作符表的定义

```sql
ALTER OPERATOR CLASS name USING index_method RENAME TO new_name
ALTER OPERATOR CLASS name USING index_method OWNER TO new_owner
```

- `ALTER SCHEMA`

  修改一个模式的定义

```sql
ALTER SCHEMA name RENAME TO new_name
ALTER SCHEMA name OWNER TO new_owner
```

- `ALTER SEQUENCE`

  修改一个序列生成器的定义

```sql
ALTER SEQUENCE name [ INCREMENT [ BY ] increment ]
[ MINVALUE minvalue | NO MINVALUE ]
[ MAXVALUE maxvalue | NO MAXVALUE ]
[ RESTART [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE ]
```

- `ALTER TABLE`

  修改表的定义

```sql
ALTER TABLE [ ONLY ] name [ * ]
action [, ... ]
ALTER TABLE [ ONLY ] name [ * ]
RENAME [ COLUMN ] column TO new_column
ALTER TABLE name
RENAME TO new_name
```

> 其中 `action` 可以是以选项之一：

```sql
ADD [ COLUMN ] column_type [ column_constraint [ ... ] ]
DROP [ COLUMN ] column [ RESTRICT | CASCADE ]
ALTER [ COLUMN ] column TYPE type [ USING expression ]
ALTER [ COLUMN ] column SET DEFAULT expression
ALTER [ COLUMN ] column DROP DEFAULT
ALTER [ COLUMN ] column { SET | DROP } NOT NULL
ALTER [ COLUMN ] column SET STATISTICS integer
ALTER [ COLUMN ] column SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
ADD table_constraint
DROP CONSTRAINT constraint_name [ RESTRICT | CASCADE ]
CLUSTER ON index_name
SET WITHOUT CLUSTER
SET WITHOUT OIDS
OWNER TO new_owner
SET TABLESPACE tablespace_name
```

- `ALTER TABLESPACE`

  修改一个表空间的定义

```sql
ALTER TABLESPACE name RENAME TO new_name
ALTER TABLESPACE name OWNER TO new_owner
```

- `ALTER TRIGGER`

  修改改变一个触发器的定义

```sql
ALTER TRIGGER name ON table RENAME TO new_name
```

- `ALTER TYPE`

  修改一个类型的定义

```sql
ALTER TYPE name OWNER TO new_owner
```

- `ALTER USER`

  修改数据库用户帐号

```sql
ALTER USER name [ [ WITH ] option [ ... ] ]
ALTER USER name RENAME TO new_name
ALTER USER name SET parameter { TO | = } { value | DEFAULT }
ALTER USER name RESET parameter
```

> `option` 可以是：

```sql
[ ENCRYPTED | UNENCRYPTED ] PASSWORD 'password'
| CREATEDB | NOCREATEDB
| CREATEUSER | NOCREATEUSER
| VALID UNTIL 'abstime'
```

- `ANALYZE`

  收集与数据库有关的统计

```sql
ANALYZE [ VERBOSE ] [ table [ (column [, ...] ) ] ]
```

- `BEGIN`

  开始一个事务块

```sql
BEGIN [ WORK | TRANSACTION ] [ transaction_mode [, ...] ]
```

> `transaction_mode` 可以是以下选项之一：

```sql
ISOLATION LEVEL { 
   SERIALIZABLE | REPEATABLE READ | READ COMMITTED
   | READ UNCOMMITTED
}
READ WRITE | READ ONLY
```

- `CHECKPOINT`

  强制一个事务日志检查点

```sql
CHECKPOINT
```

- `CLOSE`

  关闭游标

```sql
CLOSE name
```

- `CLUSTER`

  根据一个索引对某个表盘簇化排序

```sql
CLUSTER index_name ON table_name
CLUSTER table_name
CLUSTER
```

- `COMMENT`

  定义或者改变一个对象的注释

```sql
COMMENT ON {
   TABLE object_name |
   COLUMN table_name.column_name |
   AGGREGATE agg_name (agg_type) |
   CAST (source_type AS target_type) |
   CONSTRAINT constraint_name ON table_name |
   CONVERSION object_name |
   DATABASE object_name |
   DOMAIN object_name |
   FUNCTION func_name (arg1_type, arg2_type, ...) |
   INDEX object_name |
   LARGE OBJECT large_object_oid |
   OPERATOR op (left_operand_type, right_operand_type) |
   OPERATOR CLASS object_name USING index_method |
   [ PROCEDURAL ] LANGUAGE object_name |
   RULE rule_name ON table_name |
   SCHEMA object_name |
   SEQUENCE object_name |
   TRIGGER trigger_name ON table_name |
   TYPE object_name |
   VIEW object_name
} 
IS 'text'
```

- `COMMIT`

  提交当前事务

```sql
COMMIT [ WORK | TRANSACTION ]
```

- `COPY`

  在表和文件之间拷贝数据

```sql
COPY table_name [ ( column [, ...] ) ]
FROM { 'filename' | STDIN }
[ WITH ]
[ BINARY ]
[ OIDS ]
[ DELIMITER [ AS ] 'delimiter' ]
[ NULL [ AS ] 'null string' ]
[ CSV [ QUOTE [ AS ] 'quote' ]
[ ESCAPE [ AS ] 'escape' ]
[ FORCE NOT NULL column [, ...] ]
COPY table_name [ ( column [, ...] ) ]
TO { 'filename' | STDOUT }
[ [ WITH ]
[ BINARY ]
[ OIDS ]
[ DELIMITER [ AS ] 'delimiter' ]
[ NULL [ AS ] 'null string' ]
[ CSV [ QUOTE [ AS ] 'quote' ]
[ ESCAPE [ AS ] 'escape' ]
[ FORCE QUOTE column [, ...] ]
```

- `CREATE AGGREGATE`

  定义一个新的聚集函数

```sql
CREATE AGGREGATE name (
   BASETYPE = input_data_type,
   SFUNC = sfunc,
   STYPE = state_data_type
   [, FINALFUNC = ffunc ]
   [, INITCOND = initial_condition ]
)
```

- `CREATE CAST`

  定义一个用户定义的转换

```sql
CREATE CAST (source_type AS target_type)
WITH FUNCTION func_name (arg_types)
[ AS ASSIGNMENT | AS IMPLICIT ]
CREATE CAST (source_type AS target_type)
WITHOUT FUNCTION
[ AS ASSIGNMENT | AS IMPLICIT ]
```

- `CREATE CONSTRAINT TRIGGER`

  定义一个新的约束触发器

```sql
CREATE CONSTRAINT TRIGGER name
AFTER events ON
table_name constraint attributes
FOR EACH ROW EXECUTE PROCEDURE func_name ( args )
```

- `CREATE CONVERSION`

  定义一个新的的编码转换

```sql
CREATE [DEFAULT] CONVERSION name
FOR source_encoding TO dest_encoding FROM func_name
```

- `CREATE DATABASE`

  创建新数据库

```sql
CREATE DATABASE name
[ [ WITH ] [ OWNER [=] db_owner ]
   [ TEMPLATE [=] template ]
   [ ENCODING [=] encoding ]
   [ TABLESPACE [=] tablespace ] 
]
```

- `CREATE DOMAIN`

  定义一个新域

```sql
CREATE DOMAIN name [AS] data_type
[ DEFAULT expression ]
[ constraint [ ... ] ]
```

> `constraint` 可以是以下选项之一：

```sql
[ CONSTRAINT constraint_name ]
{ NOT NULL | NULL | CHECK (expression) }
```

- `CREATE FUNCTION`

  定义一个新函数

```sql
CREATE [ OR REPLACE ] FUNCTION name ( [ [ arg_name ] arg_type [, ...] ] )
RETURNS ret_type
{ LANGUAGE lang_name
   | IMMUTABLE | STABLE | VOLATILE
   | CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT
   | [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
   | AS 'definition'
   | AS 'obj_file', 'link_symbol'
} ...
[ WITH ( attribute [, ...] ) ]
```

- `CREATE GROUP`

  定义一个新的用户组

```sql
CREATE GROUP name [ [ WITH ] option [ ... ] ]
Where option can be:
SYSID gid
| USER username [, ...]
```

- `CREATE INDEX`

  定义一个新索引

```sql
CREATE [ UNIQUE ] INDEX name ON table [ USING method ]
( { column | ( expression ) } [ opclass ] [, ...] )
[ TABLESPACE tablespace ]
[ WHERE predicate ]
```

- `CREATE LANGUAGE`

  定义一种新的过程语言

```sql
CREATE [ TRUSTED ] [ PROCEDURAL ] LANGUAGE name
HANDLER call_handler [ VALIDATOR val_function ]
```

- `CREATE OPERATOR`

  定义一个新的操作符

```sql
CREATE OPERATOR name (
   PROCEDURE = func_name
   [, LEFTARG = left_type ] [, RIGHTARG = right_type ]
   [, COMMUTATOR = com_op ] [, NEGATOR = neg_op ]
   [, RESTRICT = res_proc ] [, JOIN = join_proc ]
   [, HASHES ] [, MERGES ]
   [, SORT1 = left_sort_op ] [, SORT2 = right_sort_op ]
   [, LTCMP = less_than_op ] [, GTCMP = greater_than_op ]
)
```

- `CREATE OPERATOR CLASS`

  定义一个新的操作符表

```sql
CREATE OPERATOR CLASS name [ DEFAULT ] FOR TYPE data_type
USING index_method AS
{ OPERATOR strategy_number operator_name [ ( op_type, op_type ) ] [ RECHECK ]
   | FUNCTION support_number func_name ( argument_type [, ...] )
   | STORAGE storage_type
} [, ... ]
```

- `CREATE ROLE`

  定义一个新的数据库角色

```sql
CREATE ROLE _name_ [ [ WITH ] _option_ [ ... ] ]

where `_option_` can be:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
...
```

- `CREATE RULE`

  定义一个新重写规则

```sql
CREATE [ OR REPLACE ] RULE name AS ON event
TO table [ WHERE condition ]
DO [ ALSO | INSTEAD ] { NOTHING | command | ( command ; command ... ) }
```

- `CREATE SCHEMA`

  定义一个新模式

```sql
CREATE SCHEMA schema_name
[ AUTHORIZATION username ] [ schema_element [ ... ] ]
CREATE SCHEMA AUTHORIZATION username
[ schema_element [ ... ] ]
```

- `CREATE SERVER`

  定义一个新的外部服务器

```sql
CREATE SERVER _server_name_ [ TYPE '_server_type_' ] [ VERSION '_server_version_' ]
    FOREIGN DATA WRAPPER _fdw_name_
    [ OPTIONS ( _option_ '_value_' [, ... ] ) ]
```

- `CREATE SEQUENCE`

  定义一个新序列发生器

```sql
CREATE [ TEMPORARY | TEMP ] SEQUENCE name
[ INCREMENT [ BY ] increment ]
[ MINVALUE minvalue | NO MINVALUE ]
[ MAXVALUE maxvalue | NO MAXVALUE ]
[ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE ]
```

- `CREATE TABLE`

  定义一个新表

```sql
CREATE [ [ GLOBAL | LOCAL ] { 
   TEMPORARY | TEMP } ] TABLE table_name ( { 
      column_name data_type [ DEFAULT default_expr ] [ column_constraint [ ... ] ]
      | table_constraint
      | LIKE parent_table [ { INCLUDING | EXCLUDING } DEFAULTS ] 
   } [, ... ]
)
[ INHERITS ( parent_table [, ... ] ) ]
[ WITH OIDS | WITHOUT OIDS ]
[ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
[ TABLESPACE tablespace ]
```

> `table_constraint` 可以是以下选项之一：

```sql
[ CONSTRAINT constraint_name ]
{ UNIQUE ( column_name [, ... ] ) [ USING INDEX TABLESPACE tablespace ] |
PRIMARY KEY ( column_name [, ... ] ) [ USING INDEX TABLESPACE tablespace ] |
CHECK ( expression ) |
FOREIGN KEY ( column_name [, ... ] )
REFERENCES ref_table [ ( ref_column [, ... ] ) ]
[ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
[ ON DELETE action ] [ ON UPDATE action ] }
[ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
```

- `CREATE TABLE AS`

  从一条查询的结果中定义一个新表

```sql
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } ] TABLE table_name
[ (column_name [, ...] ) ] [ [ WITH | WITHOUT ] OIDS ]
AS query
```

- `CREATE TABLESPACE`

  定义一个新的表空间

```sql
CREATE TABLESPACE tablespace_name [ OWNER username ] LOCATION 'directory'
```

- `CREATE TRIGGER`

  定义一个新的触发器

```sql
CREATE TRIGGER name { BEFORE | AFTER } { event [ OR ... ] }
ON table [ FOR [ EACH ] { ROW | STATEMENT } ]
EXECUTE PROCEDURE func_name ( arguments )
```

- `CREATE TYPE`

  定义一个新的数据类型

```sql
CREATE TYPE name AS
( attribute_name data_type [, ... ] )
CREATE TYPE name (
INPUT = input_function,
OUTPUT = output_function
[, RECEIVE = receive_function ]
[, SEND = send_function ]
[, ANALYZE = analyze_function ]
[, INTERNALLENGTH = { internal_length | VARIABLE } ]
[, PASSEDBYVALUE ]
[, ALIGNMENT = alignment ]
[, STORAGE = storage ]
[, DEFAULT = default ]
[, ELEMENT = element ]
[, DELIMITER = delimiter ]
)
```

- `CREATE USER`

  创建一个新的数据库用户帐户

```sql
CREATE USER name [ [ WITH ] option [ ... ] ]
```

> `option` 可以是以下选项之一：

```sql
SYSID uid
| [ ENCRYPTED | UNENCRYPTED ] PASSWORD 'password'
| CREATEDB | NOCREATEDB
| CREATEUSER | NOCREATEUSER
| IN GROUP group_name [, ...]
| VALID UNTIL 'abs_time'
```

- `CREATE VIEW`

  定义一个视图

```sql
CREATE [ OR REPLACE ] VIEW name [ ( column_name [, ...] ) ] AS query
```

- `DEALLOCATE`

  删除一个准备好的查询

```sql
DEALLOCATE [ PREPARE ] plan_name
```

- `DECLARE`

  定义一个游标

```sql
DECLARE name [ BINARY ] [ INSENSITIVE ] [ [ NO ] SCROLL ]
CURSOR [ { WITH | WITHOUT } HOLD ] FOR query
[ FOR { READ ONLY | UPDATE [ OF column [, ...] ] } ]
```

- `DELETE`

  删除一个表中的行

```sql
DELETE FROM [ ONLY ] table [ WHERE condition ]
```

- `DROP AGGREGATE`

  删除一个用户定义的聚集函数

```sql
DROP AGGREGATE name ( type ) [ CASCADE | RESTRICT ]
```

- `DROP CAST`

  删除一个用户定义的类型转换

```sql
DROP CAST (source_type AS target_type) [ CASCADE | RESTRICT ]
```

- `DROP CONVERSION`

  删除一个用户定义的编码转换

```sql
DROP CONVERSION name [ CASCADE | RESTRICT ]
```

- `DROP DATABASE`

  删除一个数据库

```sql
DROP DATABASE name
```

- `DROP DOMAIN`

  删除一个用户定义的域

```sql
DROP DOMAIN name [, ...] [ CASCADE | RESTRICT ]
```

- `DROP FUNCTION`

  删除一个函数

```sql
DROP FUNCTION name ( [ type [, ...] ] ) [ CASCADE | RESTRICT ]
```

- `DROP GROUP`

  删除一个用户组

```sql
DROP GROUP name
```

- `DROP INDEX`

  删除一个索引

```sql
DROP INDEX name [, ...] [ CASCADE | RESTRICT ]
```

- `DROP LANGUAGE`

  删除一个过程语言

```sql
DROP [ PROCEDURAL ] LANGUAGE name [ CASCADE | RESTRICT ]
```

- `DROP OPERATOR`

  删除一个操作符

```sql
DROP OPERATOR name ( { left_type | NONE }, { right_type | NONE } )
[ CASCADE | RESTRICT ]
```

- `DROP OPERATOR CLASS`

  删除一个操作符表

```sql
DROP OPERATOR CLASS name USING index_method [ CASCADE | RESTRICT ]
```

- `DROP ROLE`

  删除一个数据库角色

```sql
DROP ROLE [ IF EXISTS ] _name_ [, ...]
```

- `DROP RULE`

  删除一个重写规则

```sql
DROP RULE name ON relation [ CASCADE | RESTRICT ]
```

- `DROP SCHEMA`

  删除一个模式

```sql
DROP SCHEMA name [, ...] [ CASCADE | RESTRICT ]
```

- `DROP SEQUENCE`

  删除一个序列

```sql
DROP SEQUENCE name [, ...] [ CASCADE | RESTRICT ]
```

- `DROP TABLE`

  删除一个表

```sql
DROP TABLE name [, ...] [ CASCADE | RESTRICT ]
```

- `DROP TABLESPACE`

  删除一个表空间

```sql
DROP TABLESPACE tablespace_name
```

- `DROP TRIGGER`

  删除一个触发器定义

```sql
DROP TRIGGER name ON table [ CASCADE | RESTRICT ]
```

- `DROP TYPE`

  删除一个用户定义数据类型

```sql
DROP TYPE name [, ...] [ CASCADE | RESTRICT ]
```

- `DROP USER`

  删除一个数据库用户帐号

```sql
DROP USER name
```

- `DROP VIEW`

  删除一个视图

```sql
DROP VIEW name [, ...] [ CASCADE | RESTRICT ]
```

- `END`

  提交当前的事务

```sql
END [ WORK | TRANSACTION ]
```

- `EXECUTE`

  执行一个准备好的查询

```sql
EXECUTE plan_name [ (parameter [, ...] ) ]
```

- `EXPLAIN`

  显示一个语句的执行规划

```sql
EXPLAIN [ ANALYZE ] [ VERBOSE ] statement
```

- `FETCH`

  用游标从查询中抓取行

```sql
FETCH [ direction { FROM | IN } ] cursor_name
```

> `direction` 可以是以下选项之一：

```sql
NEXT
PRIOR
FIRST
LAST
ABSOLUTE count
RELATIVE count
count
ALL
FORWARD
FORWARD count
FORWARD ALL
BACKWARD
BACKWARD count
BACKWARD ALL
```

- GRANT

  定义访问权限

```sql
GRANT { { SELECT | INSERT | UPDATE | DELETE | RULE | REFERENCES | TRIGGER }
[,...] | ALL [ PRIVILEGES ] }
ON [ TABLE ] table_name [, ...]
TO { username | GROUP group_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { { CREATE | TEMPORARY | TEMP } [,...] | ALL [ PRIVILEGES ] }
ON DATABASE db_name [, ...]
TO { username | GROUP group_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { CREATE | ALL [ PRIVILEGES ] }
ON TABLESPACE tablespace_name [, ...]
TO { username | GROUP group_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { EXECUTE | ALL [ PRIVILEGES ] }
ON FUNCTION func_name ([type, ...]) [, ...]
TO { username | GROUP group_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
ON LANGUAGE lang_name [, ...]
TO { username | GROUP group_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { { CREATE | USAGE } [,...] | ALL [ PRIVILEGES ] }
ON SCHEMA schema_name [, ...]
TO { username | GROUP group_name | PUBLIC } [, ...] [ WITH GRANT OPTION ]
```

- `INSERT`

  在表中创建新行，即插入数据

```sql
INSERT INTO table [ ( column [, ...] ) ]
{ DEFAULT VALUES | VALUES ( { expression | DEFAULT } [, ...] ) | query }
```

- `LISTEN`

  监听一个通知

```sql
LISTEN name
```

- `LOAD`

  加载或重载一个共享库文件

```sql
LOAD 'filename'
```

- `LOCK`

  锁定一个表

```sql
LOCK [ TABLE ] name [, ...] [ IN lock_mode MODE ] [ NOWAIT ]
```

> `lock_mode` 可以是以下选项之一：

```sql
ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE
| SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE
```

- `MOVE`

  定位一个游标

```sql
MOVE [ direction { FROM | IN } ] cursor_name
```

- `NOTIFY`

  生成一个通知

```sql
NOTIFY name
```

- `PREPARE`

  创建一个准备好的查询

```sql
PREPARE plan_name [ (data_type [, ...] ) ] AS statement
```

- `REINDEX`

  重建索引

```sql
REINDEX { DATABASE | TABLE | INDEX } name [ FORCE ]
```

- `RELEASE SAVEPOINT`

  删除一个前面定义的保存点

```sql
RELEASE [ SAVEPOINT ] savepoint_name
```

- `RESET`

  把一个运行时参数值恢复为默认值

```sql
RESET name
RESET ALL
```

- `REVOKE`

  删除访问权限

```sql
REVOKE [ GRANT OPTION FOR ]
{ { SELECT | INSERT | UPDATE | DELETE | RULE | REFERENCES | TRIGGER }
[,...] | ALL [ PRIVILEGES ] }
ON [ TABLE ] table_name [, ...]
FROM { username | GROUP group_name | PUBLIC } [, ...]
[ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
{ { CREATE | TEMPORARY | TEMP } [,...] | ALL [ PRIVILEGES ] }
ON DATABASE db_name [, ...]
FROM { username | GROUP group_name | PUBLIC } [, ...]
[ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
{ CREATE | ALL [ PRIVILEGES ] }
ON TABLESPACE tablespace_name [, ...]
FROM { username | GROUP group_name | PUBLIC } [, ...]
[ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
{ EXECUTE | ALL [ PRIVILEGES ] }
ON FUNCTION func_name ([type, ...]) [, ...]
FROM { username | GROUP group_name | PUBLIC } [, ...]
[ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
{ USAGE | ALL [ PRIVILEGES ] }
ON LANGUAGE lang_name [, ...]
FROM { username | GROUP group_name | PUBLIC } [, ...]
[ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
{ { CREATE | USAGE } [,...] | ALL [ PRIVILEGES ] }
ON SCHEMA schema_name [, ...]
FROM { username | GROUP group_name | PUBLIC } [, ...]
[ CASCADE | RESTRICT ]
```

- `ROLLBACK`

  退出当前事务

```sql
ROLLBACK [ WORK | TRANSACTION ]
```

> 参考资料：
> - `ABORT` 与 `ROLLBACK` 功能一致，区别就是 `ABORT` 很早以前使用的语句，现在都用 `ROLLBACK`
> - 有些 SQL 中还能使用 `ABORT` 可能是为了兼容性考虑

- `ROLLBACK TO SAVEPOINT`

  回滚到一个保存点

```sql
ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] savepoint_name
```

- `SAVEPOINT`

  在当前事务里定义一个新的保存点

```sql
SAVEPOINT savepoint_name
```

- `SELECT`

  从表或视图中取出若干行

```sql
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
* | expression [ AS output_name ] [, ...]
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY expression [, ...] ]
[ HAVING condition [, ...] ]
[ { UNION | INTERSECT | EXCEPT } [ ALL ] select ]
[ ORDER BY expression [ ASC | DESC | USING operator ] [, ...] ]
[ LIMIT { count | ALL } ]
[ OFFSET start ]
[ FOR UPDATE [ OF table_name [, ...] ] ]
```

> `from_item` 可以是以下选项：

```sql
[ ONLY ] table_name [ * ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
function_name ( [ argument [, ...] ] )
[ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
from_item [ NATURAL ] join_type from_item
[ ON join_condition | USING ( join_column [, ...] ) ]
```

- `SELECT INTO`

  从一个查询的结果中定义一个新表

```sql
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
* | expression [ AS output_name ] [, ...]
INTO [ TEMPORARY | TEMP ] [ TABLE ] new_table
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY expression [, ...] ]
[ HAVING condition [, ...] ]
[ { UNION | INTERSECT | EXCEPT } [ ALL ] select ]
[ ORDER BY expression [ ASC | DESC | USING operator ] [, ...] ]
[ LIMIT { count | ALL } ]
[ OFFSET start ]
[ FOR UPDATE [ OF table_name [, ...] ] ]
```

- `SET`

  修改运行时参数

```sql
SET [ SESSION | LOCAL ] name { TO | = } { value | 'value' | DEFAULT }
SET [ SESSION | LOCAL ] TIME ZONE { time_zone | LOCAL | DEFAULT }
```

- `SET CONSTRAINTS`

  设置当前事务的约束检查模式

```sql
SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE }
```

- `SET SESSION AUTHORIZATION`

  为当前会话设置会话用户标识符和当前用户标识符

```sql
SET [ SESSION | LOCAL ] SESSION AUTHORIZATION username
SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT
RESET SESSION AUTHORIZATION
```

- `SET TRANSACTION`

  开始一个事务块

```sql
SET TRANSACTION transaction_mode [, ...]
SET SESSION CHARACTERISTICS AS TRANSACTION transaction_mode [, ...]
```

> `transaction_mode` 可以是以下之一：

```sql
ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED
| READ UNCOMMITTED }
READ WRITE | READ ONLY
```

- `SHOW`

  显示运行时参数的值

```sql
SHOW name
SHOW ALL
```

- `START TRANSACTION`

  开始一个事务块

```sql
START TRANSACTION [ transaction_mode [, ...] ]
```

> `transaction_mode` 可以是下面的选项之一：

```sql
ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED
| READ UNCOMMITTED }
READ WRITE | READ ONLY
```

- `TRUNCATE`

  清空一个或一组表

```sql
TRUNCATE [ TABLE ] name
```

- `UNLISTEN`

  停止监听通知信息

```sql
UNLISTEN { name | * }
```

- `UPDATE`

  更新一个表中的行

```sql
UPDATE [ ONLY ] table SET column = { expression | DEFAULT } [, ...]
[ FROM from_list ]
[ WHERE condition ]
```

- `VACUUM`

  垃圾收集以及可选地分析一个数据库

```sql
VACUUM [ FULL ] [ FREEZE ] [ VERBOSE ] [ table ]
VACUUM [ FULL ] [ FREEZE ] [ VERBOSE ] ANALYZE [ table [ (column [, ...] ) ] ]
```

- `VALUES`

  计算一个或一组行

```sql
VALUES ( _expression_ [, ...] ) [, ...]
    [ ORDER BY _sort_expression_ [ ASC | DESC | USING _operator_ ] [, ...] ]
    [ LIMIT { _count_ | ALL } ]
    [ OFFSET _start_ [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ _count_ ] { ROW | ROWS } ONLY ]
```

#### [【更多内容可以参考手册中的 SQL 语法】](http://www.runoob.com/manual/PostgreSQL/sql-syntax.html)

## 数据类型

PostgreSQL 的数据类型是我们再创建表的时候为每个字段设置的，设置数据类型的好处：

- PostgreSQL 提供了丰富的数据类型

- 用户可以使用 `CREATE TYPE` 命令在数据库中创建新的数据类型

- PostgreSQL 的数据类型有很多种

  - 数值类型
  - 货币类型
  - 字符类型
  - 日期/时间类型
  - 布尔类型
  - 枚举类型
  - 几何类型
  - 网络地址类型
  - 位串类型
  - 文本搜索类型
  - UUID 类型
  - XML 类型
  - JSON 类型
  - 数组类型
  - 复合类型
  - 范围类型
  - 对象标识符类型
  - 伪类型

> [【更多内容参考：PostgreSQL 数据类型】](https://www.runoob.com/manual/PostgreSQL/datatype.html)丨[【 PostgreSQL 官方文档：数据类型】](https://www.postgresql.org/docs/11/datatype.html)

### 数值类型

数值类型由 2 字节、4 字节或 8 字节的整数以及 4 字节或 8 字节的浮点数和可选精度的十进制数组成

名字|存储长度|描述|范围
-|-|-|-
smallint|2 字节|小范围整数|-32768 到 +32767
integer|4 字节|常用的整数|-2147483648 到 +2147483647
bigint|8 字节|大范围整数|-9223372036854775808 到 +9223372036854775807
decimal|可变长|用户指定的精度，精确|小数点前 131072 位；小数点后 16383 位
numeric|可变长|用户指定的精度，精确|小数点前 131072 位；小数点后 16383 位
real|4 字节|可变精度，不精确|6 位十进制数字精度
double precision|8 字节|可变精度，不精确|15 位十进制数字精度
smallserial|2 字节|自增的小范围整数|1 到 32767
serial|4 字节|自增整数|1 到 2147483647
bigserial|8 字节|自增的大范围整数|1 到 9223372036854775807

### 货币类型

money 类型存储带有固定小数精度的货币金额

> `numeric` 、`int` 和 `bigint` 类型的值可以转换为 `money` ，不建议使用浮点数来处理处理货币类型，因为存在舍入错误的可能性

名字|存储容量|描述|范围
-|-|-|-
money|8 字节|货币金额|-92233720368547758.08 到 +92233720368547758.07

### 字符类型

序号|名字|描述
-|-|-
1|character varying(n), varchar(n)|变长，有长度限制
2|character(n), char(n)|定长,不足补空白
3|text|变长，无长度限制

### 日期 / 时间类型

名字|存储空间|描述|最低值|最高值|分辨率
-|-|-|-|-|-
timestamp [ (p) ] [ without time zone ]|8 字节|日期和时间(无时区)|4713 BC|294276 AD|1 毫秒 / 14 位
timestamp [ (p) ] with time zone|8 字节|日期和时间，有时区|4713 BC|294276 AD|1 毫秒 / 14 位
date|4 字节|只用于日期|4713 BC|5874897 AD|1 天
time [ (p) ] [ without time zone ]|8 字节|只用于一日内时间|00:00:00|24:00:00|1 毫秒 / 14 位
time [ (p) ] with time zone|12 字节|只用于一日内时间，带时区|00:00:00+1459|24:00:00-1459|1 毫秒 / 14 位
interval [ fields ] [ (p) ]|12 字节|时间间隔|-178000000 年|178000000 年|1 毫秒 / 14 位

### 布尔类型

PostgreSQL 支持标准的 boolean 数据类型：boolean 有 `true` (真)或 `false` (假)两个状态， 第三种 `unknown` (未知)状态，用 `NULL` 表示

名称|存储格式|描述
-|-|-
boolean|1 字节|true/false

### 枚举类型

枚举类型是一个包含静态和值的有序集合的数据类型

- PostgtesSQL 中的枚举类型类似于 C 语言中的 `enum` 类型

- 与其他类型不同的是枚举类型需要使用 `CREATE TYPE` 命令创建

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
```

> `enum` 是计算机编程语言中的一种数据类型
> - 枚举类型：在实际问题中，有些变量的取值被限定在一个有限的范围内
> - 例如，一个星期内只有七天，一年只有十二个月，一个班每周有六门课程等等
> - 如果把这些量说明为整型，字符型或其它类型显然是不妥当的
> - 为此，**`C 语言`** 提供了一种称为 **`枚举`** 的类型
>> 在 **`枚举`** 类型的定义中列举出所有可能的取值，被说明为该 **`枚举`** 类型的变量取值不能超过定义的范围
>>> 应该说明的是，枚举类型是一种基本数据类型，而不是一种构造类型，因为它不能再分解为任何基本类型

创建一周中的几天，如下所示：

```sql
CREATE TYPE week AS ENUM ('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
```

就像其他类型一样，一旦创建，枚举类型可以用于表和函数定义：

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
CREATE TABLE person (
    name text,
    current_mood mood
);
INSERT INTO person VALUES ('Moe', 'happy');
SELECT * FROM person WHERE current_mood = 'happy';
 name | current_mood 
------+--------------
 Moe  | happy
(1 row)
```

### 几何类型

几何数据类型表示二维的平面物体，最基本的类型：**`点`** (它是其它类型的基础)

名字|存储空间|说明|表现形式
-|-|-|-
point|16 字节|平面中的点|(x,y)
line|32 字节|(无穷)直线(未完全实现)|((x1,y1),(x2,y2))
lseg|32 字节|(有限)线段|((x1,y1),(x2,y2))
box|32 字节|矩形|((x1,y1),(x2,y2))
path|16+16n 字节|闭合路径(与多边形类似)|((x1,y1),...)
path|16+16n 字节|开放路径|[(x1,y1),...]
polygon|40+16n 字节|多边形(与闭合路径相似)|((x1,y1),...)
circle|24 字节|圆|<(x,y),r> (圆心和半径)

### 网络地址类型

PostgreSQL 提供用于存储 `IPv4` 、`IPv6` 、`MAC` 地址的数据类型

> 用这些数据类型存储网络地址比用纯文本类型好， 因为这些类型提供输入错误检查和特殊的操作和功能

名字|存储空间|描述
-|-|-
cidr|7 或 19 字节|IPv4 或 IPv6 网络
inet|7 或 19 字节|IPv4 或 IPv6 主机和网络
macaddr|6 字节|MAC 地址

> 在对 `inet` 或 `cidr` 数据类型进行排序的时候，`IPv4` 地址总是排在 `IPv6` 地址前面
> - 包括那些封装或者是映射在 `IPv6` 地址里的 `IPv4` 地址
> - 比如 `::10.2.3.4` 或 `::ffff:10.4.3.2`

### 位串类型

位串就是一串 `1` 和 `0` 的字符串

- 它们可以用于存储和直观化位掩码
- 我们有两种 SQL 位类型( `n` 是一个正整数)：

  - `bit(n)`

    `bit` 类型的数据必须准确匹配长度 `n` ，试图存储短些或者长一些的数据都是错误的
  
  - `bit varying(n)`
  
    写一个没有长度的 `bit` 等效于 `bit(1)` ， 没有长度的 `bit varying` 意思是没有长度限制

### 文本搜索类型 

全文检索即通过自然语言文档的集合来找到那些匹配一个查询的检索

序号|名字|描述
-|-|-
1|tsvector|tsvector 值是一个无重复值的 lexemes 排序列表， 即一些同一个词的不同变种的标准化
2|tsquery|tsquery 存储用于检索的词汇，并且使用布尔操作符 &(AND)，|(OR)和!(NOT) 来组合它们，括号用来强调操作符的分组

### UUID 类型

uuid 数据类型用来存储 `RFC 4122` ，`ISO/IEF 9834-8:2005` 以及相关标准定义的通用唯一标识符( `UUID` )

- 一些系统认为这个数据类型为全球唯一标识符，或 `GUID`
  
- 这个标识符是一个由算法产生的 `128` 位标识符，使它不可能在已知使用相同算法的模块中和其他方式产生的标识符相同

- 因此，对分布式系统而言，这种标识符比序列能更好的提供唯一性保证，因为序列只能在单一数据库中保证唯一

`UUID` 被写成一个小写十六进制数字的序列，由分字符分成几组

- 特别是一组 **`8 位数字`** + **`3 组 4 位数字`** + **`1 组 12 位数字`** ，总共 **`32 个数字`** 代表 `128` 位

- 一个这种标准的 `UUID` 例子如下：

```sql
a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11
```

### XML 类型

xml 数据类型可以用于存储XML数据

- 将 XML 数据存到 text 类型中的优势在于它能够为结构良好性来检查输入值，并且还支持函数对其进行类型安全性检查

- 要使用这个数据类型，编译时必须使用 `configure --with-libxml`

xml 可以存储以下两项内容，大致上，这意味着内容片段可以有多个顶级元素或字符节点：

- 由 XML 标准定义的格式良好的 **`文档`** 
- 由 XML 标准中的 `XMLDecl? content` 定义的 **`内容`** 片段

> `xmlvalue IS DOCUMENT` 表达式可以用来判断一个特定的 xml 值是一个完整的文件还是内容片段

#### 创建 XML 值

使用函数 `xmlparse` 来从字符数据产生 xml 类型的值：

```sql
XMLPARSE (DOCUMENT '<?xml version="1.0"?><book><title>Manual</title><chapter>...</chapter></book>')
XMLPARSE (CONTENT 'abc<foo>bar</foo><bar>foo</bar>')
```

### JSON 类型

json 数据类型可以用来存储 `JSON(JavaScript Object Notation)` 数据，这样的数据也可以存储为 `text` ，但是 json 数据类型更有利于检查每个存储的数值是可用的 JSON 值

- 此外还有相关的函数来处理 json 数据：

实例|实例结果
-|-
`array_to_json('{{1,5},{99,100}}'::int[])`|`[[1,5],[99,100]]`
`row_to_json(row(1,'foo'))`|`{"f1":1,"f2":"foo"}`

### 数组类型

PostgreSQL 允许将字段定义成变长的多维数组

- 数组类型可以是任何基本类型或用户定义类型，枚举类型或复合类型

#### 声明数组

创建表的时候，我们可以声明数组，方式如下：

```sql
CREATE TABLE sal_emp (
    name            text,
    pay_by_quarter  integer[],
    schedule        text[][]
);
```

- `pay_by_quarter` 为一位整型数组

- `schedule` 为二维文本类型数组

我们也可以使用 `ARRAY` 关键字，如下所示：

```sql
CREATE TABLE sal_emp (
   name text,
   pay_by_quarter integer ARRAY[4],
   schedule text[][]
);
```

#### 插入值

插入值使用花括号 `{}` ，元素在 `{}` 使用逗号隔开：

```sql
INSERT INTO sal_emp
    VALUES ('Bill',
    '{10000, 10000, 10000, 10000}',
    '{{"meeting", "lunch"}, {"training", "presentation"}}');

INSERT INTO sal_emp
    VALUES ('Carol',
    '{20000, 25000, 25000, 25000}',
    '{{"breakfast", "consulting"}, {"meeting", "lunch"}}');
```

#### 访问数组

现在我们可以在这个表上运行一些查询

- 首先，我们演示如何访问数组的一个元素

- 这个查询检索在第二季度薪水变化的雇员名

```sql
SELECT name FROM sal_emp WHERE pay_by_quarter[1] <> pay_by_quarter[2];

 name
-------
 Carol
(1 row)
```

> 数组的下标数字是写在方括弧内的

#### 修改数组

我们可以对数组的值进行修改：

```sql
UPDATE sal_emp SET pay_by_quarter = '{25000,25000,27000,27000}'
    WHERE name = 'Carol';
```

或者使用 `ARRAY` 构造器语法：

```sql
UPDATE sal_emp SET pay_by_quarter = ARRAY[25000,25000,27000,27000]
    WHERE name = 'Carol';
```

#### 数组中检索

要搜索一个数组中的数值，你必须检查该数组的每一个值，比如：

```sql
SELECT * FROM sal_emp WHERE pay_by_quarter[1] = 10000 OR
                            pay_by_quarter[2] = 10000 OR
                            pay_by_quarter[3] = 10000 OR
                            pay_by_quarter[4] = 10000;
```

另外，你可以用下面的语句找出数组中所有元素值都等于 `10000` 的行：

```sql
SELECT * FROM sal_emp WHERE 10000 = ALL (pay_by_quarter);
```

或者，可以使用 `generate_subscripts` 函数，例如：

```sql
SELECT * FROM
   (SELECT pay_by_quarter,
           generate_subscripts(pay_by_quarter, 1) AS s
      FROM sal_emp) AS foo
 WHERE pay_by_quarter[s] = 10000;
```

### 复合类型

复合类型表示一行或者一条记录的结构

- 它实际上只是一个字段名和它们的数据类型的列表

- PostgreSQL 允许像简单数据类型那样使用复合类型

- 比如，一个表的某个字段可以声明为一个复合类型

#### 声明复合类型

下面是两个定义复合类型的简单例子：

```sql
CREATE TYPE complex AS (
    r       double precision,
    i       double precision
);

CREATE TYPE inventory_item AS (
    name            text,
    supplier_id     integer,
    price           numeric
);
```

语法类似于 `CREATE TABLE` ，只是这里只可以声明字段名字和类型，定义了类型，我们就可以用它创建表：

```sql
CREATE TABLE on_hand (
    item      inventory_item,
    count     integer
);

INSERT INTO on_hand VALUES (ROW('fuzzy dice', 42, 1.99), 1000);
```

#### 复合类型值输入

要以文本常量书写复合类型值，在圆括弧里包围字段值并且用逗号分隔他们

- 你可以在任何字段值周围放上双引号，如果值本身包含逗号或者圆括弧，你必须用双引号括起

- 复合类型常量的一般格式如下：

```sql
'( val1 , val2 , ... )'
```

- 一个例子是：

```sql
'("fuzzy dice",42,1.99)'
```

#### 访问复合类型

要访问复合类型字段的一个域，我们写出一个点以及域的名字，非常类似从一个表名字里选出一个字段

- 实际上，因为实在太像从表名字中选取字段，所以我们经常需要用圆括弧来避免分析器混淆

比如，你可能需要从 `on_hand` 例子表中选取一些子域，像下面这样：

```sql
SELECT item.name FROM on_hand WHERE item.price > 9.99;
```

- 这样将不能工作，因为根据 SQL 语法，item 是从一个表名字选取的，而不是一个字段名字，你必须像下面这样写：

```sql
SELECT (item).name FROM on_hand WHERE (item).price > 9.99;
```

- 或者如果你也需要使用表名字(比如，在一个多表查询里)，那么这么写：

```sql
SELECT (on_hand.item).name FROM on_hand WHERE (on_hand.item).price > 9.99;
```

- 现在圆括弧对象正确地解析为一个指向 item 字段的引用，然后就可以从中选取子域

### 范围类型

范围数据类型代表着某一元素类型在一定范围内的值

- 例如，timestamp 范围可能被用于代表一间会议室被预定的时间范围

PostgreSQL 内置的范围类型有：

- int4range — integer 的范围

- int8range —bigint 的范围

- numrange —numeric 的范围

- tsrange —timestamp without time zone 的范围

- tstzrange —timestamp with time zone 的范围

- daterange —date 的范围

> 此外，你可以定义你自己的范围类型

```sql
CREATE TABLE reservation (room int, during tsrange);
INSERT INTO reservation VALUES
    (1108, '[2010-01-01 14:30, 2010-01-01 15:30)');

-- 包含
SELECT int4range(10, 20) @> 3;

-- 重叠
SELECT numrange(11.1, 22.2) && numrange(20.0, 30.0);

-- 提取上边界
SELECT upper(int8range(15, 25));

-- 计算交叉
SELECT int4range(10, 20) * int4range(15, 25);

-- 范围是否为空
SELECT isempty(numrange(1, 5));
```

范围值的输入必须遵循下面的格式：

- 圆括号或者方括号显示下边界和上边界是不包含的还是包含的

```
(下边界,上边界)
(下边界,上边界]
[下边界,上边界)
[下边界,上边界]
空
```

> 注意最后的格式是 **`空`** ，代表着一个空的范围(一个不含有值的范围)

```sql
-- 包括3，不包括7，并且包括二者之间的所有点
SELECT '[3,7)'::int4range;

-- 不包括3和7，但是包括二者之间所有点
SELECT '(3,7)'::int4range;

-- 只包括单一值4
SELECT '[4,4]'::int4range;

-- 不包括点(被标准化为‘空’)
SELECT '[4,4)'::int4range;
```

### 对象标识符类型

PostgreSQL 在内部使用 **`对象标识符(OID)`** 作为各种系统表的主键

- 同时，系统不会给用户创建的表增加一个 `OID` 系统字段

  除非在建表时声明了 `WITH OIDS` 或者配置参数 `default_with_oids` 设置为开启

- oid 类型代表一个对象标识符

- 除此以外 oid 还有几个别名：

  - regproc
  - regprocedure
  - regoper
  - regoperator
  - regclass
  - regtype
  - regconfig
  - regdictionary

名字|引用|描述|数值例子
-|-|-|-
oid|任意|数字化的对象标识符|564182
regproc|pg_proc|函数名字|sum
regprocedure|pg_proc|带参数类型的函数|sum(int4)
regoper|pg_operator|操作符名|+
regoperator|pg_operator|带参数类型的操作符|*(integer,integer) 或 -(NONE,integer)
regclass|pg_class|关系名|pg_type
regtype|pg_type|数据类型名|integer
regconfig|pg_ts_config|文本搜索配置|english
regdictionary|pg_ts_dict|文本搜索字典|simple

### 伪类型

PostgreSQL 类型系统包含一系列特殊用途的条目，它们按照类别来说叫做伪类型

- 伪类型不能作为字段的数据类型，但是它可以用于声明一个函数的参数或者结果类型

- 伪类型在一个函数不只是简单地接受并返回某种 SQL 数据类型的情况下很有用

- 下表列出了所有的伪类型：

名字|描述
-|-
any|表示一个函数接受任何输入数据类型
anyelement|表示一个函数接受任何数据类型
anyarray|表示一个函数接受任意数组数据类型
anynonarray|表示一个函数接受任意非数组数据类型
anyenum|表示一个函数接受任意枚举数据类型
anyrange|表示一个函数接受任意范围数据类型
cstring|表示一个函数接受或者返回一个空结尾的 C 字符串
internal|表示一个函数接受或者返回一种服务器内部的数据类型
language_handler|一个过程语言调用处理器声明为返回language_handler
fdw_handler|一个外部数据封装器声明为返回fdw_handler
record|标识一个函数返回一个未声明的行类型
trigger|一个触发器函数声明为返回trigger
void|表示一个函数不返回数值
opaque|一个已经过时的类型，以前用于所有上面这些用途

> [【更多内容参考：PostgreSQL 数据类型】](https://www.runoob.com/manual/PostgreSQL/datatype.html)丨[【 PostgreSQL 官方文档：数据类型】](https://www.postgresql.org/docs/11/datatype.html)

## 创建数据库

PostgreSQL 创建数据库可以用以下三种方式：

- 使用 `CREATE DATABASE SQL` 语句来创建

- 使用 `createdb` 命令来创建

- 使用 `pgAdmin` 等数据库管理工具

### `CREATE DATABASE` 创建数据库

`CREATE DATABASE` 命令需要在 PostgreSQL 命令窗口来执行，语法格式如下：

```sql
CREATE DATABASE dbname;
```

例如，我们创建一个 `runoobdb` 的数据库：

```sql
postgres=# CREATE DATABASE runoobdb;
```

### `createdb` 命令创建数据库

`createdb` 是一个 SQL 命令 `CREATE DATABASE` 的封装，命令语法格式如下：

```
createdb [option...] [dbname [description]]
```

参数说明：

- dbname

  要创建的数据库名

- description

  关于新创建的数据库相关的说明

- options

  参数可选项，可以是以下值：

序号|选项|描述
-|-|-
1|-D tablespace|指定数据库默认表空间
2|-e|将 createdb 生成的命令发送到服务端
3|-E encoding|指定数据库的编码
4|-l locale|指定数据库的语言环境
5|-T template|指定创建此数据库的模板
6|--help|显示 createdb 命令的帮助信息
7|-h host|指定服务器的主机名
8|-p port|指定服务器监听的端口，或者 socket 文件
9|-U username|连接数据库的用户名
10|-w|忽略输入密码
11|-W|连接时强制要求输入密码

接下来我们打开一个命令窗口，进入到 PostgreSQL 的安装目录，并进入到 bin 目录，`createdb` 命令位于 PostgreSQL 安装目录 `/bin` 下，执行创建数据库的命令：

```
$ cd /Library/PostgreSQL/11/bin/
$ createdb -h localhost -p 5432 -U postgres runoobdb
password ******
```

- 以上命令我们使用了超级用户 postgres 登录到主机地址为 `localhost` ，端口号为 `5432` 的 PostgreSQL 数据库中并创建 `runoobdb` 数据库

### pgAdmin 工具创建数据库

pgAdmin 工具提供了完整操作数据库的功能：

![pgAdmin](https://www.runoob.com/wp-content/uploads/2019/05/60962103-5153-4729-824F-1E0692B9C48F.jpg)

## 选择数据库

### 数据库的命令窗口

PostgreSQL 命令窗口中，我们可以命令提示符后面输入 SQL 语句：

```
postgres=#
```

- 使用 `\l` 用于查看已经存在的数据库：

```sql
postgres=# \l
                             List of databases
   Name    |  Owner   | Encoding | Collate | Ctype |   Access privileges   
-----------+----------+----------+---------+-------+-----------------------
 postgres  | postgres | UTF8     | C       | C     | 
 runoobdb  | postgres | UTF8     | C       | C     | 
 template0 | postgres | UTF8     | C       | C     | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 template1 | postgres | UTF8     | C       | C     | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
(4 rows)
```

- 接下来我们可以使用 **`\c + 数据库名`** 来进入数据库：

```
postgres=# \c runoobdb
You are now connected to database "runoobdb" as user "postgres".
runoobdb=# 
```

### 系统命令行窗口

在系统的命令行查看，我么可以在连接数据库后面添加数据库名来选择数据库：

```
$ psql -h localhost -p 5432 -U postgress testdb
Password for user postgress: ****
psql (11.3)
Type "help" for help.
You are now connected to database "runoobdb" as user "postgres".
runoobdb=#
```

### pgAdmin 工具

pgAdmin 工具更简单了，直接点击数据库选择就好了，还可以查看一些数据库额外的信息：

![pgAdmin 工具](https://www.runoob.com/wp-content/uploads/2019/05/029E4150-C4C3-47BE-8CCE-9267335EDBBB.jpg)

## 删除数据库

PostgreSQL 删除数据库可以用以下三种方式：

- 使用 `DROP DATABASE SQL` 语句来删除

- 使用 `dropdb` 命令来删除

- 使用 `pgAdmin` 工具

> 注意：删除数据库要谨慎操作，一旦删除，所有信息都会消失

### `DROP DATABASE` 删除数据库

`DROP DATABASE` 会删除数据库的系统目录项并且删除包含数据的文件目录

- 只能由超级管理员或数据库拥有者执行

- 需要在 PostgreSQL 命令窗口来执行，语法格式如下：

```sql
DROP DATABASE [ IF EXISTS ] name
```

- 参数说明：

  - `IF EXISTS`
  
    如果数据库不存在则发出提示信息，而不是错误信息

  - name
  
    要删除的数据库的名称

例如，我们删除一个 runoobdb 的数据库：

```sql
postgres=# DROP DATABASE runoobdb;
```

### `dropdb` 命令删除数据库

`dropdb` 是 `DROP DATABASE` 的包装器

- 用于删除 PostgreSQL 数据库

- 命令只能由超级管理员或数据库拥有者执行

- 语法格式如下：

```
dropdb [connection-option...] [option...] dbname
```

- 参数说明：

  - dbname
  
    要删除的数据库名

  - options
  
    参数可选项，可以是以下值：

序号|选项|描述
-|-|-
1|-e|显示 dropdb 生成的命令并发送到数据库服务器
2|-i|在做删除的工作之前发出一个验证提示
3|-V|打印 dropdb 版本并退出
4|--if-exists|如果数据库不存在则发出提示信息，而不是错误信息
5|--help|显示有关 dropdb 命令的帮助信息
6|-h host|指定运行服务器的主机名
7|-p port|指定服务器监听的端口，或者 socket 文件
8|-U username|连接数据库的用户名
9|-w|连接数据库的用户名
10|-W|连接时强制要求输入密码
11|--maintenance-db=dbname|删除数据库时指定连接的数据库，默认为 `postgres` ，如果它不存在则使用 `template1`

接下来我们打开一个命令窗口，进入到 PostgreSQL 的安装目录，并进入到 `bin` 目录，`dropdb` 命令位于 PostgreSQL 安装目录 `/bin` 下，执行删除数据库的命令：

```
$ cd /Library/PostgreSQL/11/bin/
$ dropdb -h localhost -p 5432 -U postgres runoobdb
password ******
```

- 以上命令我们使用了超级用户 postgres 登录到主机地址为 `localhost` ，端口号为 `5432` 的 PostgreSQL 数据库中并删除 `runoobdb` 数据库

### pgAdmin 工具删除据库

pgAdmin 工具提供了完整操作数据库的功能：

![pgAdmin 工具](https://www.runoob.com/wp-content/uploads/2019/05/ABFD169B-E677-4061-AF1E-DB3CCF1B0010.jpg)

## 创建表格

PostgreSQL 使用 `CREATE TABLE` 语句来创建数据库表格，语法格式如下：

```sql
CREATE TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( 一个或多个列 )
);
```

- `CREATE TABLE` 是一个关键词，用于告诉数据库系统将创建一个数据表

- 表名字必需在同一模式中的 **`其它表`** 、**`序列`** 、**`索引`** 、**`视图`** 或 **`外部表`** 名字中唯一

- `CREATE TABLE` 在当前数据库创建一个新的空白表，该表将由发出此命令的用户所拥有

- 表格中的每个字段都会定义数据类型

以下创建了一个表，表名为 `COMPANY` 表格，主键为 `ID` 、`NOT NULL` 表示字段不允许包含 `NULL` 值：

```sql
CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

- 接下来我们再创建一个表格，在后面章节会用到：

```sql
CREATE TABLE DEPARTMENT(
   ID INT PRIMARY KEY      NOT NULL,
   DEPT           CHAR(50) NOT NULL,
   EMP_ID         INT      NOT NULL
);
```

- 我们可以使用 `\d` 命令来查看表格是否创建成功：

```sql
runoobdb=# \d
           List of relations
 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | company    | table | postgres
 public | department | table | postgres
(2 rows)
```

- \d tablename 查看表格信息：

```sql
runoobdb=# \d company
                  Table "public.company"
 Column  |     Type      | Collation | Nullable | Default 
---------+---------------+-----------+----------+---------
 id      | integer       |           | not null | 
 name    | text          |           | not null | 
 age     | integer       |           | not null | 
 address | character(50) |           |          | 
 salary  | real          |           |          | 
Indexes:
    "company_pkey" PRIMARY KEY, btree (id)
```

## 删除表格

PostgreSQL 使用 `DROP TABLE` 语句来删除表格，包含表格 **`数据`** 、**`规则`** 、**`触发器`** 等，语法格式如下：

```sql
DROP TABLE table_name;
```

> 删除表格要慎重，删除后所有信息就消失了

在前文中我们创建了 `COMPANY` 和 `DEPARTMENT` 两个表格，我们可以先使用 `\d` 命令来查看表格是否创建成功：

```sql
runoobdb=# \d
           List of relations
 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | company    | table | postgres
 public | department | table | postgres
(2 rows)
```

- 从以上结果可以看出，我们表格已经创建成功，接下来我们删除这两个表格：

```sql
runoobdb=# drop table department, company;
DROP TABLE
```

- 再使用 \d 命令来查看就找不到表格了：

```
testdb=# \d
Did not find any relations.
```

## 模式 `SCHEMA`

PostgreSQL 中 `模式(SCHEMA)` 可以看着是一个表的集合

- 一个模式可以包含 **`视图`** 、**`索引`** 、**`数据类型`** 、**`函数`** 和 **`操作符`** 等

- 相同的 **`对象名称`** 可以被用于不同的模式中而不会出现冲突，例如 `schema1` 和 `myschema` 都可以包含名为 `mytable` 的表

使用模式的优势：

- 允许多个用户使用一个数据库并且不会互相干扰

- 将数据库对象组织成逻辑组以便更容易管理

- 第三方应用的对象可以放在独立的模式中，这样它们就不会与其他对象的名称发生冲突

> 模式类似于操作系统层的目录，但是模式不能嵌套

- 我们可以使用 `CREATE SCHEMA` 语句来创建模式，语法格式如下：

  输出结果 "CREATE SCHEMA" 就代表模式创建成功

```sql
CREATE TABLE myschema.mytable (
...
);
```

我们连接到 `runoobdb` 来创建模式 `myschema` ：

```sql
runoobdb=# create schema myschema;
CREATE SCHEMA
```

- 接下来我们再创建一个表格：

```sql
runoobdb=# create table myschema.company(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25),
   SALARY   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);
```

- 以上命令创建了一个空的表格，我们使用以下 SQL 来查看表格是否创建：

```sql
runoobdb=# select * from myschema.company;
 id | name | age | address | salary 
----+------+-----+---------+--------
(0 rows)
```

### 删除模式

删除一个为空的模式(其中的所有对象已经被删除)：

```sql
DROP SCHEMA myschema;
```

删除一个模式以及其中包含的所有对象：

```sql
DROP SCHEMA myschema CASCADE;
```

## `INSERT INTO` 语句

PostgreSQL 中 `INSERT INTO` 语句用于向表中插入新记录

- 我们可以插入一行也可以同时插入多行

`INSERT INTO` 语法格式如下：

```sql
INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
VALUES (value1, value2, value3,...valueN);
```

- `column1, column2,...columnN`

  为表中字段名

- `value1, value2, value3,...valueN`

  为字段对应的值

在使用 `INSERT INTO` 语句时，字段列必须和数据值数量相同，且顺序也要对应

- 如果我们向表中的所有字段插入值，则可以不需要指定字段，只需要指定插入的值即可：

```sql
INSERT INTO TABLE_NAME VALUES (value1,value2,value3,...valueN);
```

下表列出执行插入后返回结果的说明：

序号|输出信息|描述
1|INSERT oid 1|只插入一行并且目标表具有 `OID` 的返回信息， 那么 `oid` 是分配给被插入行的 `OID`
2|INSERT 0 #|插入多行返回的信息，`#` 为插入的行数

在 `runoobdb` 数据库中创建 `COMPANY` 表：

```sql
runoobdb=# CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL,
   JOIN_DATE      DATE
);
```

- 在 `COMPANY` 表中插入以下数据：

```sql
runoobdb=# INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (1, 'Paul', 32, 'California', 20000.00,'2001-07-13');
INSERT 0 1
```

- 以下插入语句忽略 `SALARY` 字段：

```sql
runoobdb=# INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,JOIN_DATE) VALUES (2, 'Allen', 25, 'Texas', '2007-12-13');
INSERT 0 1
```

- 以下插入语句 `JOIN_DATE` 字段使用 `DEFAULT` 子句来设置默认值，而不是指定值：

```sql
runoobdb=# INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT );
INSERT 0 1
```

- 以下实例插入多行：

```sql
runoobdb=# INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00, '2007-12-13' ), (5, 'David', 27, 'Texas', 85000.00, '2007-12-13');
INSERT 0 2
```

使用 `SELECT` 语句查询表格数据：

```sql
runoobdb=# SELECT * FROM company;

ID        NAME        AGE        ADDRESS     SALARY   JOIN_DATE
----      ----------  -----      ----------  -------      --------
1         Paul        32         California  20000.0      2001-07-13
2         Allen       25         Texas                    2007-12-13
3         Teddy       23         Norway      20000.0
4         Mark        25         Rich-Mond   65000.0      2007-12-13
5         David       27         Texas       85000.0      2007-12-13
```

## `SELECT` 语句

PostgreSQL 中 `SELECT` 语句用于从数据库中选取数据

- 结果被存储在一个结果表中，称为结果集

`SELECT` 语句语法格式如下：

```sql
SELECT column1, column2,...columnN FROM table_name;
```

- `column1, column2,...columnN`

  为表中字段名

- `table_name`

  为表名

如果我们想读取表中的所有数据可以使用以下 SQL 语句：

```sql
SELECT * FROM table_name;
```

在前文中我们已经向表 `company` 插入了一些数据，使用 `*` 号可以读取该表的所有数据：

```sql
runoobdb=# SELECT * FROM company;

ID        NAME        AGE        ADDRESS     SALARY   JOIN_DATE
----      ----------  -----      ----------  -------      --------
1         Paul        32         California  20000.0      2001-07-13
2         Allen       25         Texas                    2007-12-13
3         Teddy       23         Norway      20000.0
4         Mark        25         Rich-Mond   65000.0      2007-12-13
5         David       27         Texas       85000.0      2007-12-13
```

我们也可以读取指定字段 `ID` 和 `NAME` ：

```sql
runoobdb=# SELECT ID,NAME FROM company;
 id | name  
----+-------
  1 | Paul
  2 | Allen
  3 | Teddy
  4 | Mark
  5 | David
(5 rows)
```

## 运算符

运算符是一种告诉编译器执行特定的数学或逻辑操作的符号

- PostgreSQL 运算符是一个保留关键字或字符，一般用在 `WHERE` 语句中，作为过滤条件

- 常见的运算符有：

  - 算术运算符
  - 比较运算符
  - 逻辑运算符
  - 按位运算符

### 算术运算符

假设变量 `a` 为 `2` ，变量 `b` 为 `3` ，则：

运算符|描述|实例
-|-|-
+|加|a + b 结果为 5
-|减|a - b 结果为 -1
*|乘|a * b 结果为 6
/|除|b / a 结果为 1
%|模(取余)|b % a 结果为 1
^|指数|a ^ b 结果为 8
`丨/`|平方根|`丨/ 25.0` 结果为 5
`丨丨/`|立方根|`丨丨/ 27.0` 结果为 3
!|阶乘|5 ! 结果为 120
!!|阶乘(前缀操作符)|!! 5 结果为 120

> 以上 `|` 因表格格式需要，以中文 `丨` 代替

```sql
runoobdb=# select 2+3;
 ?column?
----------
        5
(1 row)

runoobdb=# select 2*3;
 ?column?
----------
        6
(1 row)

runoobdb=# select 10/5;
 ?column?
----------
        2
(1 row)

runoobdb=# select 12%5;
 ?column?
----------
        2
(1 row)

runoobdb=# select 2^3;
 ?column?
----------
        8
(1 row)

runoobdb=# select |/ 25.0;
 ?column?
----------
        5
(1 row)

runoobdb=# select ||/ 27.0;
 ?column?
----------
        3
(1 row)

runoobdb=# select 5 !;
 ?column?
----------
      120
(1 row)

runoobdb=# select !!5;
 ?column?
----------
      120
(1 row)
```

### 比较运算符

假设变量 `a` 为 `10` ，变量 `b` 为 `20` ，则：

运算符|描述|实例
-|-|-
=|等于|(a = b) 为 false
!=|不等于|(a != b) 为 true
<>|不等于|(a <> b) 为 true
`>`|大于|(a > b) 为 false
<|小于|(a < b) 为 true
`>=`|大于等于|(a >= b) 为 false
<=|小于等于|(a <= b) 为 true

创建 `COMPANY` 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb=# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

- 读取 `SALARY` 字段大于 `50000` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE SALARY > 50000;
 id | name  | age |address    | salary
----+-------+-----+-----------+--------
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
(2 rows)
```

- 读取 `SALARY` 字段等于 `20000` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE SALARY = 20000;
 id | name  | age |  address    | salary
 ----+-------+-----+-------------+--------
   1 | Paul  |  32 | California  |  20000
   3 | Teddy |  23 | Norway      |  20000
(2 rows)
```

- 读取 `SALARY` 字段不等于 `20000` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE SALARY != 20000;
 id | name  | age |  address    | salary
----+-------+-----+-------------+--------
  2 | Allen |  25 | Texas       |  15000
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
  6 | Kim   |  22 | South-Hall  |  45000
  7 | James |  24 | Houston     |  10000
(5 rows)

runoobdb=# SELECT * FROM COMPANY WHERE SALARY <> 20000;
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  2 | Allen |  25 | Texas      |  15000
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
  6 | Kim   |  22 | South-Hall |  45000
  7 | James |  24 | Houston    |  10000
(5 rows)
```

- 读取 `SALARY` 字段大于等于 `65000` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE SALARY >= 65000;
 id | name  | age |  address  | salary
----+-------+-----+-----------+--------
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
(2 rows)
```

### 逻辑运算符

PostgreSQL 逻辑运算符有以下几种：

序号|运算符|描述
-|-|-
1|AND|逻辑与运算符，如果两个操作数都非零，则条件为真；PostgresSQL 中的 WHERE 语句可以用 AND 包含多个过滤条件
2|NOT|逻辑非运算符，用来逆转操作数的逻辑状态，如果条件为真则逻辑非运算符将使其为假；PostgresSQL 有 `NOT EXISTS` , `NOT BETWEEN` , `NOT IN` 等运算符
3|OR|逻辑或运算符，如果两个操作数中有任意一个非零，则条件为真；PostgresSQL 中的 WHERE 语句可以用 OR 包含多个过滤条件

SQL 使用三值的逻辑系统，包括 `true` 、`false` 和 `null` ，其中 `null` 表示 **`未知`**

a|b|a AND b|a OR b
-|-|-|-
TRUE|TRUE|TRUE|TRUE
TRUE|FALSE|FALSE|TRUE
TRUE|NULL|NULL|TRUE
FALSE|FALSE|FALSE|FALSE
FALSE|NULL|FALSE|NULL
NULL|NULL|NULL|NULL

a|NOT a
-|-
TRUE|FALSE
FALSE|TRUE
NULL|NULL

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb=# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

- 读取 `AGE` 字段大于等于 `25` 且 `SALARY` 字段大于 `6500` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 6500;
 id | name  | age |                      address                  | salary
----+-------+-----+-----------------------------------------------+--------
  1 | Paul  |  32 | California                                    |  20000
  2 | Allen |  25 | Texas                                         |  15000
  4 | Mark  |  25 | Rich-Mond                                     |  65000
  5 | David |  27 | Texas                                         |  85000
(4 rows)
```

- 读取 `AGE` 字段大于等于 `25` 或 `SALARY` 字段大于 `6500` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 6500;
 id | name  | age |  address    | salary
----+-------+-----+-------------+--------
  1 | Paul  |  32 | California  |  20000
  2 | Allen |  25 | Texas       |  15000
  3 | Teddy |  23 | Norway      |  20000
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
  6 | Kim   |  22 | South-Hall  |  45000
  7 | James |  24 | Houston     |  10000
  8 | Paul  |  24 | Houston     |  20000
  9 | James |  44 | Norway      |   5000
 10 | James |  45 | Texas       |   5000
(10 rows)
```

- 读取 `SALARY` 字段不为 `NULL` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE SALARY IS NOT NULL;
 id | name  | age |  address    | salary
----+-------+-----+-------------+--------
  1 | Paul  |  32 | California  |  20000
  2 | Allen |  25 | Texas       |  15000
  3 | Teddy |  23 | Norway      |  20000
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
  6 | Kim   |  22 | South-Hall  |  45000
  7 | James |  24 | Houston     |  10000
  8 | Paul  |  24 | Houston     |  20000
  9 | James |  44 | Norway      |   5000
 10 | James |  45 | Texas       |   5000
(10 rows)
```

### 位运算符

位运算符作用于位，并逐位执行操作，`&` 、`|` 和 `^` 的真值表如下所示：

p|q|`p & q`|`p | q`
-|-|-|-
0|0|0|0
0|1|0|1
1|1|1|1
1|0|0|1

假设如果 `A = 60` ，且 `B = 13` ，现在以二进制格式表示，它们如下所示：

```sql
A = 0011 1100

B = 0000 1101

-----------------

A&B = 0000 1100

A|B = 0011 1101

A^B = 0011 0001

~A  = 1100 0011
```

下表显示了 PostgreSQL 支持的位运算符(假设变量 `A` 的值为 `60` ，变量 `B` 的值为 `13` )则：

运算符|描述|运算规则|实例
-|-|-|-
&|按位与操作，按二进制位进行"与"运算|0&0=0; 0&1=0; 1&0=0; 1&1=1;|(A & B) 将得到 12，即为 0000 1100
丨|按位或运算符，按二进制位进行"或"运算|0丨0=0; 0丨1=1; 1丨0=1; 1丨1=1;|(A丨B) 将得到 61，即为 0011 1101
#|异或运算符，按二进制位进行"异或"运算|0#0=0; 0#1=1; 1#0=1; 1#1=0;|(A # B) 将得到 49，即为 0011 0001
~|取反运算符，按二进制位进行"取反"运算|~1=0; ~0=1;|(~A) 将得到 -61，即为 1100 0011，一个有符号二进制数的补码形式
<<|二进制左移运算符|将一个运算对象的各二进制位全部左移若干位(左边的二进制位丢弃，右边补0)|A << 2 将得到 240，即为 1111 0000
`>>`|二进制右移运算符|将一个数的各二进制位全部右移若干位，正数左补0，负数左补1，右边丢弃|A >> 2 将得到 15，即为 0000 1111

> 以上 `|` 因表格格式需要，以中文 `丨` 代替

```sql
runoobdb=# select 60 | 13;
 ?column?
----------
       61
(1 row)

runoobdb=# select 60 & 13;
 ?column?
----------
       12
(1 row)

runoobdb=# select  (~60);
 ?column?
----------
      -61
(1 row)

runoobdb=# select  (60 << 2);
 ?column?
----------
      240
(1 row)

runoobdb=# select  (60 >> 2);
 ?column?
----------
       15
(1 row)

runoobdb=# select 60 # 13;
 ?column?
----------
       49
(1 row)
```

## 表达式

表达式是由 **`一个或多个的值`** 、**`运算符`** 、**`PostgresSQL 函数`** 组成的

- PostgreSQL 表达式类似一个公式，我们可以将其应用在查询语句中，用来查找数据库中指定条件的结果集

- 语法格式如下：

```sql
SELECT column1, column2, columnN
FROM table_name
WHERE [CONDITION | EXPRESSION];
```

- PostgreSQL 的表达式可以有不同类型

### 布尔表达式

布尔表达式是根据一个指定条件来读取数据：

```sql
SELECT column1, column2, columnN
FROM table_name
WHERE SINGLE VALUE MATCHTING EXPRESSION;
```

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

- 以下使用了布尔表达式 `SALARY=10000` 来查询数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE SALARY = 10000;
 id | name  | age | address  | salary
----+-------+-----+----------+--------
  7 | James |  24 | Houston  |  10000
(1 row)
```

### 数字表达式

数字表达式常用于查询语句中的数学运算：

```sql
SELECT numerical_expression as  OPERATION_NAME
[FROM table_name WHERE CONDITION] ;
```

`numerical_expression` 是一个数学运算表达式，实例如下：

```sql
runoobdb=# SELECT (17 + 6) AS ADDITION ;
 addition 
----------
       23
(1 row)
```

此外 PostgreSQL 还内置了一些数学函数，如：

- avg()

  返回一个表达式的平均值

- sum()

  返回指定字段的总和

- count()

  返回查询的记录总数

以下实例查询 `COMPANY` 表的记录总数：

```sql
runoobdb=# SELECT COUNT(*) AS "RECORDS" FROM COMPANY;
 RECORDS
---------
       7
(1 row)
```

### 日期表达式

日期表达式返回当前系统的日期和时间，可用于各种数据操作，以下实例查询当前时间：

```sql
runoobdb=# SELECT CURRENT_TIMESTAMP;
       current_timestamp       
-------------------------------
 2019-06-13 10:49:06.419243+08
(1 row)
```

## `WHERE` 子句

在 PostgreSQL 中，当我们需要根据指定条件从单张表或者多张表中查询数据时，就可以在 `SELECT` 语句中添加 `WHERE` 子句，从而过滤掉我们不需要的数据

- `WHERE` 子句不仅可以用于 `SELECT` 语句中，同时也可以用于 `UPDATE` ，`DELETE` 等等语句中

- 以下是 `SELECT` 语句中使用 `WHERE` 子句从数据库中读取数据的通用语法：

```sql
SELECT column1, column2, columnN
FROM table_name
WHERE [condition1]
```

我们可以在 `WHERE` 子句中使用比较运算符或逻辑运算符，例如 `>` ，`<` ，`=`，`LIKE` ，`NOT` 等等

- 创建 `COMPANY` 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

### 使用逻辑运算符

以下几个实例我们使用逻辑运算符来读取表中的数据：

#### `AND`

找出 `AGE` (年龄)字段大于等于 `25` ，并且 `SALARY` (薪资)字段大于等于 `65000` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;
 id | name  | age |  address   | salary
----+-------+-----+------------+--------
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
(2 rows)
```

#### `OR`

找出 `AGE` (年龄)字段大于等于 `25` ，或者 `SALARY` (薪资)字段大于等于 `65000` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;
id | name  | age | address     | salary
----+-------+-----+-------------+--------
  1 | Paul  |  32 | California  |  20000
  2 | Allen |  25 | Texas       |  15000
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
(4 rows)
```

#### `NOT NULL`

在公司表中找出 `AGE` (年龄)字段不为空的记录：

```sql
runoobdb=#  SELECT * FROM COMPANY WHERE AGE IS NOT NULL;
  id | name  | age | address    | salary
 ----+-------+-----+------------+--------
   1 | Paul  |  32 | California |  20000
   2 | Allen |  25 | Texas      |  15000
   3 | Teddy |  23 | Norway     |  20000
   4 | Mark  |  25 | Rich-Mond  |  65000
   5 | David |  27 | Texas      |  85000
   6 | Kim   |  22 | South-Hall |  45000
   7 | James |  24 | Houston    |  10000
(7 rows)
```

#### `LIKE`

在 `COMPANY` 表中找出 `NAME` (名字)字段中以 `Pa` 开头的的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE NAME LIKE 'Pa%';
id | name | age |address    | salary
----+------+-----+-----------+--------
  1 | Paul |  32 | California|  20000
```

#### `IN`

以下 `SELECT` 语句列出了 `AGE` (年龄)字段为 `25` 或 `27` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE IN ( 25, 27 );
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  2 | Allen |  25 | Texas      |  15000
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
(3 rows)
```

#### `NOT IN`

以下 `SELECT` 语句列出了 `AGE` (年龄)字段不为 `25` 或 `27` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE NOT IN ( 25, 27 );
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  1 | Paul  |  32 | California |  20000
  3 | Teddy |  23 | Norway     |  20000
  6 | Kim   |  22 | South-Hall |  45000
  7 | James |  24 | Houston    |  10000
(4 rows)
```

#### `BETWEEN`

以下 `SELECT` 语句列出了 `AGE` (年龄)字段在 `25` 到 `27` 的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE BETWEEN 25 AND 27;
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  2 | Allen |  25 | Texas      |  15000
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
(3 rows)
```

#### 子查询

以下的 `SELECT` 语句使用了 SQL 的子查询：

- 子查询语句中读取 `SALARY` (薪资)字段大于 `65000` 的数据

- 然后通过 `EXISTS` 运算符判断它是否返回行

- 如果有返回行则读取所有的 `AGE` (年龄)字段

```sql
runoobdb=# SELECT AGE FROM COMPANY
        WHERE EXISTS (SELECT AGE FROM COMPANY WHERE SALARY > 65000);
 age
-----
  32
  25
  23
  25
  27
  22
  24
(7 rows)
```

以下的 `SELECT` 语句同样使用了 SQL 的子查询：

- 子查询语句中读取 `SALARY` (薪资)字段大于 `65000` 的 `AGE` (年龄)字段数据

- 然后用 `>` 运算符查询大于该 `AGE` (年龄)字段数据

```sql
runoobdb=# SELECT * FROM COMPANY
        WHERE AGE > (SELECT AGE FROM COMPANY WHERE SALARY > 65000);
 id | name | age | address    | salary
----+------+-----+------------+--------
  1 | Paul |  32 | California |  20000
```

## `AND` 、`OR` 运算符

在 PostgreSQL 中，`AND` 和 `OR` 也叫 **`连接运算符`** ，在查询数据时用于缩小查询范围，我们可以用 AND 或者 OR 指定一个或多个查询条件

### `AND`

AND 运算符表示一个或者多个条件必须同时成立

- 在 `WHERE` 子句中，AND 的使用语法如下：

```sql
SELECT column1, column2, columnN
FROM table_name
WHERE [condition1] AND [condition2]...AND [conditionN];
```

创建 `COMPANY` 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

- 以下实例读取 `AGE` 字段大于 `25` 且 `SALARY` 字段大于等于 `65000` 的所有记录：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
(2 rows)
```

### `OR`

OR 运算符表示多个条件中只需满足其中任意一个即可

- 在 `WHERE` 子句中，OR 的使用语法如下：

```sql
SELECT column1, column2, columnN
FROM table_name
WHERE [condition1] OR [condition2]...OR [conditionN]
```

创建 `COMPANY` 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

以下实例读取 `AGE` 字段大于等于 `25` 或 `SALARY` 字段大于等于 `65000` 的所有记录：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  1 | Paul  |  32 | California |  20000
  2 | Allen |  25 | Texas      |  15000
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
(4 rows)
```

## `UPDATE` 语句

如果我们要更新在 PostgreSQL 数据库中的数据，我们可以用 `UPDATE` 来操作

- 以下是 `UPDATE` 语句修改数据的通用 SQL 语法：

```sql
UPDATE table_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];
```

- 我们可以同时更新一个或者多个字段

- 我们可以在 `WHERE` 子句中指定任何条件

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

以下实例将更新 `COMPANY` 表中 `id` 为 `3` 的 `salary` 字段值：

```sql
runoobdb=# UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;
```

- 得到结果如下：

```sql
id | name  | age | address    | salary
----+-------+-----+------------+--------
  1 | Paul  |  32 | California |  20000
  2 | Allen |  25 | Texas      |  15000
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
  6 | Kim   |  22 | South-Hall |  45000
  7 | James |  24 | Houston    |  10000
  3 | Teddy |  23 | Norway     |  15000
  ```

- 从结果上看，`COMPANY` 表中的 `id` 为 `3` 的 `salary` 字段值已被修改

以下实例将同时更新 `salary` 字段和 `address` 字段的值：

```sql
runoobdb=# UPDATE COMPANY SET ADDRESS = 'Texas', SALARY=20000;
```

- 得到结果如下：

```sql
id | name  | age | address | salary
----+-------+-----+---------+--------
  1 | Paul  |  32 | Texas   |  20000
  2 | Allen |  25 | Texas   |  20000
  4 | Mark  |  25 | Texas   |  20000
  5 | David |  27 | Texas   |  20000
  6 | Kim   |  22 | Texas   |  20000
  7 | James |  24 | Texas   |  20000
  3 | Teddy |  23 | Texas   |  20000
(7 rows)
```

## `DELETE` 语句

我们可以使用 `DELETE` 语句来删除 PostgreSQL 表中的数据

- 以下是 DELETE 语句删除数据的通用语法：

```sql
DELETE FROM table_name WHERE [condition];
```

- 如果没有指定 `WHERE` 子句，PostgreSQL 表中的所有记录将被删除

- 一般我们需要在 `WHERE` 子句中指定条件来删除对应的记录，条件语句可以使用 `AND` 或 `OR` 运算符来指定一个或多个

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

- 以下 SQL 语句将删除 `ID` 为 `2` 的数据：

```sql
runoobdb=# DELETE FROM COMPANY WHERE ID = 2;
```

- 得到结果如下：

```sql
 id | name  | age | address     | salary
----+-------+-----+-------------+--------
  1 | Paul  |  32 | California  |  20000
  3 | Teddy |  23 | Norway      |  20000
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
  6 | Kim   |  22 | South-Hall  |  45000
  7 | James |  24 | Houston     |  10000
(6 rows)
```

- 从上面结果可以看出，id 为 2 的数据已被删除

> 以下语句将删除整张 `COMPANY` 表：

```sql
DELETE FROM COMPANY;
```

## `LIKE` 子句

在 PostgreSQL 数据库中，我们如果要获取包含某些字符的数据，可以使用 `LIKE` 子句

- 在 LIKE 子句中，通常与通配符结合使用

- 通配符表示任意字符，在 PostgreSQL 中，主要有以下两种通配符：

  - 百分号 `%`
  - 下划线 `_`

> 如果没有使用以上两种通配符，`LIKE` 子句和等号 `=` 得到的结果是一样的

以下是使用 LIKE 子句搭配百分号 `%` 和下划线 `_` 从数据库中获取数据的通用语法：

```sql
SELECT FROM table_name WHERE column LIKE 'XXXX%';
或者
SELECT FROM table_name WHERE column LIKE '%XXXX%';
或者
SELECT FROM table_name WHERE column LIKE 'XXXX_';
或者
SELECT FROM table_name WHERE column LIKE '_XXXX';
或者
SELECT FROM table_name WHERE column LIKE '_XXXX_';
```

- 你可以在 `WHERE` 子句中指定任何条件

- 你可以使用 `AND` 或者 `OR` 指定一个或多个条件

- `XXXX` 可以是任何数字或者字符

下面是 LIKE 语句中演示了 `%` 和 `_` 的一些差别：

实例|描述
-|-
WHERE SALARY::text LIKE '200%'|找出 SALARY 字段中以 200 开头的数据
WHERE SALARY::text LIKE '%200%'|找出 SALARY 字段中含有 200 字符的数据
WHERE SALARY::text LIKE '_00%'|找出 SALARY 字段中在第二和第三个位置上有 00 的数据
WHERE SALARY::text LIKE '2 % %'|找出 SALARY 字段中以 2 开头的字符长度大于 3 的数据
WHERE SALARY::text LIKE '%2'|找出 SALARY 字段中以 2 结尾的数据
WHERE SALARY::text LIKE '_2%3'|找出 SALARY 字段中 2 在第二个位置上并且以 3 结尾的数据
WHERE SALARY::text LIKE '2___3'|找出 SALARY 字段中以 2 开头，3 结尾并且是 5 位数的数据

> 在 PostgreSQL 中，LIKE 子句是只能用于 **`对字符进行比较`** ，因此在上面列子中，我们要将 **`整型数据类型转化为字符串数据类型`**

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

下面实例将找出 `AGE` 以 `2` 开头的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE AGE::text LIKE '2%';
```

- 得到以下结果：

```sql
id | name  | age | address     | salary
----+-------+-----+-------------+--------
  2 | Allen |  25 | Texas       |  15000
  3 | Teddy |  23 | Norway      |  20000
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
  6 | Kim   |  22 | South-Hall  |  45000
  7 | James |  24 | Houston     |  10000
  8 | Paul  |  24 | Houston     |  20000
(7 rows)
```

下面实例将找出 `address` 字段中含有 `-` 字符的数据：

```sql
runoobdb=# SELECT * FROM COMPANY WHERE ADDRESS  LIKE '%-%';
```

- 得到结果如下：

```sql
id | name | age |                      address              | salary
----+------+-----+-------------------------------------------+--------
  4 | Mark |  25 | Rich-Mond                                 |  65000
  6 | Kim  |  22 | South-Hall                                |  45000
(2 rows)
```

## `LIMIT` 子句

PostgreSQL 中的 `limit` 子句用于限制 `SELECT` 语句中查询的数据的数量，基本语法如下：

```sql
SELECT column1, column2, columnN
FROM table_name
LIMIT [no of rows]
```

- 下面是 `LIMIT` 子句与 `OFFSET` 子句一起使用时的语法：

```sql
SELECT column1, column2, columnN 
FROM table_name
LIMIT [no of rows] OFFSET [row num]
```

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

下面实例将找出限定的数量的数据，即读取 `4` 条数据：

```sql
runoobdb=# SELECT * FROM COMPANY LIMIT 4;
```

- 得到以下结果：

```sql
 id | name  | age | address     | salary
----+-------+-----+-------------+--------
  1 | Paul  |  32 | California  |  20000
  2 | Allen |  25 | Texas       |  15000
  3 | Teddy |  23 | Norway      |  20000
  4 | Mark  |  25 | Rich-Mond   |  65000
(4 rows)
```

> 但是，在某些情况下，可能需要从一个特定的偏移开始提取记录

下面是一个实例，从第三位开始提取 `3` 个记录：

```sql
runoobdb=# SELECT * FROM COMPANY LIMIT 3 OFFSET 2;
```

- 得到以下结果：

```sql
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
(3 rows)
```

## `ORDER BY` 语句

在 PostgreSQL 中，`ORDER BY` 用于对一列或者多列数据进行 `升序(ASC)` 或者 `降序(DESC)` 排列，基础语法如下：

```sql
SELECT column-list
FROM table_name
[WHERE condition]
[ORDER BY column1, column2, .. columnN] [ASC | DESC];
```

> 我们可以在 `ORDER BY` 中使用一列或者多列，但是必须保证要排序的列必须存在
> - ASC 表示升序
> - DESC 表示降序

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

下面实例将对结果根据 `AGE` 字段值进行升序排列：

```sql
runoobdb=# SELECT * FROM COMPANY ORDER BY AGE ASC;
```

- 得到以下结果：

```sql
 id | name  | age |                      address                       | salary 
----+-------+-----+----------------------------------------------------+--------
  6 | Kim   |  22 | South-Hall                                         |  45000
  3 | Teddy |  23 | Norway                                             |  20000
  7 | James |  24 | Houston                                            |  10000
  4 | Mark  |  25 | Rich-Mond                                          |  65000
  2 | Allen |  25 | Texas                                              |  15000
  5 | David |  27 | Texas                                              |  85000
  1 | Paul  |  32 | California                                         |  20000
(7 rows)
```

下面实例将对结果根据 `NAME` 字段值和 `SALARY` 字段值进行升序排序：

```sql
runoobdb=# SELECT * FROM COMPANY ORDER BY NAME, SALARY ASC;
```

- 得到以下结果：

```sql
 id | name  | age |                      address                       | salary 
----+-------+-----+----------------------------------------------------+--------
  2 | Allen |  25 | Texas                                              |  15000
  5 | David |  27 | Texas                                              |  85000
  7 | James |  24 | Houston                                            |  10000
  6 | Kim   |  22 | South-Hall                                         |  45000
  4 | Mark  |  25 | Rich-Mond                                          |  65000
  1 | Paul  |  32 | California                                         |  20000
  3 | Teddy |  23 | Norway                                             |  20000
(7 rows)
```

下面实例将对结果根据 `NAME` 字段值进行降序排列：

```sql
runoobdb=# SELECT * FROM COMPANY ORDER BY NAME DESC;
```

- 得到以下结果：

```sql
 id | name  | age |                      address                       | salary 
----+-------+-----+----------------------------------------------------+--------
  3 | Teddy |  23 | Norway                                             |  20000
  1 | Paul  |  32 | California                                         |  20000
  4 | Mark  |  25 | Rich-Mond                                          |  65000
  6 | Kim   |  22 | South-Hall                                         |  45000
  7 | James |  24 | Houston                                            |  10000
  5 | David |  27 | Texas                                              |  85000
  2 | Allen |  25 | Texas                                              |  15000
(7 rows)
```

## `GROUP BY` 语句

在 PostgreSQL 中，`GROUP BY` 语句和 `SELECT` 语句一起使用，用来对相同的数据进行分组

- `GROUP BY` 在一个 `SELECT` 语句中，放在 `WHRER` 子句的后面，`ORDER BY` 子句的前面

- 下面给出了 `GROUP BY` 子句的基本语法：

```sql
SELECT column-list
FROM table_name
WHERE [ conditions ]
GROUP BY column1, column2....columnN
ORDER BY column1, column2....columnN
```

- `GROUP BY` 子句必须放在 `WHERE` 子句中的条件之后，必须放在 `ORDER BY` 子句之前

- 在 `GROUP BY` 子句中，你可以对一列或者多列进行分组，但是被分组的列必须存在于列清单中

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

下面实例将根据 `NAME` 字段值进行分组，找出每个人的工资总额：

```sql
runoobdb=# SELECT NAME, SUM(SALARY) FROM COMPANY GROUP BY NAME;
```

- 得到以下结果：

```sql
  name  |  sum
 -------+-------
  Teddy | 20000
  Paul  | 20000
  Mark  | 65000
  David | 85000
  Allen | 15000
  Kim   | 45000
  James | 10000
(7 rows)
```

- 现在我们添加使用下面语句在 `CAMPANY` 表中添加三条记录：

```sql
INSERT INTO COMPANY VALUES (8, 'Paul', 24, 'Houston', 20000.00);
INSERT INTO COMPANY VALUES (9, 'James', 44, 'Norway', 5000.00);
INSERT INTO COMPANY VALUES (10, 'James', 45, 'Texas', 5000.00);
```

- 现在 `COMPANY` 表中存在重复的名称，数据如下：

```sql
 id | name  | age | address      | salary
 ----+-------+-----+--------------+--------
   1 | Paul  |  32 | California   |  20000
   2 | Allen |  25 | Texas        |  15000
   3 | Teddy |  23 | Norway       |  20000
   4 | Mark  |  25 | Rich-Mond    |  65000
   5 | David |  27 | Texas        |  85000
   6 | Kim   |  22 | South-Hall   |  45000
   7 | James |  24 | Houston      |  10000
   8 | Paul  |  24 | Houston      |  20000
   9 | James |  44 | Norway       |   5000
  10 | James |  45 | Texas        |   5000
(10 rows)
```

- 现在再根据 NAME 字段值进行分组，找出每个客户的工资总额：

```sql
runoobdb=# SELECT NAME, SUM(SALARY) FROM COMPANY GROUP BY NAME ORDER BY NAME;
```

- 这时的得到的结果如下：

```sql
name  |  sum
-------+-------
 Allen | 15000
 David | 85000
 James | 20000
 Kim   | 45000
 Mark  | 65000
 Paul  | 40000
 Teddy | 20000
(7 rows)
```

下面实例将 `ORDER BY` 子句与 `GROUP BY` 子句一起使用：

```sql
runoobdb=#  SELECT NAME, SUM(SALARY) FROM COMPANY GROUP BY NAME ORDER BY NAME DESC;
```

- 得到以下结果：

```sql
name  |  sum
-------+-------
 Teddy | 20000
 Paul  | 40000
 Mark  | 65000
 Kim   | 45000
 James | 20000
 David | 85000
 Allen | 15000
(7 rows)
```

## `WITH` 子句

在 PostgreSQL 中，`WITH` 子句提供了一种编写辅助语句的方法，以便在更大的查询中使用

- WITH 子句有助于将复杂的大型查询分解为更简单的表单，便于阅读

  - 这些语句通常称为 **`通用表表达式(Common Table Express，CTE)`** ，也可以当做 **`一个为查询而存在的临时表`**

- WITH 子句是在多次执行子查询时特别有用，允许我们在查询中通过它的名称(可能是多次)引用它

> WITH 子句在使用前必须先定义

WITH 查询的基础语法如下：

```sql
WITH
  name_for_summary_data AS (
    SELECT Statement)
  SELECT columns
  FROM name_for_summary_data
  WHERE conditions <=> (
    SELECT column
    FROM name_for_summary_data)
  [ORDER BY columns]
```

- `name_for_summary_data` 是 WITH 子句的名称

  `name_for_summary_data` 可以与现有的表名相同，并且具有优先级

- 可以在 WITH 中使用数据 `INSERT` 、`UPDATE` 或 `DELETE` 语句，允许您在同一个查询中执行多个不同的操作

### WITH 递归

在 WITH 子句中可以使用自身输出的数据

- **`公用表表达式(CTE)`** 具有一个重要的优点，那就是能够引用其自身，从而创建 **`递归 CTE`**

- **`递归 CTE`** 是一个重复执行 **`初始 CTE`** 以返回数据子集直到获取完整结果集的公用表表达式

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

下面将使用 `WITH` 子句在上表中查询数据：

```sql
With CTE AS
(Select
 ID
, NAME
, AGE
, ADDRESS
, SALARY
FROM COMPANY )
Select * From CTE;
```

- 得到结果如下：

```sql
id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

接下来让我们使用 `RECURSIVE` 关键字和 WITH 子句编写一个查询，查找 **`SALARY(工资)`** 字段小于 `20000` 的数据并计算它们的和：

```sql
WITH RECURSIVE t(n) AS (
   VALUES (0)
   UNION ALL
   SELECT SALARY FROM COMPANY WHERE SALARY < 20000
)
SELECT sum(n) FROM t;
```

- 得到结果如下：

```sql
 sum
-------
 25000
(1 row)
```

下面我们建立一张和 `COMPANY` 表相似的 `COMPANY1` 表，使用 `DELETE` 语句和 `WITH` 子句删除 `COMPANY` 表中 **`SALARY(工资)`** 字段大于等于 `30000` 的数据，并将删除的数据插入 `COMPANY1` 表，实现将 `COMPANY` 表数据转移到 `COMPANY1` 表中：

```sql
CREATE TABLE COMPANY1(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);

WITH moved_rows AS (
   DELETE FROM COMPANY
   WHERE
      SALARY >= 30000
   RETURNING *
)
INSERT INTO COMPANY1 (SELECT * FROM moved_rows)
```

- 得到结果如下：

```sql
INSERT 0 3
```

- 此时，`CAMPANY` 表和 `CAMPANY1` 表的数据如下：

```sql
runoobdb=# SELECT * FROM COMPANY;
 id | name  | age |  address   | salary
----+-------+-----+------------+--------
  1 | Paul  |  32 | California |  20000
  2 | Allen |  25 | Texas      |  15000
  3 | Teddy |  23 | Norway     |  20000
  7 | James |  24 | Houston    |  10000
(4 rows)

runoobdb=# SELECT * FROM COMPANY1;
 id | name  | age | address | salary
----+-------+-----+-------------+--------
  4 | Mark  |  25 | Rich-Mond   |  65000
  5 | David |  27 | Texas       |  85000
  6 | Kim   |  22 | South-Hall  |  45000
(3 rows)
```

## `HAVING` 子句

`HAVING` 子句可以让我们筛选分组后的各组数据

- `WHERE` 子句在所选列上设置条件，而 `HAVING` 子句则在由 `GROUP BY` 子句创建的分组上设置条件

- 下面是 `HAVING` 子句在 `SELECT` 查询中的位置：

```sql
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
```

- `HAVING` 子句必须放置于 `GROUP BY` 子句后面，`ORDER BY` 子句前面，下面是 `HAVING` 子句在 `SELECT` 语句中基础语法：

```sql
SELECT column1, column2
FROM table1, table2
WHERE [ conditions ]
GROUP BY column1, column2
HAVING [ conditions ]
ORDER BY column1, column2
```

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

下面实例将找出根据 `NAME` 字段值进行分组，并且 **`name(名称)`** 字段的计数少于 `2` 数据：

```sql
SELECT NAME FROM COMPANY GROUP BY name HAVING count(name) < 2;
```

- 得到以下结果：

```sql
  name
 -------
  Teddy
  Paul
  Mark
  David
  Allen
  Kim
  James
(7 rows)
```

- 我们往表里添加几条数据：

```sql
INSERT INTO COMPANY VALUES (8, 'Paul', 24, 'Houston', 20000.00);
INSERT INTO COMPANY VALUES (9, 'James', 44, 'Norway', 5000.00);
INSERT INTO COMPANY VALUES (10, 'James', 45, 'Texas', 5000.00);
```

- 此时，`COMPANY` 表的记录如下：

```sql
 id | name  | age | address      | salary
 ----+-------+-----+--------------+--------
   1 | Paul  |  32 | California   |  20000
   2 | Allen |  25 | Texas        |  15000
   3 | Teddy |  23 | Norway       |  20000
   4 | Mark  |  25 | Rich-Mond    |  65000
   5 | David |  27 | Texas        |  85000
   6 | Kim   |  22 | South-Hall   |  45000
   7 | James |  24 | Houston      |  10000
   8 | Paul  |  24 | Houston      |  20000
   9 | James |  44 | Norway       |   5000
  10 | James |  45 | Texas        |   5000
(10 rows)
```

下面实例将找出根据 `name` 字段值进行分组，并且名称的计数大于 `1` 数据：

```sql
runoobdb-# SELECT NAME FROM COMPANY GROUP BY name HAVING count(name) > 1;
```

- 得到结果如下：

```sql
 name
-------
 Paul
 James
(2 rows)
```

## `DISTINCT` 关键字

在 PostgreSQL 中，`DISTINCT` 关键字与 `SELECT` 语句一起使用，用于去除重复记录，只获取唯一的记录

- 我们平时在操作数据时，有可能出现一种情况，在一个表中有多个重复的记录

- 当提取这样的记录时，`DISTINCT` 关键字就显得特别有意义，它只获取唯一一次记录，而不是获取重复记录

- 用于去除重复记录的 `DISTINCT` 关键字的基本语法如下：

```sql
SELECT DISTINCT column1, column2,.....columnN
FROM table_name
WHERE [condition]
```

### 实例

创建 COMPANY 表[【下载 COMPANY SQL 文件】](https://static.runoob.com/download/company.sql)，数据内容如下：

```sql
runoobdb# select * from COMPANY;
 id | name  | age | address   | salary
----+-------+-----+-----------+--------
  1 | Paul  |  32 | California|  20000
  2 | Allen |  25 | Texas     |  15000
  3 | Teddy |  23 | Norway    |  20000
  4 | Mark  |  25 | Rich-Mond |  65000
  5 | David |  27 | Texas     |  85000
  6 | Kim   |  22 | South-Hall|  45000
  7 | James |  24 | Houston   |  10000
(7 rows)
```

- 让我们插入两条数据：

```sql
INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (8, 'Paul', 32, 'California', 20000.00 );

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (9, 'Allen', 25, 'Texas', 15000.00 );
```

- 现在数据如下：

```sql
 id | name  | age | address    | salary
----+-------+-----+------------+--------
  1 | Paul  |  32 | California |  20000
  2 | Allen |  25 | Texas      |  15000
  3 | Teddy |  23 | Norway     |  20000
  4 | Mark  |  25 | Rich-Mond  |  65000
  5 | David |  27 | Texas      |  85000
  6 | Kim   |  22 | South-Hall |  45000
  7 | James |  24 | Houston    |  10000
  8 | Paul  |  32 | California |  20000
  9 | Allen |  25 | Texas      |  15000
(9 rows)
```

- 接下来我们找出 `COMPANY` 表中的所有 `NAME` ：

```sql
runoobdb=# SELECT name FROM COMPANY;
```

- 得到结果如下：

```sql
 name
-------
 Paul
 Allen
 Teddy
 Mark
 David
 Kim
 James
 Paul
 Allen
(9 rows)
```

- 现在我们在 `SELECT` 语句中使用 `DISTINCT` 子句：

```sql
runoobdb=# SELECT DISTINCT name FROM COMPANY;
```

- 得到结果如下：

```sql
name
-------
 Teddy
 Paul
 Mark
 David
 Allen
 Kim
 James
(7 rows)
```

- 从结果可以看到，重复数据已经被删除


# PostgreSQL 高级






































































































































































































































































































































































































































































































































































