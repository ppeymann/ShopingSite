const initialState={
    load:false,
    product:[],
    error:''
}

const productReducer = (state=initialState , action) =>{
    switch(action.type){
        case "LOADING":
            return{
                ...state,
                load:true
            }
        case "FETCH_SUCCESS":
            return{
                ...state,
                load:false,
                product:action.payload
            }
        case "FETCH_ERROR":
            return{
                ...state,
                load:false,
                product:[],
                error:action.payload
            }
        default:
            return state
    }
}
export default productReducer