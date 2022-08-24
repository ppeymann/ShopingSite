export const adding = item =>{
    return {
        type:"ADD_ITEM",
        payload:item
    }
}
export const increase = item =>{
    return {
        type:"INCREASE",
        payload:item
    }
}
export const decrease = item =>{
    return {
        type:"DECREASE",
        payload:item
    }
}
export const remove = item =>{
    return {
        type:"REMOVE",
        payload:item
    }
}
export const checkOut = () =>{
    return {
        type:"CHECKOUT"
    }
}
export const clear = () =>{
    return {
        type:"CLEAR"
    }
}