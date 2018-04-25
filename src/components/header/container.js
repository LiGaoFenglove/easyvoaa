//这是个容器组件     container容器的意思  容器组件不需要头部引入那么多就是连接ui组件就行
//容器组件负责逻辑   包装UI组件最终显示出去  UI组件引入到容器组件 最终到处去展示
import { connect } from 'react-redux'
import Header from './component'
//按 es6 的规范 import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回。如果都使用 es6 的规范，这个是很明确的。
import * as actionCreator from './store/actionCreator'


//这里的state  接收的是所有store 的数据
//mapStateToProps 功能是 组件里面的store 和 store 建立连接
const mapStateToProps = (state) => ({
	//这里的header  去总store文件夹下的reducer 去找  header: headerReducer
	list: state.header.list,
	main : state.header.main
})


const mapDispatchToProps = (dispatch) => ({// ToProps 会把changList方法映射到props里面去   
	//Dispatch  派发的就是这里面封装的函数方法  changList(list)
	changeList(list){//把这个方法传到UI组件中被调用
		const action = actionCreator.changeList(list);
			// 创建action 给store  通过reducer接收action 和state  在store文件下的reducer
			//派发action 不建议字符串这样写 错了 不易察觉  另外创建个文件夹
			// type : 'CHANGE_LIST',
			// value : 'list'

		dispatch(action)//这里是action  和 store  一起给 reducer
	},
	changeMain(main){
		const action = actionCreator.changeMain(main);
		dispatch(action)
	}

})
export default connect(mapStateToProps, mapDispatchToProps)(Header)//把这两个方法给了Header  在UI组件里面  37引用

