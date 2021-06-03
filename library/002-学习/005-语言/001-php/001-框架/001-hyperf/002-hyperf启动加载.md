### 启动加载步骤
1. $application = $container->get(\Hyperf\Contract\ApplicationInterface::class);
> vendor/hyperf/framework/src/configProvider.php中dependencies提供了ApplicationInterface的依赖
> 容器中获取\Hyperf\Contract\ApplicationInterface::class队列并处理。
> 容器中获取的DefinitionSource对象会再进行异步resolveDefinition操作，如果是工厂对象会调用__invoke方法获取对应对象