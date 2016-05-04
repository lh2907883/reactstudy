Dispatcher就像一个中心枢纽所有数据的流动都要通过这里. 
Action来源于用户与views的交互行为, 
Action触发Dispatcher. 
Dipatcher分发这个事件给对应的Store(通过之前注册的回调函数callback). 
Store在修改State后触发一个"change"事件通知controller-views数据发生变化了. 
controller-views监听这些"change"事件并且从stores暴露的函数中获取(新)数据, 然后调用自己的setState()方法, rerender自己和它的子组件.
