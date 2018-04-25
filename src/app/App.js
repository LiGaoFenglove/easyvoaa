import React, { Component } from 'react';
//fetch 兼容低版本用  yarn add whatwg-fetch  需要安装 
import 'whatwg-fetch'
// 路由4.0 版本  需要安装react-router-dom
//Switch方法只匹配一次  
import { BrowserRouter, Route, Switch} from 'react-router-dom'//BrowserRouter, Route, Switch  和render一一对应
//<Provider>  生成Provider标签把用数据的标签包裹起来
import { Provider } from 'react-redux'
//store  Provider方法把所有store 分发给子组件都能用
import store from '../store/'
// 引入的组件 
//头部公共样式里面一般在header文件夹下创建一个index.js作为一个中转文件，然后把组件放在index.js里面
// as 相当于别名  而且也可以把index 省略 因为系统会自动找到index.js文件
import { View as Header } from '../components/header/'
import { View as Home } from '../pages/home/'//引入组件Home
import Detail from '../pages/detail/container'
import styles from './style.mcss' //模块化css引入格式  styles注意单词
import './reset.css'  //全局样式 
import 'antd/dist/antd.css';//工程安装了antd 这里需要引入样式
class App extends Component {//接口之间的的继承，同样也用extends
  render() {
    return (
    	//<Provider>  生成Provider标签把用数据的标签包裹起来  配合store={store}一起使用  ,  接收的在store文件下的index.js
		//模块化css名字 模块css 不能使用id 必须用class名字
    	<Provider store={store}>
      		<div className={ styles.wrapper }>
      		<Header />
          <BrowserRouter>{/*意思是用不带 # 号的路由*/}
              <Switch>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/' component={Home}></Route>
              </Switch>
          </BrowserRouter>
      		</div>
      </Provider>
    );
  }
}

export default App;

