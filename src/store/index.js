import Rx from 'rxjs';
import configureStore from './configureStore';
import reducer$ from "../reducers";
import { getState, saveState } from "../services/storage";

const initialState = getState();
const store = configureStore(reducer$, initialState);
store.subscribe(saveState);

export default store;
