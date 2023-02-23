import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducers/productReducer';
import { languageCardsReducer } from './reducers/languageCardsReducer';

const rootReducer = combineReducers({

    products: productReducer,
    languageCards: languageCardsReducer

});

export const store = createStore(rootReducer);

// формируем объект store (хранилище), который обеспечивает работу всего redux