import React from "react"
import store from "../store"
import dispatcher from "../store/dispatcher"
class Input extends React.Component{
    constructor(){
        super()
        this.state = store.getState();
        store.handleUpdate(this.handleUpdate.bind(this))
    }
    render(){
        let {inputVal} = this.state;
        return (
            <div>
                <input type="text" value={inputVal} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleListAdd.bind(this)}>添加</button>
            </div>
        )
    }
    handleListAdd(){
        let action = {
            type:"LIST_ADD"
        }

        dispatcher.dispatch(action);
    }
    handleChange(e){
        var val = e.target.value;
      
        let action = {
            type:"INPUT_CHENGE",
            value:val
        }
        
       dispatcher.dispatch(action);
    }
    handleUpdate(){
        this.setState(store.getState());
    }
}

export default Input;