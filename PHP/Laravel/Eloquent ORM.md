【2019.11.11】以下整理自[【 `Laravel` 6 中文文档：`Eloquent ORM` 】](https://learnku.com/docs/laravel/6.x/eloquent/5176)

---

# Eloquent：入门

Laravel 的 Eloquent ORM 提供了一个漂亮、简洁的 ActiveRecord 实现来和数据库交互

- 每个数据库表都有一个对应的「模型」用来与该表交互

- 你可以通过模型查询数据表中的数据，以及在数据表中插入新记录

> 在开始之前，请确保在 config/database.php 中配置数据库连接
> - 更多关于数据库配置的信息，请查看[【文档】](https://learnku.com/docs/laravel/6.x/database#configuration)

## 模型定义

首先，创建一个 Eloquent 模型

- 模型通常在 `app` 目录中，但你可以根据 `composer.json` 文件将他们放置在可以被自动加载的任意位置

- 所有的 Eloquent 模型都继承至 `Illuminate\Database\Eloquent\Model 类`

创建模型最简单的方法就是使用 make:model Artisan 命令

```php
php artisan make:model Flight
```

- 如果要在生成模型的时候生成[【数据库迁移】](https://learnku.com/docs/laravel/6.x/migrations/5173)，可以使用 `--migration` 或 `-m` 选项

```php
php artisan make:model Flight --migration

php artisan make:model Flight -m
```

### Eloquent 模型约定

现在，我们来看一个 `Flight` 模型的示例，我们将用它从 `flights` 数据库表中检索和存储数据信息

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    //
}
```

#### 数据表名称

> 请注意，我们并没有告诉 Eloquent 我们的 `Flight` 模型使用哪个数据表

除非明确地指定了其它名称，否则将使用类的复数形式「蛇形命名」来作为表名

- 因此，在这种情况下，Eloquent 将假设 `Flight` 模型存储的是 `flights` 数据表中的数据

- 你可以通过在模型上定义 `table` 属性来指定自定义数据表：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 与模型关联的表名
     *
     * @var string
     */
    protected $table = 'my_flights';
}
```

#### 主键

Eloquent 也会假设每个数据表都有一个名为 `id` 的主键列

- 你可以定义一个受保护的 `$primaryKey` 属性来重写约定：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 重定义主键
     *
     * @var string
     */
    protected $primaryKey = 'flight_id';
}
```

此外，Eloquent 假设主键是一个自增的整数值，这意味着默认情况下主键会自动转换为 `int` 类型

- 如果您希望使用非递增或非数字的主键则需要设置公共的 `$incrementing` 属性设置为 `false`

```php
<?php

class Flight extends Model
{
    /**
     * 指示模型主键是否递增
     *
     * @var bool
     */
    public $incrementing = false;
}
```

如果你的主键不是一个整数，你需要将模型上受保护的 `$keyType` 属性设置为 `string`

```php
<?php

class Flight extends Model
{
    /**
     * 自动递增ID的“类型”。
     *
     * @var string
     */
    protected $keyType = 'string';
}
```

#### 时间戳

默认情况下，Eloquent 预期你的数据表中存在 `created_at` 和 `updated_at`

- 如果你不想让 Eloquent 自动管理这两个列，请将模型中的 `$timestamps` 属性设置为 `false` ：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 指示是否自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
}
```

如果需要自定义时间戳的格式，在你的模型中设置 `$dateFormat` 属性

- 这个属性决定日期属性在数据库的存储方式，以及模型序列化为数组或者 JSON 的格式：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 模型日期列的存储格式。
     *
     * @var string
     */
    protected $dateFormat = 'U';
}
```

> `$dateFormat` 可以接受的值和 php 中 `date()` 函数第一个参数可以接受的值一样
> - 参考资料：[【格式字串可以识别以下 `format` 参数的字符串】](https://www.php.net/manual/zh/function.date.php)
>> 此处 `$dateFormat = 'U'` 中 `U` 的意思就是我们平常说的时间戳( `10` 位到秒)

如果你需要自定义存储时间戳的字段名，可以在模型中设置 `CREATED_AT` 和 `UPDATED_AT` 常量的值来实现：

```php
<?php

class Flight extends Model
{
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'last_update';
}
```

#### 数据库连接

默认情况下，Eloquent 模型将使用你的应用程序配置的默认数据库连接

- 如果你想为模型指定一个不同的连接，设置 `$connection` 属性：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 模型的连接名称
     *
     * @var string
     */
    protected $connection = 'connection-name';
}
```

### 默认属性值

如果要为模型的某些属性定义默认值，可以在模型上定义 `$attributes` 属性：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     *  模型的默认属性值。
     *
     * @var array
     */
    protected $attributes = [
        'delayed' => false,
    ];
}
```

## 模型检索

创建模型和[【`它关联的数据库表`】](https://learnku.com/docs/laravel/6.x/migrations/5173#writing-migrations)后，你就可以从数据库中查询数据了

- 将每个 Eloquent 模型想象成一个强大的查询构造器[【 `query builder` 】](https://learnku.com/docs/laravel/6.x/queries/5171)，你可以用它更快速的查询与其相关联的数据表

```php
<?php

$flights = App\Flight::all();

foreach ($flights as $flight) {
    echo $flight->name;
}
```

### 附加约束

Eloquent 的 `all` 方法会返回模型中所有的结果

- 由于每个 Eloquent 模型都充当一个[【查询构造器】](https://learnku.com/docs/laravel/6.x/queries/5171)

- 所以你也可以添加查询条件

- 然后使用 `get` 方法获取查询结果

```php
$flights = App\Flight::where('active', 1)
               ->orderBy('name', 'desc')
               ->take(10)
               ->get();
```

> 注意：因为 Eloquent 模型也是查询构造器，所以你也应当阅读[【查询构造器】](https://learnku.com/docs/laravel/6.x/queries/5171)可用的所有方法
>> 你可以在 Eloquent 查询中使用这些方法

### 重新加载模型

你可以使用 `fresh` 和 `refresh` 方法重新加载模型

- `fresh` 方法会重新从数据库中检索模型，现有的模型实例不受影响

```php
$flight = App\Flight::where('number', 'FR 900')->first();

$freshFlight = $flight->fresh();
```

- refresh 方法使用数据库中的新数据重新赋值现有模型

  此外，已经加载的关系会被重新加载

```php
$flight = App\Flight::where('number', 'FR 900')->first();

$flight->number = 'FR 456';

$flight->refresh();

$flight->number; // "FR 900"
```

### 集合

Eloquent 的 `all` 和 `get` 方法可以查询到多个结果，返回一个 `Illuminate\Database\Eloquent\Collection` 实例

- `Collection` 类提供了[【大量的辅助函数】](https://learnku.com/docs/laravel/6.x/eloquent-collections/5178#available-methods)来处理 Eloquent 结果

```php
$flights = $flights->reject(function ($flight) {
    return $flight->cancelled;
});
```

- 你可以像数组一样遍历集合：

```php
foreach ($flights as $flight) {
    echo $flight->name;
}
```

### 分块结果

如果你需要处理数以千计的 Eloquent 结果，使用 `chunk` 命令

- `chunk` 方法会检索 Eloquent 模型中的『分块』将他们提供给指定的 `Closure` 处理

- 在处理大型结果集时，使用 `chunk` 方法可以节省内存

```php
Flight::chunk(200, function ($flights) {
    foreach ($flights as $flight) {
        //
    }
});
```

- 传递到方法的第一个参数是希望每个『分块』接收的数据量

- 闭包作为第二个参数传递

  它在每次从数据库中检索分块的时候调用

  它将执行数据库查询把检索分块的结果传递给闭包方法

#### 使用游标

`cursor` 方法允许你使用游标遍历数据库，它只执行一次查询

- 处理大量的数据时，`cursor` 方法可以大大减少内存的使用量

```php
foreach (Flight::where('foo', 'bar')->cursor() as $flight) {
    //
}
```

`cursor` 返回 `Illuminate\Support\LazyCollection` 实例

- [【 Lazy collections 】](https://learnku.com/docs/laravel/6.x/collections/5161#lazy-collections)允许你使用 Laravel 集合中大多数集合方法，而且每次只会加载单个模型到内存中

```php
$users = App\User::cursor()->filter(function ($user) {
    return $user->id > 500;
});

foreach ($users as $user) {
    echo $user->id;
}
```

### 高级子查询

> Eloquent 提供了高级子查询支持，你可以用单条查询语句从相关表中提取信息

举个例子，假设我们有一个目的地表 `destinations` 和一个到目的地的航班表 `flights`

- `flights` 表包含一个 `arrival_at` 字段，表示航班何时到达目的地

#### `Selects` 子查询

使用子查询功能提供的 `select` 和 `addSelect` 方法，我们可以用单条语句查询全部目的地 `destinations` ，以及抵达各目的地最后一班飞机的名称

```php
use App\Flight;
use App\Destination;

return Destination::addSelect(['last_flight' => Flight::select('name')
    ->whereColumn('destination_id', 'destinations.id')
    ->orderBy('arrived_at', 'desc')
    ->latest()
    ->limit(1)
])->get();
```

#### `Ordering` 子查询

此外，查询构建器的 `orderBy` 函数也支持子查询

- 我们可以使用此功能根据最后一班航班到达目的地的时间对所有目的地排序

- 同样，这可以只对数据库执行单个查询

```php
return Destination::orderByDesc(
    Flight::select('arrived_at')
        ->whereColumn('destination_id', 'destinations.id')
        ->orderBy('arrived_at', 'desc')
        ->latest()
        ->limit(1)
)->get();
```

## 检索单个模型 / 集合

除了从指定的数据表检索所有记录外，你可以使用 `find` 或 `first` 方法来检索单条记录

- 这些方法返回单个模型实例，而不是返回模型集合

```php
// 通过主键检索一个模型...
$flight = App\Flight::find(1);

// 检索符合查询限制的第一个模型...
$flight = App\Flight::where('active', 1)->first();
```

你也可以使用主键数组作为参数调用 find 方法，它将返回匹配记录的集合：

```php
$flights = App\Flight::find([1, 2, 3]);
```

### 『未找到』异常

有时你希望在未找到模型时抛出异常，这在控制器和路由中非常有用

- `findOrFail` 和 `firstOrFail` 方法会检索查询的第一个结果，如果未找到，将抛出 `Illuminate\Database\Eloquent\ModelNotFoundException` 异常

```php
$model = App\Flight::findOrFail(1);

$model = App\Flight::where('legs', '>', 100)->firstOrFail();
```

如果没有捕获异常，则会自动返回 `404` 响应给用户

- 也就是说，使用这些方法时，没有必要再写个检查来返回 `404` 响应

```php
Route::get('/api/flights/{id}', function ($id) {
    return App\Flight::findOrFail($id);
});
```

### 检索集合

你还可以使用[【查询构造器】](https://learnku.com/docs/laravel/6.0/queries)提供的 `count` ，`sum` ，`max` ，和其他的[【聚合函数】](https://learnku.com/docs/laravel/6.0/queries#aggregates)

- 这些方法只会返回适当的标量值而不是一个模型实例

```php
$count = App\Flight::where('active', 1)->count();

$max = App\Flight::where('active', 1)->max('price');
```

## 插入 & 更新模型

### 插入

要往数据库新增一条记录，先创建新模型实例，给实例设置属性，然后调用 `save` 方法：

```php
<?php

namespace App\Http\Controllers;

use App\Flight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FlightController extends Controller
{
    /**
     * 创建一个新的航班实例
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        // 校验请求...

        $flight = new Flight;

        $flight->name = $request->name;

        $flight->save();
    }
}
```

- 在这个示例中，我们将 HTTP 请求参数 `name` 赋值给了 `App\Flight` 模型实例的 `name` 属性

- 当调用 `save` 方法时，将会插入一条新记录

- `created_at` 和 `updated_at` 时间戳将会自动设置，不需要手动赋值

### 更新

`save` 方法也可以用来更新数据库已经存在的模型

- 更新模型，你需要先检索出来，设置要更新的属性，然后调用 `save` 方法

- 同样，`updated_at` 时间戳会自动更新，所以也不需要手动赋值

```php
$flight = App\Flight::find(1);

$flight->name = 'New Flight Name';

$flight->save();
```

#### 批量更新

也可以更新匹配查询条件的多个模型

- 在这个示例中，所有的 `active` 和 `destination` 为 `San Diego` 的航班会标记为延误

```php
App\Flight::where('active', 1)
          ->where('destination', 'San Diego')
          ->update(['delayed' => 1]);
```

- `update` 方法接受一个键为字段名称数据为值的数组

> 注意：通过 Eloquent 批量更新时，更新的模型不会触发 `saved` 和 `updated` 事件
> - 因为在批量更新时，从不会去检索模型

### 批量赋值

你也可以使用 `create` 方法来保存新模型，此方法会返回模型实例

- 不过，在使用之前，你需要在模型上指定 `fillable` 或 `guarded` 属性，因为所有的 Eloquent 模型都默认不可进行批量赋值

- 当用户通过 `HTTP` 请求传入一个意外的参数，并且该参数更改了数据库中你不需要更改的字段时

  - 比如：恶意用户可能会通过 `HTTP` 请求传入 `is_admin` 参数，然后将其传给 `create` 方法，此操作能让用户将自己升级成管理员

- 所以，在开始之前，你应该定义好模型上的哪些属性是可以被批量赋值的

  - 你可以通过模型上的 `$fillable` 属性来实现

例如：让 `Flight` 模型的 `name` 属性可以被批量赋值：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 可以被批量赋值的属性。
     *
     * @var array
     */
    protected $fillable = ['name'];
}
```

- 一旦我们设置好了可以批量赋值的属性，就可以通过 `create` 方法插入新数据到数据库中了

`create` 方法将返回保存的模型实例：

```php
$flight = App\Flight::create(['name' => 'Flight 10']);
```

如果你已经有一个模型实例，你可以传递一个数组给 `fill` 方法来赋值：

```php
$flight->fill(['name' => 'Flight 22']);
```

#### 保护属性

`$fillable` 可以看作批量赋值的「白名单」，你也可以使用 `$guarded` 属性来实现

- `$guarded` 属性包含的是不允许批量赋值的数组

- 也就是说，`$guarded` 从功能上将更像是一个「黑名单」

> 注意：你只能使用 `$fillable` 或 `$guarded` 二者中的一个，不可同时使用

下面这个例子中，除了 `price` 属性，其他的属性都可以批量赋值：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 不可批量赋值的属性。
     *
     * @var array
     */
    protected $guarded = ['price'];
}
```

- 如果你想让所有属性都可以批量赋值，你可以将 `$guarded` 定义成一个空数组：

```php
/**
 * 不可批量赋值的属性。
 *
 * @var array
 */
protected $guarded = [];
```

### 其他创建方法

#### `firstOrCreate` / `firstOrNew`

这里有两个你可能用来批量赋值的方法： `firstOrCreate` 和 `firstOrNew`

- `firstOrCreate` 方法会通过给定的 **`列`** / **`值`** 来匹配数据库中的数据

  如果在数据库中找不到对应的模型，则会从第一个参数的属性乃至第二个参数的属性中创建一条记录插入到数据库

- `firstOrNew` 方法像 `firstOrCreate` 方法一样尝试通过给定的属性查找数据库中的记录

  不同的是，如果 `firstOrNew` 方法找不到对应的模型，会返回一个新的模型实例

> 注意：`firstOrNew` 返回的模型实例尚未保存到数据库中，你需要手动调用 `save` 方法来保存

```php
// 通过 name 来查找航班，不存在则创建...
$flight = App\Flight::firstOrCreate(['name' => 'Flight 10']);

// 通过 name 查找航班，不存在则使用 name 和 delayed 属性创建...
$flight = App\Flight::firstOrCreate(
    ['name' => 'Flight 10'],
    ['delayed' => 1, 'arrival_time' => '11:30']
);

//  通过 name 查找航班，不存在则创建一个实例...
$flight = App\Flight::firstOrNew(['name' => 'Flight 10']);

// 通过 name 查找航班，不存在则使用 name 和 delayed 属性创建一个实例...
$flight = App\Flight::firstOrNew(
    ['name' => 'Flight 10'],
    ['delayed' => 1, 'arrival_time' => '11:30']
);
```

#### `updateOrCreate`

你还可能遇到希望更新现有模型或在不存在的情况下则创建新的模型的情景

- Laravel 提供了 `updateOrCreate` 方法仅一个步骤就可以实现

- 跟 `firstOrCreate` 方法一样，`updateOrCreate` 匹配到对应模型，所以不需要调用 `save()` 方法：

```php
// 如果有从奥克兰到圣地亚哥的航班，则价格定为99美元。
// 如果没匹配到存在的模型，则创建一个。
$flight = App\Flight::updateOrCreate(
    ['departure' => 'Oakland', 'destination' => 'San Diego'],
    ['price' => 99, 'discounted' => 1]
);
```

## 删除模型

可以在模型实例上调用 `delete` 方法来删除实例

```php
$flight = App\Flight::find(1);

$flight->delete();
```

### 通过主键删除模型

在上面的例子中，在调用 `delete` 之前需要先去数据库中查找对应的模型

- 事实上，如果你知道了模型的主键，你可以直接使用 `destroy` 方法来删除模型，而不用先去数据库中查找

- `destroy` 方法除了接受单个主键作为参数之外，还接受多个主键，或者使用数组，集合来保存多个主键

```php
App\Flight::destroy(1);

App\Flight::destroy(1, 2, 3);

App\Flight::destroy([1, 2, 3]);

App\Flight::destroy(collect([1, 2, 3]));
```

### 通过查询删除模型

你也可以在模型上运行删除语句

- 在这个例子中，我们将删除所有标记为非活跃的航班

- 与批量更新一样，批量删除不会为删除的模型启动任何模型事件

```php
$deletedRows = App\Flight::where('active', 0)->delete();
```

> 注意：通过 Eloquent 执行批量删除语句时，不会触发 `deleting` 和 `deleted` 模型事件
>> 因此，在执行删除语句时，从不检索模型示例

### 软删除

除了真实删除数据库记录，Eloquent 也可以「软删除」模型

- 软删除的模型并不是真的从数据库中删除了

- 事实上，是在模型上设置了 `deleted_at` 属性并将其值写入数据库

- 如果 `deleted_at` 值非空，代表这个模型已被软删除

- 如果要开启模型软删除功能，你需要在模型上使用 `Illuminate\Database\Eloquent\SoftDeletes` ：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Flight extends Model
{
    use SoftDeletes;
}
```

> 注意：`SoftDeletes` 会自动将 `deleted_at` 属性转换成 `DateTime` / `Carbon` 实例

当然，你需要把 `deleted_at` 字段添加到数据表中

- Laravel 的[【数据库迁移】](https://learnku.com/docs/laravel/6.x/migrations/5173)有创建这个字段的方法：

```php
Schema::table('flights', function (Blueprint $table) {
    $table->softDeletes();
});
```

- 那现在，当你在模型实例上使用 `delete` 方法，当前日期时间会写入 `deleted_at` 字段

- 同时，查询出来的结果也会自动排除已被软删除的记录

你可以使用 `trashed` 方法来验证当前模型是否软删除：

```php
if ($flight->trashed()) {
    //
}
```

### 查询软删除模型

#### 包括已软删除的模型

前面提到，查询结果会自动剔除已被软删除的结果

- 当然，你可以使用 `withTrashed` 方法来获取包括软删除模型在内的模型

```php
$flights = App\Flight::withTrashed()
                ->where('account_id', 1)
                ->get();
```

- `withTrashed` 方法也可以用在[【关联】](https://learnku.com/docs/laravel/6.x/eloquent-relationships/5177)查询：

```php
$flight->history()->withTrashed()->get();
```

#### 只检索软删除模型

`onlyTrashed` 方法「只」 获取已软删除的模型：

```php
$flights = App\Flight::onlyTrashed()
                ->where('airline_id', 1)
                ->get();
```

#### 恢复软删除模型

有时会对软删除模型进行「撤销」，在已软删除的数据上使用 `restore` 方法即可恢复到有效状态：

```php
$flight->restore();
```

你也可以在查询中使用 `restore` 方法，从而快速恢复多个模型

- 和其他「批量」操作一样，这个操作不会触发模型的任何事件

```php
App\Flight::withTrashed()
        ->where('airline_id', 1)
        ->restore();
```

类似 `withTrashed` 方法，`restore` 方法也用在[【关联】](https://learnku.com/docs/laravel/6.x/eloquent-relationships/5177)上：

```php
$flight->history()->restore();
```

#### 永久删除

有时你可能需要从数据库中真正删除模型

- 要从数据库中永久删除软删除的模型，请使用 `forceDelete` 方法

```php
// 强制删除单个模型实例...
$flight->forceDelete();

// 强制删除所有相关模型...
$flight->history()->forceDelete();
```

## 查询作用域

### 全局作用域

全局作用域可以给模型的查询都添加上约束

- Laravel 的[【软删除】](https://learnku.com/docs/laravel/6.x/eloquent/5176#soft-deleting)功能就是利用此特性从数据库中获取「未删除」的模型

#### 编写全局作用域

你可以编写你自己的全局作用域，很简单、方便的为每个模型查询都加上约束条件

- 定义一个实现 `Illuminate\Database\Eloquent\Scope` 接口的类，并实现 `apply` 这个方法

- 根据你的需求，在 `apply` 方法中加入查询的 `where` 条件

```php
<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class AgeScope implements Scope
{
    /**
     * 把约束加到 Eloquent 查询构造中。
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        $builder->where('age', '>', 200);
    }
}
```

> 提示：如果你需要在 `select` 语句里添加字段，应使用 `addSelect` 方法，而不是 `select` 方法
>> 这将有效防止无意中替换现有 `select` 语句的情况

#### 应用全局作用域

要将全局作用域分配给模型，需要重写模型的 `boot` 方法并使用 `addGlobalScope` 方法：

```php
<?php

namespace App;

use App\Scopes\AgeScope;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 模型的「启动」方法
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new AgeScope);
    }
}
```

添加作用域后，对 `User::all()` 的查询会生成以下 SQL 查询语句：

```php
select * from `users` where `age` > 200
```

#### 匿名全局作用域

Eloquent 同样允许使用闭包定义全局作用域，这样就不需要为一个简单的作用域而编写一个单独的类：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class User extends Model
{
    /**
     * 模型的「启动」方法
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('age', function (Builder $builder) {
            $builder->where('age', '>', 200);
        });
    }
}
```

#### 取消全局作用域

如果需要对当前查询取消全局作用域，需要使用 `withoutGlobalScope` 方法

- 该方法仅接受全局作用域类名作为它唯一的参数

```php
User::withoutGlobalScope(AgeScope::class)->get();
```

或者，如果使用闭包定义全局作用域的话：

```php
User::withoutGlobalScope('age')->get();
```

如果你需要取消部分或者全部的全局作用域的话，需要使用 `withoutGlobalScopes` 方法：

```php
// 取消所有的全局作用域...
User::withoutGlobalScopes()->get();

// 取消部分全局作用域...
User::withoutGlobalScopes([
    FirstScope::class, SecondScope::class
])->get();
```

### 本地作用域

本地作用域允许定义通用的约束集合以便在应用程序中重复使用

- 例如，你可能经常需要获取所有「流行」的用户

- 要定义这样一个范围，只需要在对应的 Eloquent 模型方法前添加 `scope` 前缀

作用域总是返回一个查询构造器实例：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 只查询受欢迎的用户的作用域
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePopular($query)
    {
        return $query->where('votes', '>', 100);
    }

    /**
     * 只查询 active 用户的作用域
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}
```

#### 使用本地作用域

一旦定义了作用域，就可以在查询该模型时调用作用域方法

- 不过，在调用这些方法时不必包含 `scope` 前缀

- 甚至可以链式调用多个作用域

```php
$users = App\User::popular()->active()->orderBy('created_at')->get();
```

借助 `or` 查询运行符整合多个 Eloquent 模型，可能需要使用闭包回调：

```php
$users = App\User::popular()->orWhere(function (Builder $query) {
    $query->active();
})->get();
```

因为这样可能会有点麻烦，Laravel 提供了「更高阶的」`orWhere` 方法，它允许你在链式调用作用域时不使用闭包：

```php
$users = App\User::popular()->orWhere->active()->get();
```

### 动态作用域

有时可能地希望定义一个可以接受参数的作用域

- 把额外参数传递给作用域就可以达到此目的

- 作用域参数要放在 `$query` 参数之后

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 将查询作用域限制为仅包含给定类型的用户
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }
}
```

这样就可以在调用作用域时传递参数了：

```php
$users = App\User::ofType('admin')->get();
```

## 模型比较

有时可能需要判断两个模型是否「相同」

- `is` 方法可以用来快速校验两个模型是否拥有相同的「主键」、「表」和「数据库连接」

```php
if ($post->is($anotherPost)) {
    //
}
```

## 事件

Eloquent 模型触发几个事件，允许你挂接到模型生命周期的如下节点：

- `retrieved`
- `creating`
- `created`
- `updating`
- `updated`
- `saving`
- `saved`
- `deleting`
- `deleted`
- `restoring`
- `restored`

事件允许你每当特定模型保存或更新数据库时执行代码

- 每个事件通过其构造器接受模型实例

- `retrieved` 事件在现有模型从数据库中查找数据时触发

- 当新模型每一次保存时，`creating` 和 `created` 事件被触发

- 如果数据库中已经存在模型并且调用了 `save` 方法，`updating` / `updated` 事件被触发

- 这些情况下，`saving` / `saved` 事件也被触发

> 注意：通过 Eloquent 进行批量更新时，被更新模型的 `saved` 和 `updated` 事件不会被触发
>> 这是因为批量更新时，并没有真的获取模型

首先，在 Eloquent 模型上定义一个 `$dispatchesEvents` 属性，将 Eloquent 模型生命周期的几个节点映射到你自己的[【 `event` 类】](https://learnku.com/docs/laravel/6.x/events/5162)：

```php
<?php

namespace App;

use App\Events\UserSaved;
use App\Events\UserDeleted;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * 模型的事件映射
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'saved' => UserSaved::class,
        'deleted' => UserDeleted::class,
    ];
}
```

- 定义并且映射了 Eloquent 事件，就可以使用[【事件监听】](https://learnku.com/docs/laravel/6.x/events/5162#defining-listeners)处理这些事件了

### 观察者

> 如果在一个模型上监听了多个事件，可以使用观察者来将这些监听器组织到一个单独的类中

观察者类的方法名映射到你希望监听的 Eloquent 事件

- 这些方法都以模型作为其唯一参数

- `make:observer Artisan` 命令可以快速建立新的观察者类

```
php artisan make:observer UserObserver --model=User
```

- 此命令将在 `App/Observers` 文件夹放置新的观察者类

- 如果这个目录不存在，`Artisan` 将替你创建

使用如下方式开启观察者：

```php
<?php

namespace App\Observers;

use App\User;

class UserObserver
{
    /**
     * 处理 User「新建」事件
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user)
    {
        //
    }

    /**
     * 处理 User「更新」事件
     *
     * @param  \App\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        //
    }

    /**
     * 处理 User「删除」事件
     *
     * @param  \App\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }
}
```

- 在你希望观察的模型上使用 `observe` 方法注册观察者

- 也可以在服务提供者的 `boot` 方法注册观察者

下面是在 `AppServiceProvider` 中注册观察者的示例：

```php
<?php

namespace App\Providers;

use App\User;
use App\Observers\UserObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册服务提供者
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * 引导应用程序服务.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
    }
}
```

# Eloquent：关联

> 数据库表通常相互关联：例如，一篇博客文章可能有很多评论，或者一个订单对应一个下单用户

Eloquent 让这些关联的管理和使用变得简单，并支持多种类型的关联：

- 一对一
- 一对多
- 多对多
- 远程一对一
- 远程一对多
- 一对一 (多态关联)
- 一对多 (多态关联)
- 多对多 (多态关联)

## 定义关联

Eloquent 关联在 Eloquent 模型类中以方法的形式呈现

- 如同 Eloquent 模型本身，关联也可以作为强大的[【查询语句构造器】](https://learnku.com/docs/laravel/6.x/queries/5171)使用，提供了强大的链式调用和查询功能

例如，我们可以在 `posts` 关联的链式调用中附加一个约束条件：

```php
$user->posts()->where('active', 1)->get();
```

### 一对一

一对一是最基本的关联关系

- 例如，一个 `User` 模型可能关联一个 `Phone` 模型

- 为了定义这个关联，我们要在 `User` 模型中写一个 `phone` 方法

- 在 `phone` 方法内部调用 `hasOne` 方法并返回其结果

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 获取与用户关联的电话记录。
     */
    public function phone()
    {
        return $this->hasOne('App\Phone');
    }
}
```

- `hasOne` 方法的第一个参数是关联模型的类名

一旦定义了模型关联，我们就可以使用 Eloquent 动态属性获得相关的记录

- 动态属性允许你访问关系方法就像访问模型中定义的属性一样

```php
$phone = User::find(1)->phone;
```

Eloquent 会基于模型名决定外键名称

- 在这种情况下，会自动假设 `Phone` 模型有一个 `user_id` 外键

- 如果你想覆盖这个约定，可以传递第二个参数给 `hasOne` 方法

```php
return $this->hasOne('App\Phone', 'foreign_key');
```

另外，Eloquent 假设外键的值是与父级 `id` (或自定义 `$primaryKey` ) 列的值相匹配的

- 换句话说，Eloquent 将会在 `Phone` 记录的 `user_id` 列中查找与用户表的 `id` 列相匹配的值

- 如果您希望该关联使用 `id` 以外的自定义键名，则可以给 `hasOne` 方法传递第三个参数：

```php
return $this->hasOne('App\Phone', 'foreign_key', 'local_key');
```

#### 定义反向关联

我们已经能从 `User` 模型访问到 `Phone` 模型了

- 现在，让我们再在 `Phone` 模型上定义一个关联，这个关联能让我们访问到拥有该电话的 `User` 模型

- 我们可以使用与 `hasOne` 方法对应的 `belongsTo` 方法来定义反向关联

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    /**
     * 获得拥有此电话的用户。
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
```

- 在上面的例子中，Eloquent 会尝试匹配 `Phone` 模型上的 `user_id` 至 `User` 模型上的 `id`

- 它是通过检查关系方法的名称并使用 `_id` 作为后缀名来确定默认外键名称的

但是，如果 `Phone` 模型的外键不是 `user_id` ，那么可以将自定义键名作为第二个参数传递给 `belongsTo` 方法：

```php
/**
 * 获得拥有此电话的用户。
 */
public function user()
{
    return $this->belongsTo('App\User', 'foreign_key');
}
```

如果父级模型没有使用 `id` 作为主键，或者是希望用不同的字段来连接子级模型，则可以通过给 `belongsTo` 方法传递第三个参数的形式指定父级数据表的自定义键：

```php
/**
 * 获得拥有此电话的用户
 */
public function user()
{
    return $this->belongsTo('App\User', 'foreign_key', 'other_key');
}
```

### 一对多

『一对多』关联用于定义单个模型拥有任意数量的其它关联模型

- 例如，一篇博客文章可能会有无限多条评论

- 正如其它所有的 Eloquent 关联一样，一对多关联的定义也是在 Eloquent 模型中写一个方法

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * 获取博客文章的评论
     */
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
```

- 按照约定，Eloquent 将会使用所属模型名称的『snake case』形式，再加上 `_id` 后缀作为外键字段

- 因此，在上面这个例子中，Eloquent 将假定 `Comment` 对应到 `Post` 模型上的外键就是 `post_id`

> 记住一点，Eloquent 将会自动确定 `Comment` 模型的外键属性

一旦关系被定义好以后，就可以通过访问 `Post` 模型的 `comments` 属性来获取评论的集合

> 记住，由于 Eloquent 提供了『动态属性』，所以我们可以像访问模型的属性一样访问关联方法

```php
$comments = App\Post::find(1)->comments;

foreach ($comments as $comment) {
    //
}
```

当然，由于所有的关联还可以作为查询语句构造器使用，因此你可以使用链式调用的方式，在 `comments` 方法上添加额外的约束条件：

```php
$comment = App\Post::find(1)->comments()->where('title', 'foo')->first();
```

正如 `hasOne` 方法一样，你也可以在使用 hasMany 方法的时候，通过传递额外参数来覆盖默认使用的外键与本地键：

```php
return $this->hasMany('App\Comment', 'foreign_key');

return $this->hasMany('App\Comment', 'foreign_key', 'local_key');
```

### 一对多(反向)

现在，我们已经能获得一篇文章的所有评论，接着再定义一个通过评论获得所属文章的关联关系

- 这个关联是 `hasMany` 关联的反向关联，需要在子级模型中使用 `belongsTo` 方法定义它

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * 获取此评论所属文章
     */
    public function post()
    {
        return $this->belongsTo('App\Post');
    }
}
```

这个关系定义好以后，我们就可以通过访问 `Comment` 模型的 `post` 这个『动态属性』来获取关联的 `Post` 模型了：

```php
$comment = App\Comment::find(1);

echo $comment->post->title;
```

- 在上面的例子中，Eloquent 会尝试用 `Comment` 模型的 `post_id` 与 `Post` 模型的 `id` 进行匹配

- 默认外键名是 Eloquent 依据关联名，并在关联名后加上 `_` 再加上主键字段名作为后缀确定的

当然，如果 Comment 模型的外键不是 `post_id` ，那么可以将自定义键名作为第二个参数传递给 `belongsTo` 方法：

```php
/**
 * 获取此评论所属文章
 */
public function post()
{
    return $this->belongsTo('App\Post', 'foreign_key', 'other_key');
}
```

### 多对多

多对多关联比 `hasOne` 和 `hasMany` 关联稍微复杂些

- 举个例子，一个用户可以拥有很多种角色，同时这些角色也被其他用户共享

例如，许多用户可能都有「管理员」这个角色

- 要定义这种关联，需要三个数据库表：

  - `users`
  - `roles`
  - `role_user`

- `role_user` 表的命名是由关联的两个模型按照字母顺序来的，并且包含了 `user_id` 和 `role_id` 字段

- 多对多关联通过调用 `belongsToMany` 这个内部方法返回的结果来定义

例如，我们在 `User` 模型中定义 `roles` 方法：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 用户拥有的角色
     */
    public function roles()
    {
        return $this->belongsToMany('App\Role');
    }
}
```

一旦关联关系被定义后，你可以通过 `roles` 动态属性获取用户角色：

```php
$user = App\User::find(1);

foreach ($user->roles as $role) {
    //
}
```

当然，像其它所有关联模型一样，你可以使用 `roles` 方法，利用链式调用对查询语句添加约束条件：

```php
$roles = App\User::find(1)->roles()->orderBy('name')->get();
```

- 正如前面所提到的，为了确定关联连接表的表名，Eloquent 会按照字母顺序连接两个关联模型的名字

当然，你也可以不使用这种约定，传递第二个参数到 `belongsToMany` 方法即可：

```php
return $this->belongsToMany('App\Role', 'role_user');
```

除了自定义连接表的表名，你还可以通过传递额外的参数到 `belongsToMany` 方法来定义该表中字段的键名

- 第三个参数是定义此关联的模型在连接表里的外键名

- 第四个参数是另一个模型在连接表里的外键名

```php
return $this->belongsToMany('App\Role', 'role_user', 'user_id', 'role_id');
```

#### 定义反向关联

要定义多对多的反向关联，你只需要在关联模型中调用 `belongsToMany` 方法

- 我们在 `Role` 模型中定义 `users` 方法

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * 拥有此角色的用户
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
```

- 如你所见，除了引入模型为 `App\User` 外，其它与在 `User` 模型中定义的完全一样

- 由于我们重用了 `belongsToMany` 方法，自定义连接表表名和自定义连接表里的键的字段名称在这里同样适用

#### 获取中间表字段

就如你刚才所了解的一样，多对多的关联关系需要一个中间表来提供支持，Eloquent 提供了一些有用的方法来和这张表进行交互

- 例如，假设我们的 `User` 对象关联了多个 `Role` 对象

- 在获得这些关联对象后，可以使用模型的 `pivot` 属性访问中间表的数据

```php
$user = App\User::find(1);

foreach ($user->roles as $role) {
    echo $role->pivot->created_at;
}
```

> 需要注意的是
> - 我们获取的每个 `Role` 模型对象，都会被自动赋予 `pivot` 属性，它代表中间表的一个模型对象，并且可以像其他的 Eloquent 模型一样使用

默认情况下，`pivot` 对象只包含两个关联模型的主键，如果你的中间表里还有其他额外字段，你必须在定义关联时明确指出：

```php
return $this->belongsToMany('App\Role')->withPivot('column1', 'column2');
```

如果你想让中间表自动维护 `created_at` 和 `updated_at` 时间戳，那么在定义关联时附加上 `withTimestamps` 方法即可：

```php
return $this->belongsToMany('App\Role')->withTimestamps();
```

#### 自定义 `pivot` 属性名称

如前所述，来自中间表的属性可以使用 `pivot` 属性访问

- 但是，你可以自由定制此属性的名称，以便更好的反应其在应用中的用途

例如，如果你的应用中包含可能订阅的用户，则用户与博客之间可能存在多对多的关系

- 如果是这种情况，你可能希望将中间表访问器命名为 `subscription` 取代 `pivot`

- 这可以在定义关系时使用 `as` 方法完成：

```php
return $this->belongsToMany('App\Podcast')
                ->as('subscription')
                ->withTimestamps();
```

一旦定义完成，你可以使用自定义名称访问中间表数据：

```php
$users = User::with('podcasts')->get();

foreach ($users->flatMap->podcasts as $podcast) {
    echo $podcast->subscription->created_at;
}
```

#### 通过中间表过滤关系

在定义关系时，你还可以使用 `wherePivot` 和 `wherePivotIn` 方法来过滤 `belongsToMany` 返回的结果：

```php
return $this->belongsToMany('App\Role')->wherePivot('approved', 1);

return $this->belongsToMany('App\Role')->wherePivotIn('priority', [1, 2]);
```

### 定义中间表模型

如果你想定义一个自定义模型来表示关联关系中的中间表，可以在定义关联时调用 `using` 方法

- 自定义多对多中间表模型都必须扩展自 `Illuminate\Database\Eloquent\Relations\Pivot` 类

- 自定义多对多(多态)中间表模型必须继承 `Illuminate\Database\Eloquent\Relations\MorphPivot` 类

例如，我们在写 `Role` 模型的关联时，使用自定义中间表模型 `RoleUser`

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * 拥有此角色的所有用户
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->using('App\RoleUser');
    }
}
```

当定义 `RoleUser` 模型时，我们要扩展 `Pivot` 类：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RoleUser extends Pivot
{
    //
}
```

你可以组合使用 `using` 和 `withPivot` 从中间表来检索列

- 例如，通过将列名传递给 `withPivot` 方法，就可以从 UserRole 中间表中检索出 `created_by` 和 `updated_by` 两列数据

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * 拥有此角色的用户。
     */
    public function users()
    {
        return $this->belongsToMany('App\User')
                        ->using('App\RoleUser')
                        ->withPivot([
                            'created_by',
                            'updated_by',
                        ]);
    }
}
```

> 注意：`Pivot` 模型可能不使用 `SoftDeletes` 特性
> - 如果您需要软删除数据关联记录，请考虑将您的数据关联模型转换为实际的 `Eloquent` 模型

#### 带有递增 `ID` 的自定义中继模型

如果你用一个自定义的中继模型定义了多对多的关系，而且这个中继模型拥有一个自增的主键，你应当确保这个自定义中继模型类中定义了一个 `incrementing` 属性其值为 `true` ：

```php
/**
 * 标识 ID 是否自增。
 *
 * @var bool
 */
public $incrementing = true;
```

### 远程一对一关系

远程一对一关联通过一个中间关联模型实现，例如

- 如果每个供应商都有一个用户

- 并且每个用户与一个用户历史记录相关联

- 那么供应商可以通过用户访问用户的历史记录

让我们看看定义这种关系所需的数据库表：

```
users
    id - integer
    supplier_id - integer

suppliers
    id - integer

history
    id - integer
    user_id - integer
```

- 虽然 `history` 表不包含 `supplier_id` ，但 `hasOneThrough` 关系可以提供对用户历史记录的访问，以访问供应商模型

现在我们已经检查了关系的表结构，让我们在 `Supplier` 模型上定义相应的方法：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    /**
     * 用户的历史记录。
     */
    public function userHistory()
    {
        return $this->hasOneThrough('App\History', 'App\User');
    }
}
```

- 传递给 `hasOneThrough` 方法的第一个参数是希望访问的模型名称，第二个参数是中间模型的名称

当执行关联查询时，通常会使用 Eloquent 约定的外键名

- 如果你想要自定义关联的键，可以通过给 `hasOneThrough` 方法传递第三个和第四个参数实现

- 第三个参数表示中间模型的外键名

- 第四个参数表示最终模型的外键名

- 第五个参数表示本地键名

- 第六个参数表示中间模型的本地键名

```php
class Supplier extends Model
{
    /**
     * 用户的历史记录。
     */
    public function userHistory()
    {
        return $this->hasOneThrough(
            'App\History',
            'App\User',
            'supplier_id', // 用户表外键
            'user_id', // 历史记录表外键
            'id', // 供应商本地键
            'id' // 用户本地键
        );
    }
}
```

### 远程一对多关联

远程「一对多」关联提供了方便、简短的方式通过中间的关联来获得远层的关联

- 例如，一个 `Country` 模型可以通过中间的 `User` 模型获得多个 `Post` 模型

- 在这个例子中，你可以轻易地收集给定国家的所有博客文章

让我们来看看定义这种关联所需的数据表：

```php
countries
    id - integer
    name - string

users
    id - integer
    country_id - integer
    name - string

posts
    id - integer
    user_id - integer
    title - string
```

- 虽然 `posts` 表中不包含 `country_id` 字段，但 `hasManyThrough` 关联能让我们通过 `$country->posts` 访问到一个国家下所有的用户文章

- 为了完成这个查询，Eloquent 会先检查中间表 `users` 的 `country_id` 字段，找到所有匹配的用户 `ID` 后，使用这些 `ID` ，在 `posts` 表中完成查找

现在，我们已经知道了定义这种关联所需的数据表结构，接下来，让我们在 `Country` 模型中定义它：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    /**
     * 当前国家所有文章。
     */
    public function posts()
    {
        return $this->hasManyThrough('App\Post', 'App\User');
    }
}
```

- `hasManyThrough` 方法的第一个参数是我们最终希望访问的模型名称，而第二个参数是中间模型的名称

当执行关联查询时，通常会使用 Eloquent 约定的外键名

- 如果你想要自定义关联的键，可以通过给 `hasManyThrough` 方法传递第三个和第四个参数实现

- 第三个参数表示中间模型的外键名

- 第四个参数表示最终模型的外键名

- 第五个参数表示本地键名

- 而第六个参数表示中间模型的本地键名

## 多态关联

多态关联允许目标模型借助单个关联从属于多个模型

### 一对一(多态)

一对一多态关联与简单的一对一关联类似；不过，目标模型能够在一个关联上从属于多个模型

#### 表结构

例如，博客 `Post` 和 `User` 可能共享一个关联到 `Image` 模型的关系

- 使用一对一多态关联允许使用一个唯一图片列表同时用于博客文章和用户账户

让我们先看看表结构：

```php
posts
    id - integer
    name - string

users
    id - integer
    name - string

images
    id - integer
    url - string
    imageable_id - integer
    imageable_type - string
```

- 要特别留意 `images` 表的 `imageable_id` 和 `imageable_type` 列

- `imageable_id` 列包含文章或用户的 `ID` 值，而 `imageable_type` 列包含的则是父模型的类名

- Eloquent 在访问 `imageable` 时使用 `imageable_type` 列来判断父模型的「类型」

#### 模型结构

接下来，再看看建立关联的模型定义：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * 获取拥有此图片的模型。
     */
    public function imageable()
    {
        return $this->morphTo();
    }
}

class Post extends Model
{
    /**
     * 获取文章图片。
     */
    public function image()
    {
        return $this->morphOne('App\Image', 'imageable');
    }
}

class User extends Model
{
    /**
     * 获取用户图片。
     */
    public function image()
    {
        return $this->morphOne('App\Image', 'imageable');
    }
}
```

#### 获取关联

一旦定义了表和模型，就可以通过模型访问此关联

- 比如，要获取文章图片，可以使用 `image` 动态属性

```php
$post = App\Post::find(1);

$image = $post->image;
```

还可以通过访问执行 `morphTo` 调用的方法名来从多态模型中获知父模型

- 在这个例子中，就是 `Image` 模型的 `imageable` 方法

- 所以，我们可以像动态属性那样访问这个方法

```php
$image = App\Image::find(1);

$imageable = $image->imageable;
```

- `Image` 模型的 `imageable` 关联将返回 `Post` 或 `User` 实例，其结果取决于图片属性哪个模型

### 一对多(多态)

一对多多态关联与简单的一对多关联类似；不过，目标模型可以在一个关联中从属于多个模型

#### 表结构

假设应用中的用户可以同时「评论」文章和视频

- 使用多态关联，可以用单个 `comments` 表同时满足这些情况

我们还是先来看看用来构建这种关联的表结构

```php
posts
    id - integer
    title - string
    body - text

videos
    id - integer
    title - string
    url - string

comments
    id - integer
    body - text
    commentable_id - integer
    commentable_type - string
```

#### 模型结构

接下来，看看构建这种关联的模型定义：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * 获取拥有此评论的模型。
     */
    public function commentable()
    {
        return $this->morphTo();
    }
}

class Post extends Model
{
    /**
     * 获取此文章的所有评论。
     */
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}

class Video extends Model
{
    /**
     * 获取此视频的所有评论。
     */
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
```

#### 获取关联

一旦定义了数据库表和模型，就可以通过模型访问关联

- 例如，可以使用 `comments` 动态属性访问文章的全部评论

```php
$post = App\Post::find(1);

foreach ($post->comments as $comment) {
    //
}
```

还可以通过访问执行 `morphTo` 调用的方法名来从多态模型获取其所属模型

- 在本例中，就是 `Comment` 模型的 `commentable` 方法：

```php
$comment = App\Comment::find(1);

$commentable = $comment->commentable;
```

- `Comment` 模型的 `commentable` 关联将返回 `Post` 或 `Video` 实例，其结果取决于评论所属的模型

### 多对多(多态)

多对多多态关联比 `morphOne` 和 `morphMany` 关联略微复杂一些

#### 表结构

例如，博客 `Post` 和 `Video` 模型能够共享关联到 `Tag` 模型的多态关系

- 使用多对多多态关联允许使用一个唯一标签在博客文章和视频间共享

以下是多对多多态关联的表结构

```php
posts
    id - integer
    name - string

videos
    id - integer
    name - string

tags
    id - integer
    name - string

taggables
    tag_id - integer
    taggable_id - integer
    taggable_type - string
```

#### 模型结构

接下来，在模型上定义关联

- `Post` 和 `Video` 模型都有调用 Eloquent 基类上 `morphToMany` 方法的 `tags` 方法

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * 获取文章的所有标签。
     */
    public function tags()
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }
}
```

#### 定义反向关联关系

下面，需要在 `Tag` 模型上为每个关联模型定义一个方法

- 在这个示例中，我们将会定义 `posts` 方法和 `videos` 方法

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * 获取被打上此标签的所有文章。
     */
    public function posts()
    {
        return $this->morphedByMany('App\Post', 'taggable');
    }

    /**
     * 获取被打上此标签的所有视频。
     */
    public function videos()
    {
        return $this->morphedByMany('App\Video', 'taggable');
    }
}
```

#### 获取关联

一旦定义了数据库表和模型，就可以通过模型访问关联

- 例如，可以使用 `tags` 动态属性访问文章的所有标签

```php
$post = App\Post::find(1);

foreach ($post->tags as $tag) {
    //
}
```

还可以访问执行 `morphedByMany` 方法调用的方法名来从多态模型获取其所属模型

- 在这个示例中，就是 `Tag` 模型的 `posts` 或 `videos` 方法

- 可以像动态属性一样访问这些方法

```php
$tag = App\Tag::find(1);

foreach ($tag->videos as $video) {
    //
}
```

### 自定义多态类型

默认情况下，Laravel 使用完全限定类名存储关联模型类型

- 在上面的一对多示例中，因为 `Comment` 可能从属于一个 `Post` 或一个 `Video` ，默认的 `commentable_type` 就将分别是 `App\Post` 或 `App\Video`

- 不过，你可能希望数据库与应用的内部结构解耦

- 在这种情况下，可以定义一个「morph 映射」来通知 Eloquent 使用自定义名称代替对应的类名

```php
use Illuminate\Database\Eloquent\Relations\Relation;

Relation::morphMap([
    'posts' => 'App\Post',
    'videos' => 'App\Video',
]);
```

- 可以在 `AppServiceProvider` 的 `boot` 函数中注册 `morphMap` ，或者创建一个单独的服务提供者

> 注意：在现有应用程序中添加「morph 映射」时，数据库中仍包含完全限定类的每个可变形 `*_type` 列值都需要转换为其「映射」名称

## 查询关联

由于 Eloquent 关联的所有类型都通过方法定义，你可以调用这些方法，而无需真实执行关联查询

- 另外，所有 Eloquent 关联类型用作[【查询构造器】](https://learnku.com/docs/laravel/6.x/queries/5171)，允许你在数据库上执行 SQL 之前，持续通过链式调用添加约束

例如，假设一个博客系统的 User 模型有许多关联的 Post 模型：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 获取该用户的所有文章。
     */
    public function posts()
    {
        return $this->hasMany('App\Post');
    }
}
```

你可以查询 posts 关联，并为其添加额外的约束：

```php
$user = App\User::find(1);

$user->posts()->where('active', 1)->get();
```

- 你可以在关联上使用任意[【查询构造器】](https://learnku.com/docs/laravel/6.x/queries/5171)方法，请查阅查询构造器文档，学习那些对你有用的方法

### 在关联之后链式添加 `orWhere` 条件

如上所示，你可以在查询关联时自由添加其他约束

- 但是，在将 `orWhere` 子句链接到关联时要小心，因为 `orWhere` 子句将在逻辑上与关联约束处于同一级别

```php
$user->posts()
        ->where('active', 1)
        ->orWhere('votes', '>=', 100)
        ->get();

// select * from posts
// where user_id = ? and active = 1 or votes >= 100
```

在大多数情况下，你可以使用[【约束组】](https://learnku.com/docs/laravel/6.x/queries/5171#parameter-grouping)在括号中对条件检查进行逻辑分组：

```php
use Illuminate\Database\Eloquent\Builder;

$user->posts()
        ->where(function (Builder $query) {
            return $query->where('active', 1)
                         ->orWhere('votes', '>=', 100);
        })
        ->get();

// select * from posts
// where user_id = ? and (active = 1 or votes >= 100)
```

### 关联方法 VS 动态属性

如果不需要向 Eloquent 关联查询添加额外的约束，可以像属性一样访问关联

- 例如，继续使用 `User` 和 `Post` 示例模型，可以这样访问用户的全部文章

```php
$user = App\User::find(1);

foreach ($user->posts as $post) {
    //
}
```

动态属性是「懒加载」的，这意味着它们仅在你真实访问关联数据时才被载入

- 因此，开发者经常使用[【预加载】](https://learnku.com/docs/laravel/6.x/eloquent-relationships/5177#eager-loading)预先加载那些他们确知在载入模型后将访问的关联

- 对载入模型关联中必定被执行的 SQL 查询而言，预加载显著减少了查询的执行次数

### 查询已存在的关联

在访问模型记录时，可能希望基于关联的存在限制查询结果

- 比如想要获取至少存在一条评论的所有文章，可以通过给 `has` 和 `orHas` 方法传递关联名称来实现

```php
// 获取至少存在一条评论的所有文章...
$posts = App\Post::has('comments')->get();
```

还可以指定运算符和数量进一步自定义查询：

```php
// 获取评论超过三条的文章...
$posts = App\Post::has('comments', '>=', 3)->get();
```

还可以用「点」语法构造嵌套的 `has` 语句

- 比如，可以获取拥有至少一条评论和投票的文章：

```php
// 获取拥有至少一条带有投票评论的文章...
$posts = App\Post::has('comments.votes')->get();
```

如果需要更多功能，可以使用 `whereHas` 和 `orWhereHas` 方法将「where」条件放到 `has` 查询上

- 这些方法允许你向关联加入自定义约束，比如检查评论内容

```php
use Illuminate\Database\Eloquent\Builder;

// 获取至少带有一条评论内容包含 foo% 关键词的文章...
$posts = App\Post::whereHas('comments', function (Builder $query) {
    $query->where('content', 'like', 'foo%');
})->get();

// 获取至少带有十条评论内容包含 foo% 关键词的文章...
$posts = App\Post::whereHas('comments', function (Builder $query) {
    $query->where('content', 'like', 'foo%');
}, '>=', 10)->get();
```

### 查询不存在的关联

在访问模型记录时，可能希望基于关联不存在来限制查询结果

- 假设想要获取不存在任何评论的文章，可以通过向 `doesntHave` 和 `orDoesntHave` 方法传递关联名称来实现：

```php
$posts = App\Post::doesntHave('comments')->get();
```

如果需要更多功能，可以使用 `whereDoesntHave` 和 `orWhereDoesntHave` 方法将「where」条件加到 `doesntHave` 查询上

- 这些方法允许你向关联加入自定义限制，比如检测评论内容

```php
use Illuminate\Database\Eloquent\Builder;

$posts = App\Post::whereDoesntHave('comments', function (Builder $query) {
    $query->where('content', 'like', 'foo%');
})->get();
```

还可以使用「点」语法执行嵌套关联查询

- 例如，下面的查询用于获取带有没被禁用的作者发表评论的文章

```php
use Illuminate\Database\Eloquent\Builder;

$posts = App\Post::whereDoesntHave('comments.author', function (Builder $query) {
    $query->where('banned', 1);
})->get();
```

### 多态关联查询

要查询 `MorphTo` 关联的存在，可以使用 `whereHasMorph` 方法及其相应的方法：

```php
use Illuminate\Database\Eloquent\Builder;

// 查询与帖子或视频相关并且标题包含 foo 的评论...
$comments = App\Comment::whereHasMorph(
    'commentable',
    ['App\Post', 'App\Video'],
    function (Builder $query) {
        $query->where('title', 'like', 'foo%');
    }
)->get();

// 查询与帖子相关的评论，标题不像 foo％...
$comments = App\Comment::whereDoesntHaveMorph(
    'commentable',
    'App\Post',
    function (Builder $query) {
        $query->where('title', 'like', 'foo%');
    }
)->get();
```

你可以使用 `$type` 参数根据相关模型添加不同的约束：

```php
use Illuminate\Database\Eloquent\Builder;

$comments = App\Comment::whereHasMorph(
    'commentable',
    ['App\Post', 'App\Video'],
    function (Builder $query, $type) {
        $query->where('title', 'like', 'foo%');

        if ($type === 'App\Post') {
            $query->orWhere('content', 'like', 'foo%');
        }
    }
)->get();
```

您可以提供 `*` 作为通配符，让 Laravel 从数据库中查询所有可能的多态类型，而不是传递可能的多态模型数组

- Laravel 将执行其他查询以执行此操作：

```php
use Illuminate\Database\Eloquent\Builder;

$comments = App\Comment::whereHasMorph('commentable', '*', function (Builder $query) {
    $query->where('title', 'like', 'foo%');
})->get();
```

### 关联模型计数

如果想要只计算关联结果的统计数量而不需要真实加载它们，可以使用 `withCount` 方法，它将放在结果模型的 `{relation}_count` 列，示例如下：

```php
$posts = App\Post::withCount('comments')->get();

foreach ($posts as $post) {
    echo $post->comments_count;
}
```

可以像给查询添加限制一样为多个关系添加「计数」：

```php
use Illuminate\Database\Eloquent\Builder;

$posts = App\Post::withCount(['votes', 'comments' => function (Builder $query) {
    $query->where('content', 'like', 'foo%');
}])->get();

echo $posts[0]->votes_count;
echo $posts[0]->comments_count;
```

还可以给关联计数结果起别名，这允许你在同一关联上添加多个计数：

```php
use Illuminate\Database\Eloquent\Builder;

$posts = App\Post::withCount([
    'comments',
    'comments as pending_comments_count' => function (Builder $query) {
        $query->where('approved', false);
    },
])->get();

echo $posts[0]->comments_count;

echo $posts[0]->pending_comments_count;
```

如果将 `withCount` 和 `select` 查询组装在一起，请确保在 `select` 方法之后调用 `withCount` ：

```php
$posts = App\Post::select(['title', 'body'])->withCount('comments')->get();

echo $posts[0]->title;
echo $posts[0]->body;
echo $posts[0]->comments_count;
```

## 预加载

当以属性方式访问 Eloquent 关联时，关联数据「懒加载」

- 这意味着直到第一次访问属性时关联数据才会被真实加载

- 不过 Eloquent 能在查询父模型时「预先载入」子关联

- 预加载可以缓解 `N + 1` 查询问题

为了说明 `N + 1` 查询问题，考虑 `Book` 模型关联到 `Author` 的情形：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     * 获取书籍作者。
     */
    public function author()
    {
        return $this->belongsTo('App\Author');
    }
}
```

现在，我们来获取所有的书籍及其作者：

```php
$books = App\Book::all();

foreach ($books as $book) {
    echo $book->author->name;
}
```

- 此循环将执行一个查询，用于获取全部书籍，然后为每本书执行获取作者的查询

- 如果我们有 `25` 本书，此循环将运行 `26` 个查询：`1` 个用于查询书籍，`25` 个附加查询用于查询每本书的作者

我们能够使用预加载将操作压缩到只有 `2` 个查询，在查询时，可以使用 `with` 方法指定想要预加载的关联：

```php
$books = App\Book::with('author')->get();

foreach ($books as $book) {
    echo $book->author->name;
}
```

在这个例子中，仅执行了两个查询：

```php
select * from books

select * from authors where id in (1, 2, 3, 4, 5, ...)
```

### 预加载多个关联

有时，你可能需要在单一操作中预加载几个不同的关联

- 要达成此目的，只要向 `with` 方法传递多个关联名称构成的数组参数

```php
$books = App\Book::with(['author', 'publisher'])->get();
```

### 嵌套预加载

可以使用「点」语法预加载嵌套关联，比如在一个 Eloquent 语句中预加载所有书籍作者及其联系方式：

```php
$books = App\Book::with('author.contacts')->get();
```

### 嵌套预加载 `morphTo` 关联

> 如果你希望加载一个 `morphTo` 关系，以及该关系可能返回的各种实体的嵌套关系，可以将 `with` 方法与 `morphTo` 关系的 `morphWith` 方法结合使用

为了帮助说明这种方法，让我们考虑以下模型：

```php
<?php

use Illuminate\Database\Eloquent\Model;

class ActivityFeed extends Model
{
    /**
     * 获取活动提要记录的父级。
     */
    public function parentable()
    {
        return $this->morphTo();
    }
}
```

- 在这个例子中，我们假设 `Event` 、`Photo` 和 `Post` 模型可以创建 `ActivityFeed` 模型

-  另外，我们假设 `Event` 模型属于 `Calendar` 模型，`Photo` 模型与 `Tag` 模型相关联，`Post` 模型属于 `Author` 模型

使用这些模型定义和关联，我们可以查询 `ActivityFeed` 模型实例并预加载所有 `parentable` 模型及其各自的嵌套关系：

```php
use Illuminate\Database\Eloquent\Relations\MorphTo;

$activities = ActivityFeed::query()
    ->with(['parentable' => function (MorphTo $morphTo) {
        $morphTo->morphWith([
            Event::class => ['calendar'],
            Photo::class => ['tags'],
            Post::class => ['author'],
        ]);
    }])->get();
```

### 预加载指定列

并不是总需要获取关系的每一列，在这种情况下，Eloquent 允许你为关联指定想要获取的列：

```php
$books = App\Book::with('author:id,name')->get();
```

> 注意：在使用这个特性时，一定要在要获取的列的列表中包含 `id` 列

### 默认预加载

有时可能希望在查询模型时始终加载某些关联，为此，你可以在模型上定义 `$with` 属性：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     * 默认加载的关联。
     *
     * @var array
     */
    protected $with = ['author'];

    /**
     * 获取书籍作者
     */
    public function author()
    {
        return $this->belongsTo('App\Author');
    }
}
```

如果你想从单个查询的 `$with` 属性中删除一个预加载，你可以使用 `without` 方法：

```php
$books = App\Book::without('author')->get();
```

### 为预加载添加约束

有时，可能希望预加载一个关联，同时为预加载查询添加额外查询条件，就像下面的例子：

```php
$users = App\User::with(['posts' => function ($query) {
    $query->where('title', 'like', '%first%');
}])->get();
```

- 在这个例子中，Eloquent 将仅预加载那些 `title` 列包含 `first` 关键词的文章

也可以调用其它的[【查询构造器】](https://learnku.com/docs/laravel/6.x/queries)方法进一步自定义预加载操作：

```php
$users = App\User::with(['posts' => function ($query) {
    $query->orderBy('created_at', 'desc');
}])->get();
```

> 注意：在约束预加载时，不能使用 `limit` 和 `take` 查询构造器方法

### 延迟预加载

> 有可能你还希望在模型加载完成后在进行渴求式加载

举例来说，如果你想要根据某个条件动态决定是否加载关联数据，那么 `load` 方法对你来说会非常有用：

```php
$books = App\Book::all();

if ($someCondition) {
    $books->load('author', 'publisher');
}
```

如果你想要在渴求式加载的查询语句中进行条件约束，你可以通过数组的形式去加载，键为对应的关联关系，值为 `Closure` 闭包函数，该闭包的参数为一个 `query` 实例：

```php
$books->load(['author' => function ($query) {
    $query->orderBy('published_date', 'asc');
}]);
```

如果希望加载还没有加载的关联关系时，你可以使用 `loadMissing` 方法：

```php
public function format(Book $book)
{
    $book->loadMissing('author');

    return [
        'name' => $book->name,
        'author' => $book->author->name,
    ];
}
```

#### 嵌套延迟预加载 & `morphTo`

如果希望快速加载 `morphTo` 关系，以及该关系可能返回的各种实体上的嵌套关系，可以使用 `loadMorph` 方法

- 这个方法接受 `morphTo` 关系的名称作为它的第一个参数，第二个参数接收模型数组、关系数组

为了帮助说明这个方法，可以看一下以下模型例子：

```php
<?php

use Illuminate\Database\Eloquent\Model;

class ActivityFeed extends Model
{
    /**
     * 获取 activity feed 记录的父级。
     */
    public function parentable()
    {
        return $this->morphTo();
    }
}
```

- 在这个例子中，让我们假设 `Event` 、`Photo` 和 `Post` 模型可以创建 ActivityFeed 模型

- 此外，让我们假设 `Event` 模型属于 `Calendar` 模型，`Photo` 模型与 `Tag` 模型相关联，`Post` 模型属于 `Author` 模型

使用这些模型定义和关系，我们可以检索 `ActivityFeed` 模型实例，并立即加载所有 `parentable` 模型及其各自的嵌套关系：

```php
$activities = ActivityFeed::with('parentable')
    ->get()
    ->loadMorph('parentable', [
        Event::class => ['calendar'],
        Photo::class => ['tags'],
        Post::class => ['author'],
    ]);
```

## 插入 & 更新关联模型

Eloquent 为新模型添加关联提供了便捷的方法

### 保存方法

例如，也许你需要添加一个新的 `Comment` 到一个 `Post` 模型中

- 你不用在 `Comment` 中手动设置 `post_id` 属性，就可以直接使用关联模型的 `save` 方法将 `Comment` 直接插入

```php
$comment = new App\Comment(['message' => 'A new comment.']);

$post = App\Post::find(1);

$post->comments()->save($comment);
```

- 需要注意的是，我们并没有使用动态属性的方式访问 `comments` 关联

- 相反，我们调用 `comments` 方法来获得关联实例

- `save` 方法将自动添加适当的 `post_id` 值到 `Comment` 模型中

如果你需要保存多个关联模型，你可以使用 `saveMany` 方法：

```php
$post = App\Post::find(1);

$post->comments()->saveMany([
    new App\Comment(['message' => 'A new comment.']),
    new App\Comment(['message' => 'Another comment.']),
]);
```

### 递归保存模型和关联数据

如果你想 `save` 你的模型及其所有关联数据，你可以使用 `push` 方法：

```php
$post = App\Post::find(1);

$post->comments[0]->message = 'Message';
$post->comments[0]->author->name = 'Author Name';

$post->push();
```

### 新增方法

除了 `save` 和 `saveMany` 方法外，你还可以使用 `create` 方法

- 它接受一个属性数组，同时会创建模型并插入到数据库中

- 还有，`save` 方法和 `create` 方法的不同之处在于，`save` 方法接受一个完整的 Eloquent 模型实例，而 `create` 则接受普通的 PHP 数组

```php
$post = App\Post::find(1);

$comment = $post->comments()->create([
    'message' => 'A new comment.',
]);
```

> 注意：在使用 `create` 方法前，请务必确保查看过本文档的[【批量赋值】](https://learnku.com/docs/laravel/6.x/eloquent#mass-assignment)章节

你还可以使用 `createMany` 方法去创建多个关联模型：

```php
$post = App\Post::find(1);

$post->comments()->createMany([
    [
        'message' => 'A new comment.',
    ],
    [
        'message' => 'Another new comment.',
    ],
]);
```

你还可以使用 `findOrNew` 、`firstOrNew` 、`firstOrCreate` 和 `updateOrCreate` 方法来[【创建和更新关系模型】](https://learnku.com/docs/laravel/6.x/eloquent#other-creation-methods)

### 更新 `belongsTo` 关联

当更新 `belongsTo` 关联时，可以使用 `associate` 方法

- 此方法将会在子模型中设置外键

```php
$account = App\Account::find(10);

$user->account()->associate($account);

$user->save();
```

当移除 `belongsTo` 关联时，可以使用 dissociate 方法

- 此方法会将关联外键设置为 `null`

```php
$user->account()->dissociate();

$user->save();
```

### 默认模型

`belongsTo` 、`hasOne` 、`hasOneThrough` 和 `morphOne` 关系允许你指定默认模型，当给定关系为 `null` 时，将会返回默认模型

- 这种模式被称作[【 Null 对象模式】](https://en.wikipedia.org/wiki/Null_Object_pattern)，可以减少你代码中不必要的检查

在下面的例子中，如果发布的帖子没有找到作者，`user` 关系会返回一个空的 `App\User` 模型：

```php
/**
 * 获取帖子的作者。
 */
public function user()
{
    return $this->belongsTo('App\User')->withDefault();
}
```

如果需要在默认模型里添加属性，你可以传递数组或者回调方法到 `withDefault` 中：

```php
/**
 * 获取帖子的作者。
 */
public function user()
{
    return $this->belongsTo('App\User')->withDefault([
        'name' => 'Guest Author',
    ]);
}

/**
 * 获取帖子的作者。
 */
public function user()
{
    return $this->belongsTo('App\User')->withDefault(function ($user, $post) {
        $user->name = 'Guest Author';
    });
}
```

### 多对多关联

Eloquent 也提供了一些额外的辅助方法，使相关模型的使用更加方便

#### 附加 / 分离

例如，我们假设一个用户可以拥有多个角色，并且每个角色都可以被多个用户共享

- 给某个用户附加一个角色是通过向中间表插入一条记录实现的，可以使用 `attach` 方法完成该操作

```php
$user = App\User::find(1);

$user->roles()->attach($roleId);
```

在将关系附加到模型时，还可以传递一组要插入到中间表中的附加数据：

```php
$user->roles()->attach($roleId, ['expires' => $expires]);
```

当然，有时也需要移除用户的角色

- 可以使用 `detach` 移除多对多关联记录

- `detach` 方法将会移除中间表对应的记录

- 但是这 `2` 个模型都将会保留在数据库中

```php
// 移除用户的一个角色...
$user->roles()->detach($roleId);

// 移除用户的所有角色...
$user->roles()->detach();
```

为了方便，`attach` 和 `detach` 也允许传递一个 `ID` 数组：

```php
$user = App\User::find(1);

$user->roles()->detach([1, 2, 3]);

$user->roles()->attach([
    1 => ['expires' => $expires],
    2 => ['expires' => $expires],
]);
```

### 同步关联

你也可以使用 `sync` 方法构建多对多关联

- `sync` 方法接收一个 `ID` 数组以替换中间表的记录

- 中间表记录中，所有未在 `ID` 数组中的记录都将会被移除

- 所以该操作结束后，只有给出数组的 `ID` 会被保留在中间表中

```php
$user->roles()->sync([1, 2, 3]);
```

你也可以通过 `ID` 传递额外的附加数据到中间表：

```php
$user->roles()->sync([1 => ['expires' => true], 2, 3]);
```

如果你不想移除现有的 `ID` ，可以使用 `syncWithoutDetaching` 方法：

```php
$user->roles()->syncWithoutDetaching([1, 2, 3]);
```

### 切换关联

多对多关联也提供了 `toggle` 方法用于「切换」给定 `ID` 数组的附加状态

- 如果给定的 `ID` 已被附加在中间表中，那么它将会被移除

- 同样，如果如果给定的 `ID` 已被移除，它将会被附加

```php
$user->roles()->toggle([1, 2, 3]);
```

### 在中间表上保存额外的数据

当处理多对多关联时，`save` 方法接收一个额外的数据数组作为第二个参数：

```php
App\User::find(1)->roles()->save($role, ['expires' => $expires]);
```

### 更新中间表记录

如果你需要在中间表中更新一条已存在的记录，可以使用 `updateExistingPivot`

- 此方法接收中间表的外键与要更新的数据数组进行更新

```php
$user = App\User::find(1);

$user->roles()->updateExistingPivot($roleId, $attributes);
```

## 更新父级时间戳

当一个模型属 `belongsTo` 或者 `belongsToMany` 另一个模型时，例如 `Comment` 属于 `Post` ，有时更新子模型导致更新父模型时间戳非常有用

- 例如，当 `Comment` 模型被更新时，您要自动「触发」父级 `Post` 模型的 `updated_at` 时间戳的更新

- Eloquent 让它变得简单

- 只要在子模型加一个包含关联名称的 `touches` 属性即可

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * 要触发的所有关联关系
     *
     * @var array
     */
    protected $touches = ['post'];

    /**
     * 评论所属的文章
     */
    public function post()
    {
        return $this->belongsTo('App\Post');
    }
}
```

现在，当你更新一个 `Comment` 时，对应父级 `Post` 模型的 `updated_at` 字段同时也会被更新，使其更方便得知何时让一个 `Post` 模型的缓存失效：

```php
$comment = App\Comment::find(1);

$comment->text = 'Edit to this comment!';

$comment->save();
```

# Eloquent：集合

Eloquent 返回的所有多结果集都是 `Illuminate\Database\Eloquent\Collection` 对象的实例，包括通过 `get` 方法检索或通过访问关联关系获取到的结果

- Eloquent 的集合对象继承了 Laravel 的[【集合基类】](https://learnku.com/docs/laravel/6.x/collections)，因此它自然也继承了数十种能优雅地处理 Eloquent 模型底层数组的方法

- 而且，所有的集合都可以作为迭代器，你可以像遍历简单的 PHP 数组一样来遍历它们

```php
$users = App\User::where('active', 1)->get();

foreach ($users as $user) {
    echo $user->name;
}
```

- 不过，集合比数组更加强大，它通过更加直观的接口暴露出可链式调用的 `map /reduce` 等操作

例如，让我们移除所有未激活的用户并收集剩余用户的名字：

```php
$users = App\User::all();

$names = $users->reject(function ($user) {
    return $user->active === false;
})
->map(function ($user) {
    return $user->name;
});
```

> 注意：大多数 Eloquent 集合方法会返回新的 Eloquent 集合实例
> - 但是 `pluck` 、`keys` 、`zip` 、`collapse` 、`flatten` 和 `flip` 方法除外
> - 它们会返回一个[【集合基类】](https://learnku.com/docs/laravel/6.x/collections)实例
>> 同样，如果 `map` 操作返回的集合不包括任何 Eloquent 模型，那么它会被自动转换成集合基类

## 可用方法

所有 Eloquent 的集合都继承了[【 `Laravel Collection` 】](https://learnku.com/docs/laravel/6.x/collections#available-methods)对象；因此，他们也绩承了所有集合基类提供的强大的方法

- 另外，`Illuminate\Database\Eloquent\Collection` 类提供了一套上层的方法来帮你管理你的模型集合

- 大多数方法返回 `Illuminate\Database\Eloquent\Collection` 实例

- 然而，也会有一些方法返回基于 `Illuminate\Support\Collection` 类的实例

### contains

```php
contains($key, $operator = null, $value = null)
```

`contains` 方法可用于判断集合中是否包含指定的模型实例

- 这个方法接收一个主键或者模型实例

```php
$users->contains(1);

$users->contains(User::find(1));
```

### diff

```php
diff($items)
```

`diff` 方法返回不在给定集合中的所有模型：

```php
use App\User;

$users = $users->diff(User::whereIn('id', [1, 2, 3])->get());
```

### except

```php
except($keys)
```

`except` 方法返回给定主键外的所有模型：

```php
$users = $users->except([1, 2, 3]);
```

### find

```php
find($key)
```

`find` 方法查找给定主键的模型

- 如果 `$key` 是一个模型实例，`find` 将会尝试返回与主键匹配的模型

- 如果 `$key` 是一个关联数组，`find` 将会使用 `whereIn()` 返回所有匹配 `$keys` 的模型

```php
$users = User::all();

$user = $users->find(1);
```

### fresh

```php
fresh($with = [])
```

`fresh` 方法从数据库检索集合中的每个模型的新实例

- 此外，任何指定的关系都会被预先加载

```php
$users = $users->fresh();

$users = $users->fresh('comments');
```

### intersect

```php
intersect($items)
```

`intersect` 方法返回给定集合中也存在的所有模型：

```php
use App\User;

$users = $users->intersect(User::whereIn('id', [1, 2, 3])->get());
```

### load

```php
load($relations)
```

`load` 方法会提前加载集合中所有模型的指定关系

```php
$users->load('comments', 'posts');

$users->load('comments.author');
```

### loadMissing

```php
loadMissing($relations)
```

如何尚未加载关系，`loadMissing` 方法将会为集合中的所有模型加载给定的关系

```php
$users->loadMissing('comments', 'posts');

$users->loadMissing('comments.author');
```

### modelKeys

```php
modelKeys()
```

`modelKeys` 方法返回集合中所有模型的主键：

```php
$users->modelKeys();

// [1, 2, 3, 4, 5]
```














































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































