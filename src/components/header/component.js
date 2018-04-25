//这是个UI组件   UI组件一般起名component 组件的意思
//ui 组件写成无状态组件性能会好一些   格式  export default (props) => {}

import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import styles from './style.mcss'

// export default (props) => {
// 	//这里的logo 对应的是表面的src={logo}
// 	const logo = require('../../assets/imgs/logo.png')
// 	//这里的list  对应的是 container.ja 下mapStateToProps 映射的list  。 list: state.header.list
// 	const menuItems = props.list.map((item, index) => {
// 		return (
// 			//这里的id 是store  的id
// 			// className={styles.item}  相当于   className= item  item就是个class名字
// 			<Menu.Item key={item.id} className={styles.item}>
// 		      <Icon type="appstore" />{item.title}
// 		    </Menu.Item>
// 		)
// 	})

// 	return (
// 		//mode="horizontal"  横向排列的意思
// 		<Row>
// 	      <Col span={4}>
// 	      	<img src={logo} className={styles.logo} alt=" "/>
// 	      </Col>
// 	      <Col span={20}>
// 	      	<Menu mode="horizontal">
// 	      		{menuItems}
// 	      	</Menu>
// 	      </Col>
// 	    </Row>
// 	)
// }

export default class Header extends Component {

	render() {

		const logo = require('../../assets/imgs/logo.png')
		//这里的list  对应的是 container.ja 下mapStateToProps 映射的list  。 list: state.header.list
		const menuItems = this.props.list.map((item, index) => {

			return (
				// 这里的id 是store  的id
				// className={styles.item}  相当于   className= item  item就是个class名字
				<Menu.Item key={item.id} className={styles.item}>
          			<Icon type="appstore" />{item.title}
        		</Menu.Item>
			)
		})
		//下面的导航栏
		const mainItems = this.props.main.map((item,index) => {
			return (
				<div key={item.a} className={styles.div_1}>
				<Col className={styles.col} key={item.a}>
					<h2>{item.name}</h2>
					<ul >
					{
						item.li_list.map((item,index) =>{
							return(
									
									<li key={item.c}>{item.li_name}</li>
									
								)
						})
					}
					</ul>
	          	</Col>
	          	</div>
			)
		})


		return (
			<div>
			<Row>
		      <Col span={4}>
		      	<img src={logo} className={styles.logo} alt=" "/>
		      </Col>
		      <Col span={20}>
		      	{/*mode="horizontal"  横向排列的意思*/}
		      	<Menu mode="horizontal">
		      		{menuItems}
		      	</Menu>
		      </Col>
		    </Row>

		    <Row className={styles.row_2}>
	          	{ mainItems }
	        </Row>
			</div>
		)
	}

	
	//发送ajax请求  fetch()方法允许你发出AJAX请求  git post 之类的
// 	fetch()方法允许你发出AJAX请求  git post 之类的
// 	fetch('/users.html')  //这里返回的是一个Promise对象
//  	创建Promise对象的时候 第一个参数（函数） 去做的函数 -> 如果调用第一个参数（函数） 会执行 then里面的回调函数
//  	创建Promise对象的时候 第二个参数（函数） 不去做 的函数 -> 如果调用第二个参数（函数） 会执行 catch里面的回调函数
//这里fetch  不兼容低版本所以要安装一下 兼容低版本    yarn add whatwg-fetch   
//import 'whatwg-fetch'  在app 里面引用一下  全局可用
	componentDidMount() {  //生命周期函数  这里是ajax 拿到了后端反回来的数据
		//从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，或者发起网络请求
		fetch('/api/header.json')
		.then( res => res.json()) //如果只有一个参数箭头函数的括号，可以不写
		.then( res =>{   //这里会接收到上一个then 回调回来的数据
			if (res && res.ret && res.data) { //边界检测 保证拿回数据
				console.log(res.data.list)
				this.props.changeList(res.data.list)//changeList 是重容器组件接收的方法
				this.props.changeMain(res.data.main)
				console.log(res.data.main)
			}

		})
	}
}

