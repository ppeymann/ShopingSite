const initialState={
    load:false,
    items:[],
    error:''
}

const catoReducer = (state=initialState , action) =>{
    switch(action.type){
        case "LOAD":
            return{
                ...state,
                load:true
            }
        case "FETCH_SUCC":
            return{
                ...state,
                load:false,
                items:action.payload
            }
        case "FETCH_ERR":
            return{
                ...state,
                load:false,
                items:[],
                error:action.payload
            }
        default:
            return state
    }
}
export default catoReducer