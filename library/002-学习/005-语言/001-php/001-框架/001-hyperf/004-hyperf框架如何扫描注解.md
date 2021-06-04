### hyperf框架如何扫描注解相关
```php
Hyperf\Di\ClassLoader::init();
```

ClassLoader类初始化的时候构造函数会new Scanner获取Scanner对象
```php
$scanner = new Scanner($this, $config = ScanConfig::instance($configDir));
$reflectionClassMap = $scanner->scan();
```

