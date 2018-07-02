import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import user from './reducers';
import thunk from 'redux-thunk';


export default createStore(user, composeWithDevTools(applyMiddleware(thunk,logger)));
