### hyperf框架如何扫描注解相关
```php
Hyperf\Di\ClassLoader::init();
```

ClassLoader类初始化的时候构造函数会new Scanner获取Scanner对象
```php
$scanner = new Scanner($this, $config = ScanConfig::instance($configDir));
$reflectionClassMap = $scanner->scan();
```

#### 获取注解配置
```php
[$config, $serverDependencies, $cacheable] = static::initConfigByFile($configDir);

if (class_exists(ProviderConfig::class)) {
   $configFromProviders = ProviderConfig::load();
}
var_dump($configFromProviders['annotations']);
```
> 这里读取annotations归根到底还是获取composer.lock，然后读取到所有的configProvider.php, 获取annotations配置
> annotations会配置paths和collectors 例如: vendor/hyperf/cache/src/ConfigProvider.php


#### 合并注解配置
> 读取configProvider之后，会读取config/autoload/annotations.php和config/config.php里的annotations合并到配置文件中
> 最终获取到注解文件的扫描路径paths以及ignore_annotations，collectors


#### 扫描获取注解
> 扫描paths目录使用BetterReflection获取对应目录下所有的reflectionClass
> 使用AnnotationReader获取所有的注解信息






#### 相关文件类
vendor/hyperf/di/src/ClassLoader.php
vendor/hyperf/di/src/Annotation/Scanner.php
vendor/hyperf/di/src/Annotation/AnnotationReader.php
