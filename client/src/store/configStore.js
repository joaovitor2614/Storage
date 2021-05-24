import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import clientReducer from '../reducers/client';
import salesReducer from '../reducers/sales';
import storageReducer from '../reducers/storage'
import storageFilterReducer from '../reducers/storageFilter';
import clientFilterReducer from '../reducers/clientFilter';

import billsReducer from '../reducers/bills';
import billsFilterReducer from '../reducers/billsFilter';
import historyReducer from '../reducers/history';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
        combineReducers({
      
 
            storage: storageReducer,
            storageFilter: storageFilterReducer,
            sales: salesReducer,
            client: clientReducer,
            clientFilter: clientFilterReducer,
            bills: billsReducer,
            billsFilter: billsFilterReducer,
            history: historyReducer
       
        }),
        composeEnhancers(applyMiddleware(thunk))
    );




export default store