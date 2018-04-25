//容器组件
//容器组件负责数据的获取  UI组件负责显示
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'
import Home from './component'//引入UI组件

const mapStateToProps = state => ({//封装好然后 component.js里面可以用this.propos直接调用
	list: state.home.list
})

const mapDispatchToProps = dispatch => ({//这个里面就是用来改数据  封装一个changeList方法在component.js  componentDidMount里面用
	changeList(list) {
		const action = actionCreator.changeList(list)
		dispatch(action)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)