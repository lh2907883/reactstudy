//组件通过调用store.dispatch(onGetlist())的形式调用这些actions
//每个action返回{type: xxx, ...}的对象,reduce会根据type找到对应的reducer,然后由reducer负责修改state
export function onGetlist(){
    var items = [
        {id:1, name:'dcs', age:22},
        {id:2, name:'alex', age:28},
        {id:3, name:'fq', age:19},
        {id:4, name:'mm', age:34},
        {id:5, name:'andy', age:9},
        {id:6, name:'lh', age:25}
    ]
    return {
        type: "GETLIST",
        list: items
    }
}

export function onAdd(item){
    return {
        type: "ADD",
        item: item
    }
}
export function onSelect(id){
    return {
        type: "SELECT",
        id: id
    }
}