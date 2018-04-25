// const defaultState = {//为了模拟数据用的
// 	list: [{
// 		id: '0001',
// 		title: '大家说英语'
// 	},{
// 		id: '0002',
// 		title: '空中英语教室'
// 	},{
// 		id: '0003',
// 		title: '彭蒙慧英语'
// 	},{
// 		id: '0004',
// 		title: 'VOA慢速英语'
// 	},{
// 		id: '0005',
// 		title: 'VOA常速英语'
// 	},{
// 		id: '0006',
// 		title: '科学美国人'
// 	},{
// 		id: '0007',
// 		title: 'BBC英文学习'
// 	}]
// }
import * as actionTypes from './actionTypes'

const defaultState = {
	list: [],
	main: []
}
export default (state = defaultState, action) => {
	// console.log(action)
	switch(action.type) {//这里是container.js  dispatch 过来的需要判断
		case actionTypes.CHANGE_LIST://CHANGE_LIST  是actionTypes下的
			return {
				...state,
				list: action.value
			}
		case actionTypes.CHANGE_MAIN://CHANGE_LIST  是actionTypes下的
			return {
				...state,
				main: action.value
			}
		default:
			return state
	}
}