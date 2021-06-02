### container容器是如何工作的
#### definitionSource
```shell
new Container()会传入参数(new DefinitionSourceFactory(true))()
DefinitionSourceFactory的__invoke方法返回\Hyperf\Di\Definition\DefinitionSource对象
Container对象构造时候将传入DefinitionSource对象对象作为属性definitionSource的值
```

#### $resolvedEntries属性
> 已经解析项的映射



#### fetchedDefinitions属性
> 已经获取的定义的映射


#### get方法的实现  get($name)
1. 从resolvedEntries属性中获取是否有对应的项目，有则返回
2. 如果还没解析过，调取$this->mark($name)方法并返回

#### make方法的实现
> make的作用是解析一下该容器，类似get，但是每次都会重新解析
1. getDefinition获取定义
2. 调用definitionResolver重新解析容器

#### getDefinition($name)  从本地缓存中获取容器的定义
```shell
DefinitionSource对象在构造的时候，传入了一批dependencies用于设置对象的source，来获取下对应的定义
```

#### DefinitionSourceFactory的__invoke中的$configFromProviders['dependencies']如何获取
```shell
\Hyperf\Config\ProviderConfig::load()的实现
\Hyperf\Utils\Composer::getMergedExtra('hyperf')['config'] ?? []
这块的代码说白了是读取项目下的composer.lock,然后json_decode再构造为\Hyperf\Utils\Collection对象，用于进一步使用
读取composer.lock中所有extra里的hyperf项的config，然后返回数组作为预定义项
说白了就是获取vendor里的所有configProvider的dependencies项组合为数组，作为预定义项
```