//import { legacy_createStore, combineReducers} from 'redux';
//import vistoReducer from './visto/reducer';
import { configureStore } from '@reduxjs/toolkit';
import mails from './slices/mails';

export default configureStore({
    reducer:{
      mails
    }
});
