import ShopData from './ShopData'
const initialState={collection:ShopData};


const shopDataReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
} 
export default shopDataReducer;