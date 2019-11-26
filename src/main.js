import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./static/index.scss"

ReactDOM.render(
    <App />,
    document.getElementById("root"),
    () => {
        console.log("渲染成功")
    }
)

/*
    withRouter:
        路由当中的一个高阶组件，作用是给当前组件的props身上添加三个属性(history location match)


    css私有化的方式
        styled-components    sass less   css_modules


        缺点：需要学习成本


        特点：css组件

    flux:
        cnpm install flux -S


        
    redux:
    mobx:
        都是公共状态管理

*/

