import View from './container'  //组件向外到处一定要有index.js
import reducer from './store/reducer'

export { View, reducer } //暴露  只引入container 就好 因为 container里面也引入了UI组件