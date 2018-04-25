import { createStore } from 'redux'  //引入createStore方法或者组件
import reducer from './reducer'
//这里有调试工具Redux DevTools
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store //配合app.js里面的分发store