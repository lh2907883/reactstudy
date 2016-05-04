import { combineReducers } from 'redux'
//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
//注意:如果想要UI更新,必要返回一个新的对象(和之前的对象引用不能一样)
export default function datalist(state, action){
    switch(action.type){
        case "GETLIST":
            return {...state, 
                items: [...action.list], 
                currentId: -1
            };
        case "ADD":
            // state.items.push(action.item);
            return {...state, 
                items: [...state.items, action.item]
            };
        case "SELECT":
            return {...state, 
                currentId: action.id
            };
        default:
            //这个是初始值
            return {
                items: [],
                currentId: -1
            };
    }
}