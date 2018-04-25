//容器组件负责数据的获取  UI组件负责显示
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd' //antd 引入的列表格式
import styles from './style.mcss'//引入mcss

export default class Home extends Component {//暴露出去的组件  Home是组件名字
	render() {
		return (
			<List
				header={<div>VOA英文学习</div>}//文档API
				className={styles.wrapper}//这里引用模块mcss上面import需要引入的
				bordered={true}//这是人家封装好的API可以在文档中查找
    		itemLayout="horizontal"//布局格式 头像和子是左右关系
    		dataSource={this.props.list}//循环的数据通过dataSource传入List  this.props.list这个是container.js里面mapStateToProps 传来的
		    renderItem={item => (//接收数据然后渲染
		      <List.Item>
		        <List.Item.Meta
		          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
		          title={<Link to={'/detail/' + item.id }>[ {item.category} ] {item.title} ( {item.date} )</Link>}
		          description="Ant Design, a design language for background applications, is refined by Ant UED Team"//description描述
		        />
		      </List.Item>
		    )}
  		/>
		)
	}

	componentDidMount() {
		fetch('/api/home.json')
			.then(res => res.json())
			.then(res => {
				if (res && res.ret && res.data) {
					this.props.changeList(res.data.list)
				}
			})
	}
}