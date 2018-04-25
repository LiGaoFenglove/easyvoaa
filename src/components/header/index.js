import View from './container' //View 就是Header组件     
//组件向外到处一定要有index.js
//header 里面的东西想用可以但是别直接引用 ，用index 暴露
import reducer from './store/reducer'

export { View, reducer } //暴露出去   只引入container 就好 因为 container里面也引入了UI组件