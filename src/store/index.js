import Rx from 'rxjs';
import configureStore from './configureStore';
import reducer$ from "../reducers";
import { getState, saveState } from "../services/storage";

const store = configureStore(reducer$, getState());
store.subscribe(saveState);

export default store;
