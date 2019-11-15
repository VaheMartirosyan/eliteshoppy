const shopCards={
    initmagazine: []
}

const shopCardsReducer=(state = shopCards, action)=>{
    if(action.type=="changeInitmagazine"){
        return{...state, initmagazine:action.value}
    }
    return state
}

export default shopCardsReducer
