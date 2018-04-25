//最大的reducer  要把各个组件间的 reducer 放在一起


// combineReducers  redux带的方法 链接数据
import { combineReducers } from 'redux'
// as 起个别名  这里header 自动找到reducer
import { reducer as headerReducer } from '../components/header/'
import { reducer as homeReducer } from '../pages/home/'//公共的store 需要引入
const reducer = combineReducers({//组合store
	header: headerReducer,
	home : homeReducer
})

export default reducer