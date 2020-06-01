import UserReducer from './User/UserReducer';
import DropdownReducer from './CartDropdown/DropdownReducer';
import shopDataReducer from './ShopData/ShopDataReducer'
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './Directory/DirectoryReducer';
const persistConfig={key:'root',storage,whitelist:['toggle']};


const rootReducer= combineReducers({ user:UserReducer,toggle:DropdownReducer,directory:directoryReducer,collectionShop:shopDataReducer
});



export default persistReducer(persistConfig,rootReducer)