
//actionCreator         Creator创建者
//按 es6 的规范 import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回。如果都使用 es6 的规范，这个是很明确的。
import * as actionTypes from './actionTypes'//重actionTypes引入
//简化写  export const changeList = （value）=>
export const changeList = value => ({
	type: actionTypes.CHANGE_LIST,
	value: value
})
export const changeMain = value => ({
	type: actionTypes.CHANGE_MAIN,
	value: value
})