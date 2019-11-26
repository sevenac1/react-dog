import observer from "../observer"

const store= Object.assign(observer,{
    state:{
        inputVal:"123",
        list:[]
    },
    getState(){
        return this.state;
    },
    handleChange(value){
        this.state.inputVal = value;
        this.$emit("update");    
    },
    handleListAdd(){
        this.state.list.push(this.state.inputVal);
        this.state.inputVal = "";
        this.$emit("update");
    },
    handleListDel(index){
        this.state.list.splice(index,1);
        this.$emit("update");
    },
    handleUpdate(callback){
        this.$on("update",callback);
    },
   
})


export default store;