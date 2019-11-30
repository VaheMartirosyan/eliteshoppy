
export default (state = {
    initmagazine: [],
    shop: false
}, action) => {
    switch (action.type) {
        case 'shopChange':
            return {
                ...state,
                shop: true
            }
        case 'closeShop' :
            return {
                ...state,
                shop: false
            }

        default :
                return state
    }
}
