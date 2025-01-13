# 这块可以跟 redux 对照着看，看看它们的区别在哪

## 1. vuex 中的 mutations 相当于 redux 中的 reducer

## 2. vuex 中的 getters ,redux 中没有， redux 可以通过 selector 来实现

## 3. redux 中处理副作用会用到中间件比如 redux-thunk, redux-saga, redux-promise 等，vuex 没有

## 4. 模块拆分不一样， redux 通过 combineReducers 来合并模块, vuex 通过 modules 配置来合并模块

## 问题：为啥 redux 中要借助 中间件来实现异步？而 vuex 不用？

## 答：redux 中的中间件，其实本质上就是对 action 进行拦截，然后进行一些额外的处理，比如异步请求，比如日志打印等。

## vuex 本身提供了异步处理的方案，就是通过 action 返回一个 promise 对象，然后在 store.dispatch 的时候，传入一个函数，这个函数的参数就是 action，这个函数的返回值就是 promise 对象，这样就可以实现异步处理
