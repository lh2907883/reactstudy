import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * 使用类的形式定义组件(方法2)
 */
class LinkButton extends Component {
  /**
   * 构造函数
   * @param  {[type]} props [虚拟元素上的属性,例如: <LinkButton liked="true" /> 中的liked]
   */
  constructor(props) {
    super(props);
    this.state = props ;
  }

  /**
   * 方法
   * @param  {[type]} arg1 [arg1]
   * @param  {[type]} arg2 [arg2]
   * @param  {[type]} e    [react包装的事件对象, 原生事件对象可以用e.nativeEvent访问]
   */
  handleClick(arg1, arg2, e) {
    //设置状态会更新UI
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      /* 事件可以通过bind改变this,或者传参 */
      <p onClick={this.handleClick.bind(this, 'arg1', 'arg2')}>
          {this.state.name} {text} this. Click to toggle.
      </p>
    );
  }
}

//使用类的方法定义默认属性
LinkButton.defaultProps = { liked: false, name: 'DCS' };

export default LinkButton