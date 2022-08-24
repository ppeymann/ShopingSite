import axios from "axios"

const loader = ()=>{
    return{
        type:"LOADING"
    }
}
const success = product =>{
    return{
        type:"FETCH_SUCCESS",
        payload:product
    }
}
const error = err =>{
    return{
        type:"FETCH_ERROR",
        payload:err
    }
}

export const getItem = ()=>{
    return (dispatch)=>{
        dispatch(loader())
        axios.get('https://fakestoreapi.com/products')
        .then(res=>dispatch(success(res.data)))
        .catch(err=>dispatch(error(err.message)))
    }
}
