import React from "react"
import store from "../store"
import dispatcher from "../store/dispatcher"
class List extends React.Component{
    constructor(){
        super();
        this.state = store.getState();
        store.handleUpdate(this.handleUpdate.bind(this))
    }
    render(){
        let {list} = this.state;
        return (
            <div>
                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>{item}
                                <button onClick={this.handleListDel.bind(this,index)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    handleListDel(index){
        let action = {
            type:"LIST_DEL",
            index:index
        }

        dispatcher.dispatch(action);
    }
    handleUpdate(){
        this.setState(store.getState());
    }
}

export default List;