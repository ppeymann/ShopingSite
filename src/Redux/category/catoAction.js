import axios from "axios"

const loader = ()=>{
    return{
        type:"LOAD"
    }
}
const success = product =>{
    return{
        type:"FETCH_SUCC",
        payload:product
    }
}
const error = err =>{
    return{
        type:"FETCH_ERR",
        payload:err
    }
}
export const getCato = ()=>{
    return (dispatch)=>{
        dispatch(loader())
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>dispatch(success(res.data)))
        .catch(err=>dispatch(error(err.message)))
    }
}