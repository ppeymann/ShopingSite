export const isInCart = (state , id)=>{
    const result=!!state.cartItem.find(item=>item.id===id)
    return result
}
export const quantityItem = (state , id)=>{
    const indexState = state.cartItem.findIndex(item=>item.id===id)
    if(indexState===-1){
        return false
    }else{
        return state.cartItem[indexState].quantity
    }
}