// import 'antd/lib/index.css';

import ReactDOM from 'react-dom';
import React from 'react';

//组件的简化定义(方法1)
const ListItemWrapper = (props) => <li>{props.data.text}</li>;
//组件的常规定义(方法2)
import LinkButton from './components/LinkButton' 

var list = [
    {id:1, text:'a1'},
    {id:2, text:'a2'},
    {id:3, text:'a3'}
];

ReactDOM.render(
    <div>
        <div>test hahaha1</div>
        <ul>
            {list.map((item) => {
                //作为循环项的组件必须要有key属性,key属性的值要唯一
                return <ListItemWrapper key={item.id} data={item}/>;
            })}
        </ul>
        <LinkButton liked="true" />
    </div>, 
    document.getElementById('react-content')
);

// import { Datepicker, Button } from 'antd';

