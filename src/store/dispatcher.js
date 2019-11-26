import {Dispatcher} from "flux";
import store from "./index.js"
const dispatcher = new Dispatcher();

dispatcher.register((action)=>{
    switch(action.type){
        case "INPUT_CHENGE":
            store.handleChange(action.value);
            break;    
        case "LIST_ADD":
            store.handleListAdd();
            break;
        case "LIST_DEL":
            store.handleListDel(action.index);
            break;
    }
})

export default dispatcher