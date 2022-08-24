const initialState = {
    cartItem:[],
    total:0,
    counter:0,
    checkOut:false
}

const sumItems = item =>{
    const counter = item.reduce((total , product)=>(total+product.quantity),0)
    const total = item.reduce((total , product)=>((total+product.price*product.quantity)),0).toFixed(2)
    return {total, counter}
}

const cartReducer = (state=initialState , action)=>{
    switch (action.type){
        case "ADD_ITEM":
            if(!state.cartItem.find(item=>item.id===action.payload.id)){
                state.cartItem.push({
                    ...action.payload,
                    quantity:1

                })
            }
            return{
                ...state,
                cartItem:[...state.cartItem],
                ...sumItems(state.cartItem),
                checkOut:false
            }
        case "INCREASE":
            const increaseIndex = state.cartItem.findIndex(item=>item.id===action.payload.id)
            state.cartItem[increaseIndex].quantity++;
            return{
                ...state,
                cartItem:[...state.cartItem],
                ...sumItems(state.cartItem),
                checkOut:false
            }
        case "DECREASE":
            const decreaseIndex = state.cartItem.findIndex(item=>item.id===action.payload.id)
            state.cartItem[decreaseIndex].quantity--;
            return{
                ...state,
                cartItem:[...state.cartItem],
                ...sumItems(state.cartItem),
                checkOut:false
            }
        case "REMOVE":
            const newCartItem = state.cartItem.filter(item => item.id!==action.payload.id)
            return{
                ...state,
                cartItem:[...newCartItem],
                ...sumItems(newCartItem),
                checkOut:false
            }
        case "CHECKOUT":
            return{
                cartItem:[],
                total:0,
                counter:0,
                checkOut:true
            }
        case "CLEAR":
            return{
                cartItem:[],
                total:0,
                counter:0,
                checkOut:false
            }
        default:
            return state
        
    }
}
export default cartReducer