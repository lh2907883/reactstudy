####接着例子2.flux
Count.jsx做了些改动, 添加了MyButton.jsx, 你会发现这两个组件都会触发AppStore.js的change事件,会导致整个界面的刷新(因为依据单线数据流的原则,Count,Footer,MyButton都监控了change事件刷新UI),其实是没有必要的,(因为Count的更新会导致Footer的更新,MyButton是独立的)

因此引入组件的shouldComponentUpdate方法,可以根据组件的state自行判断是否需要更新UI,`注意:此方法会频繁调用,依次执行不能太耗时`,具体例子看MyButton.jsx的shouldComponentUpdate实现