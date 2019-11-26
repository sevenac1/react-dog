import React, { Component } from "react";
import { TabBarRoute } from "../../router"
import {withRouter} from "react-router-dom";
import "./index.css"

class TabBar extends Component{
    constructor(){
        super()

        this.state = {
            activeIndex:0
        }
    }
    render(){
        let {activeIndex} = this.state;
        return(
            <div id="footer">
                <ul>
                    {
                        TabBarRoute.map((item,index) =>(
                            <li key={item.path} onClick={this.handleTo.bind(this,item.path,index)} className={activeIndex==index?'active':''}>
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    handleTo(path,index){
        this.props.history.push(path);
        this.setState({
            activeIndex:index
        })
    }
}

export default withRouter(TabBar)