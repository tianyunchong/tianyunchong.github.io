if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m002']=[{"name":"001-test.md","path":"002-学习/001-概念理解记忆/001-test.md","content":"### test","timestamp":1624009071959},{"name":"001-wrk.md","path":"002-学习/002-工具/001-测试工具/001-wrk.md","content":"![](assets/002/002/001/001-1621650410356.png)\n\nhttps://blog.csdn.net/ccccsy99/article/details/105958366\n\nhttps://cloud.tencent.com/developer/news/307600","timestamp":1624009071959},{"name":"001-mac-vim.md","path":"002-学习/002-工具/002-开发工具/001-vim/001-mac-vim.md","content":"```shell\n使用neovim\nhttp://www.eryajf.net/4733.html\nhttps://www.cnblogs.com/cniwoq/p/13272746.html\ncoc.nvim配置\nhttps://www.cnblogs.com/hystill/p/13783183.html\n```","timestamp":1624009071959},{"name":"002-vim-Bundle.md","path":"002-学习/002-工具/002-开发工具/001-vim/002-vim-Bundle.md","content":"### 配置使用Bundle\n\n```shell\nset nocompatible              \" be iMproved, required\nfiletype on                  \" required\n\" set the runtime path to include Vundle and initialize\nset rtp+=~/.vim/bundle/Vundle.vim\ncall vundle#begin()\n\n\nPlugin \'gmarik/Vundle.vim\'\nPlugin \'Yggdroot/LeaderF\'\n\ncall vundle#end()            \" required\nfiletype plugin indent on    \" required\n\n```\n\n:BundleInstall\n","timestamp":1624009071959},{"name":"001-LeaderF.md","path":"002-学习/002-工具/002-开发工具/001-vim/003-vim常用插件/001-LeaderF.md","content":"### LeaderF使用\n```shell\n# 根据文件名查找文件\n:LeaderfFile\n```","timestamp":1624009071959},{"name":"001-算法是什么.md","path":"002-学习/004-数据结构和算法/001-概念/001-算法是什么.md","content":"# 什么是算法\n算法是解决问题的一种方法, 给出了求解问题的步骤描述\n\n算法不用苛刻于具体的语法要求\n\n## 算法描述:\n1. 自然语言描述\n\n    容易，但是啰嗦，容易有二意性\n2. 图示(流程图, N-S图等)\n\n    直观清晰，但不宜实现\n3. 算法语言\n\n    严谨，简捷，容易程序实现\n4. 程序设计语言\n\n    可以直接运行，但太严格\n\n## 算法分析的方法\n1. 先验估计(事前估计)\n\n    根据算法的逻辑特征来估算\n2. 经验测试(事后计算)\n\n    选择样本数据,运行环境运行算法计算出空间，时间\n\n### 算法分析的一般步骤\n[语句频次]算法中一个基本操作执行的次数\n\n1. 计算出算法的各个语句的频度\n2. 统计出算法的语句频度和T(n)\n\n算法的时间复杂度:\n\nT(n) = O(f(n))\n\nf(n) 是问题规模n的一个函数,算法执行时间的增长率和f(n)的增长度相同\n\n\n###  最好时间复杂度，最坏时间复杂度，平均时间复杂度\n\n###  O 渐进算法分析\n问题规模变大,算法的效率如何变化，即增长率.\n这在确认算法是否值得实现时很有效\n\nT(n) = x^2 + 1\n\nT(n) = 100n + 1\n\n### 常见的时间复杂度\n执行次数函数举例|\t阶|\t非正式术语\n|-|-|-|\n|12|\tO(1)|\t常数阶|\n|2n+3|\tO(n)|\t线性阶|\n|3n2+2n+1|\tO(n2)|\t平方阶|\n|5log2n+20|\tO(logn)|\t对数阶|\n|2n+3nlog2n+19|\tO(nlogn)|\tnlogn阶|\n|6n3+2n2+3n+4|\tO(n3)|\t立方阶|\n|2n|\tO(2n)|\t指数阶|\n\nO(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)\n\n","timestamp":1624009071959},{"name":"002-什么是数据结构.md","path":"002-学习/004-数据结构和算法/001-概念/002-什么是数据结构.md","content":"## 什么是数据结构\n数据结构是数据元素的集合，还有这组数据之间的关系\n\n","timestamp":1624009071959},{"name":"003-逻辑结构-线性.md","path":"002-学习/004-数据结构和算法/001-概念/003-逻辑结构-线性.md","content":"## 线性逻辑结构\n\n### 线性表\nN个数据元素的有限序列，数据之间具有线性关系\n> 线性关系\n除了第一个元素外，每个元素有且仅有一个前驱\n除了最后一个元素外，每个元素有且仅有一个后继\n\n### 线性表的分类\n#### 按数据元素分\n1. 一般线性表\n2. 字符串\n3. 数组\n   > 具有同一种类型的数据元素的集合\n4. 广义表\n   > 数据元素之间不一定是同一种类型,元素之间的关系特殊\n\n#### 按实施操作分\n1. N元组\n > 不能进行插入,删除\n2. 一版线性表\n > 可以在任何位置插入，删除\n3. 堆栈\n > 只能在一端插入，删除\n4. 队列\n > 插入在一端，删除在另一端\n5. 双端队列\n > 在两端可以插入，删除","timestamp":1624009071959},{"name":"004-线性表-顺序存储.md","path":"002-学习/004-数据结构和算法/001-概念/004-线性表-顺序存储.md","content":"### 顺序存储结构\n1. 存储方式\n> 用一组地址连续的存储单元依次存储线性表的各个元素\n2. 优点\n> 可以随机存取\n3. 特点\n> 1. 存储空间必须是连续的,预分配\n> 2. 逻辑顺序和物理顺序一致，用物理上的相邻表示逻辑上的线性关系\n> 3. 任意相邻元素之间无空闲空间，且距离相聚l\n> 4. 已知基地址，可以计算出任意元素的存储地址","timestamp":1624009071959},{"name":"005-线性表-链式存储结构.md","path":"002-学习/004-数据结构和算法/001-概念/005-线性表-链式存储结构.md","content":"### 链式存储结构\n#### 存储方式\n> 用任意的存储单元来存放线性表的各个元素\n> 数据域 + 指针域\n\n#### 特点\n1. 存储空间不一定连续\n2. 逻辑关系由指针提现\n3. 逻辑上相邻，物理上不一定相邻\n4. 非随机存储(顺序存储), 即访问任意一个元素的时间不同\n\n#### 单链式存储结构\n> 存放元素的同时，存放其后继(或者前驱)元素的信息\n\n#### 循环单链式存储结构\n> 最后一个元素的指针域存储第一个元素的地址\n\n#### 双联表存储结构\n> 存放元素的同时，存放其前驱和后继的元素的信息\n\n#### 循环双链式存储结构\n\n> 第一个元素的前驱指向最后一个元素\n> 最后一个元素的后继指向第一个元素\n\n#### 头结点\n> 头结点数据域不存放任何数据，但是指针语存放的是第一个元素的存储地址\n\n\n","timestamp":1624009071959},{"name":"001-container预置内容如何加载.md","path":"002-学习/005-语言/001-php/001-框架/001-hyperf/001-container预置内容如何加载.md","content":"### container容器是如何工作的\n#### definitionSource\n```shell\nnew Container()会传入参数(new DefinitionSourceFactory(true))()\nDefinitionSourceFactory的__invoke方法返回\\Hyperf\\Di\\Definition\\DefinitionSource对象\nContainer对象构造时候将传入DefinitionSource对象对象作为属性definitionSource的值\n```\n\n#### $resolvedEntries属性\n> 已经解析项的映射\n\n\n\n#### fetchedDefinitions属性\n> 已经获取的定义的映射\n\n\n#### get方法的实现  get($name)\n1. 从resolvedEntries属性中获取是否有对应的项目，有则返回\n2. 如果还没解析过，调取$this->make($name)方法并返回\n\n#### make方法的实现\n> make的作用是解析一下该容器，类似get，但是每次都会重新解析\n1. getDefinition获取定义\n2. 调用definitionResolver重新解析容器\n\n#### getDefinition($name)  从本地缓存中获取容器的定义\n```shell\nDefinitionSource对象在构造的时候，传入了一批dependencies用于设置对象的source，来获取下对应的定义\n```\n\n#### DefinitionSourceFactory的__invoke中的$configFromProviders[\'dependencies\']如何获取\n```shell\n\\Hyperf\\Config\\ProviderConfig::load()的实现\n\\Hyperf\\Utils\\Composer::getMergedExtra(\'hyperf\')[\'config\'] ?? []\n这块的代码说白了是读取项目下的composer.lock,然后json_decode再构造为\\Hyperf\\Utils\\Collection对象，用于进一步使用\n读取composer.lock中所有extra里的hyperf项的config，然后返回数组作为预定义项\n说白了就是获取vendor里的所有configProvider的dependencies项组合为数组，作为预定义项\n```","timestamp":1624009071959},{"name":"002-hyperf启动加载.md","path":"002-学习/005-语言/001-php/001-框架/001-hyperf/002-hyperf启动加载.md","content":"### 启动加载步骤\n1. $application = $container->get(\\Hyperf\\Contract\\ApplicationInterface::class);\n> vendor/hyperf/framework/src/configProvider.php中dependencies提供了ApplicationInterface的依赖\n> 容器中获取\\Hyperf\\Contract\\ApplicationInterface::class队列并处理。\n> 容器中获取的DefinitionSource对象会再进行异步resolveDefinition操作，如果是工厂对象会调用__invoke方法获取对应对象","timestamp":1624009071959},{"name":"003-ObjectDefinition实现.md","path":"002-学习/005-语言/001-php/001-框架/001-hyperf/003-ObjectDefinition实现.md","content":"### ObjectDefinition\n> ObjectDefinition是hyperf里的信息对象定义类\n> name属性存储类名称\n> constructorInjection属性存储反射类获取的MethodInjection对象\n> 反射类获取类的构造函数,然后构造MethodInjection对象使用completeConstructorInjection方法合并入属性constructorInjection\n\n```php\n$definition = $definition ?: new ObjectDefinition($name);\n$class = ReflectionManager::reflectClass($className);\n$constructor = $class->getConstructor();\nif ($constructor && $constructor->isPublic()) {\n    $constructorInjection = new MethodInjection(\'__construct\', $this->getParametersDefinition($constructor));\n    $definition->completeConstructorInjection($constructorInjection);\n}\n```","timestamp":1624009071959},{"name":"004-hyperf框架如何扫描注解.md","path":"002-学习/005-语言/001-php/001-框架/001-hyperf/004-hyperf框架如何扫描注解.md","content":"### hyperf框架如何扫描注解相关\n```php\nHyperf\\Di\\ClassLoader::init();\n```\n\nClassLoader类初始化的时候构造函数会new Scanner获取Scanner对象\n```php\n$scanner = new Scanner($this, $config = ScanConfig::instance($configDir));\n$reflectionClassMap = $scanner->scan();\n```\n\n#### 获取注解配置\n```php\n[$config, $serverDependencies, $cacheable] = static::initConfigByFile($configDir);\n\nif (class_exists(ProviderConfig::class)) {\n   $configFromProviders = ProviderConfig::load();\n}\nvar_dump($configFromProviders[\'annotations\']);\n```\n> 这里读取annotations归根到底还是获取composer.lock，然后读取到所有的configProvider.php, 获取annotations配置\n> annotations会配置paths和collectors 例如: vendor/hyperf/cache/src/ConfigProvider.php\n\n\n#### 合并注解配置\n> 读取configProvider之后，会读取config/autoload/annotations.php和config/config.php里的annotations合并到配置文件中\n> 最终获取到注解文件的扫描路径paths以及ignore_annotations，collectors\n\n\n#### 扫描获取注解\n> 扫描paths目录使用BetterReflection获取对应目录下所有的reflectionClass\n> 使用AnnotationReader获取所有的注解信息\n\n\n\n\n\n\n#### 相关文件类\nvendor/hyperf/di/src/ClassLoader.php\nvendor/hyperf/di/src/Annotation/Scanner.php\nvendor/hyperf/di/src/Annotation/AnnotationReader.php\n","timestamp":1624009071959},{"name":"001-Arr.md","path":"002-学习/005-语言/001-php/001-框架/001-hyperf/005-utils/001-Arr.md","content":"### Arr\n#### accessible\n确定给定值是否是可访问数组\n```php\nvar_dump(Arr::accessible($arr));\n```\n\n#### add\n往数组里添加元素\n```php\n$arr = [];\nArr::add($arr, \"test\", \"111\");\nArr::add($arr, \"test.abc\", \"testabc\");\n```\n#### collapse\n将数组折叠为单个数组\n```php\n$arr = [\n    \"aa\"=> array(\n        \"bb\" => \"111\",\n        \"cc\" => \"222\",\n        \"dd\" => array(\n            \"eee\" => \"222\",\n            \"fff\" => \"333\",\n        ),\n    ),\n    \"mm\" => array(1, 2, 34),\n];\nvar_dump(Arr::collapse($arr));\n```\n输出结果\n```shell\n{\n    \"bb\": \"111\",\n    \"cc\": \"222\",\n    \"dd\": {\n        \"eee\": \"222\",\n        \"fff\": \"333\"\n    },\n    \"0\": 1,\n    \"1\": 2,\n    \"2\": 34\n}\n```\n#### crossJoin\n交叉链接给定的数组，给定可能的所有情况\n```php\nvar_dump(Arr::crossJoin([\"a\", \"b\"], [\"dd\", \"ee\"]));\n```\n输出结果：\n```shell\n [\n    [\n        \"a\",\n        \"dd\"\n    ],\n    [\n        \"a\",\n        \"ee\"\n    ],\n    [\n        \"b\",\n        \"dd\"\n    ],\n    [\n        \"b\",\n        \"ee\"\n    ]\n]\n```\n\n#### divide\n将数组分成两个数组。一个所有键，另一个所有值\n```php\nvar_dump(Arr::divide([\"aa\"=>11,\"bb\"=>22]));\n```\n\n#### dot\n用点展开多维数组\n```php\n$arr = [\n    \"aa\" => array(\n        \"bb\" => \"33\",\n        \"cc\" => array(\n            \"mm\" => \"mma\",\n            \"nn\" => \"mmb\",\n        ),\n    ),\n];\nvar_dump(Arr::dot($arr));\n# 输出的结果\n/**\n* array(3) {\n*  [\"aa.bb\"]=>\n*  string(2) \"33\"\n*  [\"aa.cc.mm\"]=>\n*  string(3) \"mma\"\n*  [\"aa.cc.nn\"]=>\n*  string(3) \"mmb\"\n*} \n*/\n```\n\n\n#### except\n获取除了给定键数组以外的所有数组\n```php\nvar_dump(Arr::except($arr, \"test\"));\n```\n\n#### exists\n检测给定键是否在数组中存在\n```php\nvar_dump(Arr::exists($arr, \"test\"));\n```\n\n#### first(array $array, callable $callback = null, $default = null)\n获取数据中的第一个元素,如果$callback参数存在，调用该方法，并用第一个元素的value和key作为参数\n```php\nArr::first([1,2]);\nArr::first([1, 2], function($value, $key){return $value + $key;});\n```\n\n\n#### last(array $array, callable $callback = null, $default = null)\n获取数组中的最后一个元素，跟first相反\n```php\nArr::last([1, 2]);\n```\n\n#### flatten\n将多维数组展平到单个级别\n```php\n$arr = [\n            \"aaa\" => array(\n                \"aaa_a\" => \"111\",\n                \"aaa_b\" => \"222\",\n                \"aaa_c\" => array(\n                    \"aaa_c_a\" => \"ca1\",\n                    \"aaa_c_b\" => \"ca2\",\n                ),\n            ),\n            \"bbb\" => array(\n                11,\n                22,\n                33\n            ),\n        ];\nvar_dump(\\Hyperf\\Utils\\Arr::flatten($arr));\n```\n输出结果\n```shell\n[\n    \"111\",\n    \"222\",\n    \"ca1\",\n    \"ca2\",\n    11,\n    22,\n    33\n]\n```\n\n#### forget\n使用“点”表示法从给定数组中删除一个或多个数组项\n```php\nArr::forget($arr, \"test\");\nArr::forget($arr, \"test.aaa\");\n```\n\n#### get\n使用点表示法获取一个值\n```php\nArr::get($arr, \"test\", \"默认值\");\n```\n\n#### has\n判断数组是否存在key\n```php\nArr::has($arr, \"key\");\n```\n\n#### isAssoc\n判断一个数字是否是关联的，\n如果数组没有从零开始的连续数字键，那么它就是“关联的”。\n\n#### only\n从给定数组中获取项的子集\n```php\n$arr = [\n    \"aa\"=> array(\n        \"bb\" => \"111\",\n        \"cc\" => \"222\",\n        \"dd\" => array(\n            \"eee\" => \"222\",\n            \"fff\" => \"333\",\n        ),\n    ),\n    \"mm\" => array(1, 2, 34),\n    \"eee\" => 23,\n];\nvar_dump(Arr::only($arr, [\"aa\", \"eee\"]));\n```\n输出的内容:\n```shell\n{\n    \"aa\": {\n        \"bb\": \"111\",\n        \"cc\": \"222\",\n        \"dd\": {\n            \"eee\": \"222\",\n            \"fff\": \"333\"\n        }\n    },\n    \"eee\": 23\n}\n```\n\n#### pluck\n从数组中提取数组\n```php\n$arr = [\n    \"aa\"=> array(\n        \"id\" => 1,\n        \"title\" => \"新闻\",\n        \"price\" => 22,\n        \"data\"  => array(\n            \"title\" => \"新闻数据\",\n            \"mark\"  => \"news\",\n        ),\n    ),\n    \"bb\" => array(\n        \"id\" => 2,\n        \"title\" => \"年龄\",\n        \"price\" => 33,\n        \"data\" => array(\n            \"title\" => \"热门数据\",\n            \"mark\"  => \"info\",\n        ),\n    ),\n];\n\\debug\\Logger::info(Arr::pluck($arr, \"title\", \"id\"));\n\\debug\\Logger::info(Arr::pluck($arr, \"data.title\", \"data.mark\"));\n```\n输出结果:\n```shell\n{\n    \"news\": {\n        \"title\": \"新闻数据\",\n        \"mark\": \"news\"\n    },\n    \"info\": {\n        \"title\": \"热门数据\",\n        \"mark\": \"info\"\n    }\n}\n```\n\n\n#### prepend\n在数组的开头新增一项\n```php\n$arr = [\"111\" => \"abc\"];\nArr::prepend($arr, \"内容\");\nArr::prepend($arr, \"内容\", \"test\");\n```\n输出结果:\n```shell\n[\n    \"test\" : \"内容\",\n    \"111\"  : \"abc\"\n]\n```\n\n####  pull(array &$array, string $key, $default = null)\n根据key获取一项数据，并从数组里删除\n\n\n#### random(array $array, int $number = null)        \n根据数组，随机一条或者多条的数据\n\n#### set(array &$array, $key, $value): array\n使用“点”表示法将数组项设置为给定值。\n如果没有给该方法任何键，则将替换整个数组。\n```php\n$arr = [];\nArr::set($arr, \"test.abc\", \"1111\");\n```\n\n#### shuffle(array $array, int $seed = null): array     \n洗牌给定的数组并返回结果\n\n\n#### sort(array $array, $callback = null): array         \n使用给定的回调或“点”表示法对数组排序。\n\n\n#### sortRecursive(array $array)\n递归排序，根据isAssoc判断进行key的排序，或者value的排序\n\n#### query(array $array)\n将数组转换为查询字符串。\n\n#### where(array $array, callable $callback): array  \n使用给定的回调筛选数组\n\n\n#### function wrap($value): array           \n如果给定的值不是数组且不为null，请将其包装为数组。\n```php\nvar_dump(Arr::wrap(\"1111\"));\nvar_dump(Arr::wrap(null));\nvar_dump(Arr::wrap([1, 2]));\n```\n\n####  unique(array $array): array           \n使数组元素唯一\n\n#### merge(array $array1, array $array2, bool $unique = true): array     \n合并数组，第三个参数标志是否参数唯一\n\n\n\n\n\n\n\n","timestamp":1624009071959},{"name":"001-反射类使用.md","path":"002-学习/005-语言/001-php/002-composer项目/001-betterReflection/001-反射类使用.md","content":"### 反射类基本使用\n```shell\ninclude_once \"./vendor/autoload.php\";\ninclude_once \"./Demo.php\";\nuse Roave\\BetterReflection\\BetterReflection;\n$classInfo = (new BetterReflection())\n    ->classReflector()\n    ->reflect(\\Demo\\Test::class);\n```\n\n#### __toString\n将类转换成字符串格式的描述\n```php\nvar_dump($classInfo->__toString());\n```\n\n#### createFromName\n根据类名创建一个新的Roave\\BetterReflection\\Reflection\\ReflectionClass类(和$classInfo一样，不过对应的类是$name)\n```php\n$classInfoNew = $classInfo->createFromName(\\Demo\\Testnew::class);\n```\n\n#### createFromInstance\n根据实现对象创建一个 Roave\\BetterReflection\\Reflection\\ReflectionObject \n```php\n$classInfoObj = $classInfo->createFromInstance(new \\Demo\\Testnew());\n```\n\n#### createFromNode\n这个暂时没有搞清楚\n\n\n#### getShortName\n获取反射类对应的类名(不包含命名空间)\n\n#### getName\n获取类名(带命名空间)\n\n#### getNamespaceName\n获取对应类的命名空间\n\n#### inNamespace\n校验对应的类是否定义在命名空间下\n\n#### getExtensionName\n猜测一下，如果是通过路径地址加载的，这个可以获取对应路径的扩展名?\n\n\n#### getMethods\n获取Roave\\BetterReflection\\Reflection\\ReflectionMethod 反射方法数组\n```php\nforeach ($classInfo->getMethods() as $key => $value) {\n    var_dump($value->getShortName());\n}\n```\n\n#### getImmediateMethods\n仅获取当前类实现的方法，不包含父类方法\n```php\nforeach ($classInfo->getImmediateMethods() as $key => $value) {\n    var_dump($value->getShortName());\n}\n```\n\n#### getMethod\n获取反射方法  Roave\\BetterReflection\\Reflection\\ReflectionMethod\n```php\nvar_dump(get_class($classInfo->getMethod(\"getClassName\")));\n```\n\n#### hasMethod\n判断反射类是否包含某个方法\n```php\nvar_dump($classInfo->hasMethod(\"getClassName\"))\n```\n\n\n#### getImmediateConstants\n获取发射类包含的所有常量(不包含父类常量)\n```php\nvar_dump($classInfo->getImmediateConstants());\n```\n\n#### getConstants\n获取发射类包含的所有常量\n```php\nvar_dump($classInfo->getConstants());\n```\n\n#### getConstant\n获取反射类包含的常量\n```php\nvar_dump($classInfo->getConstant(\"TEST_VAR_B\"));\n```\n\n#### hasConstant\n判断反射类是否包含常量\n```php\nvar_dump(get_class_methods($classInfo));\n```\n\n#### getReflectionConstant\n获取反射常量  Roave\\BetterReflection\\Reflection\\ReflectionClassConstant\n```php\nvar_dump(get_class($classInfo->getReflectionConstant(\"TEST_VAR_B\")));\n```\n\n#### getImmediateReflectionConstants\n获取当前发射类包含的所有反射常量(不包含父类定义的)\n```php\nforeach($classInfo->getImmediateReflectionConstants() as $value) {\n    var_dump(get_class($value));\n}\n```\n\n#### getReflectionConstants\n获取当前反射类包含的所有反射常量\n```php\nforeach($classInfo->getReflectionConstants() as $value) {\n    var_dump(get_class($value));\n}\n```\n\n#### getConstructor\n获取反射类的构造函数的反射方法  Roave\\BetterReflection\\Reflection\\ReflectionMethod\n```php\nvar_dump(get_class($classInfo->getConstructor()));\n```\n\n","timestamp":1624009071959},{"name":"001-图片拼接等比例锁房.md","path":"002-学习/005-语言/001-php/003-php本身的一些功能/001-图片拼接等比例锁房.md","content":"### 拼接和缩放\n```php\nuse com\\jdk5\\blog\\Image\\Image;\nrequire_once \"./Image.php\";\n$imgs = array(\n    \"./images/1.jpg\",\n    \"./images/test.jpg\",\n    //\"./images/5.jpg\"\n);\n$target     = \'./images/emp.jpg\'; //背景图片\n$source     = array();\n$targetInfo = [\n    \"width\"  => 0,\n    \"height\" => 0,\n];\nforeach ($imgs as $k => $v) {\n    $pos = strrpos($v, \".\");\n    if ($pos === false) {\n        continue;\n    }\n    $ext          = substr($v, $pos + 1);\n    $tmpImageSize = getimagesize($v);\n    $tmpSource    = loadpic($v, $tmpImageSize[\"mime\"]);\n    if ($tmpSource === false) {\n        continue;\n    }\n    $source[$k][\'source\'] = $tmpSource;\n    $source[$k][\'size\']   = $tmpImageSize;\n    $source[$k][\'ext\']    = $ext;\n    $targetInfo[\"width\"]  = max($targetInfo[\"width\"], $source[$k][\'size\'][0]);\n    $targetInfo[\"height\"] += $source[$k][\'size\'][1];\n}\nif (empty($source)) {\n    exit(\"没有需要处理的图片\");\n}\n//等比例缩放处理下所有图片\n$sourceFormat         = [];\n$targetInfo[\"height\"] = 0;\nforeach ($source as $k => $v) {\n    if ($source[$k][\"size\"][0] == $targetInfo[\"width\"]) {\n        $sourceFormat[$k] = $source[$k];\n        $targetInfo[\"height\"] += $source[$k][\"size\"][1];\n        continue;\n    }\n    $tmpPath = substr($imgs[$k], 0, -1 * strlen($source[$k][\"ext\"]) - 1) . \"_tmp.\" . $source[$k][\"ext\"];\n    $img     = new Image();\n    $img->load($imgs[$k])\n        ->width($targetInfo[\"width\"])\n        ->fixed_given_size(true) //生成的图片是否以给定的宽度和高度为准\n        ->keep_ratio(true) //是否保持原图片的原比例\n        ->bg_color(\"#ffffff\") //设置背景颜色，按照rgb格式\n        ->quality(50) //设置生成图片的质量 0-100，如果生成的图片格式为png格式，数字越大，压缩越大，如果是其他格式，如jpg，gif，数组越小，压缩越大\n        ->save($tmpPath); //保存生成图片的路径\n    $tmpImageSize               = getimagesize($tmpPath);\n    $sourceFormat[$k][\"source\"] = loadpic($tmpPath, $tmpImageSize[\"mime\"]);\n    $sourceFormat[$k][\'size\']   = $tmpImageSize;\n    $sourceFormat[$k][\"ext\"]    = $source[$k][\"ext\"];\n    $targetInfo[\"height\"] += $sourceFormat[$k][\"size\"][1];\n    unlink($tmpPath);\n}\n//转换下背景图大小,宽度是最宽的图片的宽度，高度是所有图片相加\n$img = new Image();\n$img->load(\"./images/emp.jpg\")\n    ->size($targetInfo[\"width\"], $targetInfo[\"height\"]) //设置生成图片的宽度和高度\n    ->fixed_given_size(true) //生成的图片是否以给定的宽度和高度为准\n    ->keep_ratio(true) //是否保持原图片的原比例\n    ->bg_color(\"#ffffff\") //设置背景颜色，按照rgb格式\n    ->quality(50) //设置生成图片的质量 0-100，如果生成的图片格式为png格式，数字越大，压缩越大，如果是其他格式，如jpg，gif，数组越小，压缩越大\n    ->save(\"./images/emp.tmp.jpg\"); //保存生成图片的路径\n$target_img = Imagecreatefromjpeg(\"./images/emp.tmp.jpg\");\n$tmp  = 2;\n$tmpy = 2; //图片之间的间距\nfor ($i = 0; $i < count($sourceFormat); $i++) {\n    var_dump(\"x:\" . $tmp . \"\\ty:\" . $tmpy);\n    var_dump($source[$i][\'size\']);\n    imagecopy($target_img, $sourceFormat[$i][\'source\'], $tmp, $tmpy, 0, 0, $sourceFormat[$i][\'size\'][0], $sourceFormat[$i][\'size\'][1]);\n    //$tmp = $tmp + $source[$i][\'size\'][0] + 5;\n    $tmpy = $tmpy + $sourceFormat[$i][\'size\'][1] + 5;\n}\nImagejpeg($target_img, \'./images/pin.jpg\');\n\nfunction loadpic($path, $mime)\n{\n    switch ($mime) {\n        case \"image/png\":\n            $res = ImageCreateFromPNG($path);\n            break;\n        case \"image/jpg\":\n            $res = imagecreatefromjpeg($path);\n            break;\n        case \"image/jpeg\":\n            $res = imagecreatefromjpeg($path);\n            break;\n        case \"image/gif\":\n            $res = imagecreatefromgif($path);\n            break;\n        default:\n            $res = false;\n            break;\n    }\n    return $res;\n}\n\n```\nhttps://github.com/caipeiming/php-myutils","timestamp":1624009071959}]