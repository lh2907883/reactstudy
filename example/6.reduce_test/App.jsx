import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import {onGetlist, onAdd, onSelect} from './actions'

// import store from './store.js'

//有状态组件
class App extends Component {
  constructor(props){
    super(props);
    this.props.onInit();
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.props.onAdd}>Add</button>
        {
          this.props.items.map((item) => {
            return  <p className={this.props.currentId == item.id ? 'active' : ''} key={item.id} onClick={this.props.onSelect.bind(null, item.id)}>
                      <span>{item.id}</span> | <span>{item.name}</span> | <span>{item.age}</span>
                    </p>
          })
        }
      </div>
    );
  }
}

//无状态组件
// const App = ({ items, onAdd }) => (
//   <div>
//     <button onClick={onAdd}>Add</button>
//     {
//       items.map((item, index) => {
//         return <p key={index}><span>{item.id}</span> | <span>{item.name}</span> | <span>{item.age}</span></p>
//       })
//     }
//   </div>
// )

//数据
const mapStateToProps = (state) => {
  return {
    currentId: state.currentId,
    items: state.items
  }
}

//事件
const mapDispatchToProps = (dispatch) => {
  return {
    onInit: function(){
      dispatch(onGetlist());
    },
    onAdd: function(){
      console.log('add click');
      dispatch(onAdd({
        id:111,
        name:'hehe',
        age:0
      }))
    },
    onSelect: function(id){
      console.log('select click:' + id);
      dispatch(onSelect(id))
    }
  }
}

//把mapStateToProps和mapDispatchToProps的成员复制到App的props上,这样在App内就可以用this.props.onAdd这种形式访问了
//要想使用Provider注入的store的state,就可以这样用
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)