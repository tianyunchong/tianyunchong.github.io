### ObjectDefinition
> ObjectDefinition是hyperf里的信息对象定义类
> name属性存储类名称
> constructorInjection属性存储反射类获取的MethodInjection对象
> 反射类获取类的构造函数,然后构造MethodInjection对象使用completeConstructorInjection方法合并入属性constructorInjection

```php
$definition = $definition ?: new ObjectDefinition($name);
$class = ReflectionManager::reflectClass($className);
$constructor = $class->getConstructor();
if ($constructor && $constructor->isPublic()) {
    $constructorInjection = new MethodInjection('__construct', $this->getParametersDefinition($constructor));
    $definition->completeConstructorInjection($constructorInjection);
}
```