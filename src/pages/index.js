import Loadable from "react-loadable";
import Loading from "../components/loading"

export const Store = Loadable({
    loader:()=>import("./store"),
    loading:Loading
})

export const Goodgoods = Loadable({
    loader:()=>import("./goodgoods"),
    loading:Loading
})

export const Shopping = Loadable({
    loader:()=>import("./shopping"),
    loading:Loading
})

export const Worldwide = Loadable({
    loader:()=>import("./worldwide"),
    loading:Loading
})

export const Member = Loadable({
    loader:()=>import("./member"),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

export const SelectStore = Loadable({
    loader:()=>import("./selectStore"),
    loading:Loading
})

export const Discount = Loadable({
    loader:()=>import("./discount"),
    loading:Loading
})

export const Essence = Loadable({
    loader:()=>import("./essence"),
    loading:Loading
})

export const Active = Loadable({
    loader:()=>import("./active"),
    loading:Loading
})

export const Makeup = Loadable({
    loader:()=>import("./makeup"),
    loading:Loading
})

export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Healthcare = Loadable({
    loader:()=>import("./healthcare"),
    loading:Loading
})

export const Infant = Loadable({
    loader:()=>import("./infant"),
    loading:Loading
})

export const National = Loadable({
    loader:()=>import("./national"),
    loading:Loading
})