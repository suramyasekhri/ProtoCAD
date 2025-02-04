import { combineReducers } from 'redux';
import componentsReducer from './componentsReducer';
import currentComponentReducer from './currentComponentReducer';
import selectedComponentReducer from './selectedComponentReducer';
import directoryReducer from './directoryReducer';
import codeReducer from './codeReducer';
// import resolverReducer from "./resolverReducer";

export default combineReducers({
  components: componentsReducer,
  current: currentComponentReducer,
  selected: selectedComponentReducer,
  directory: directoryReducer,
  code: codeReducer,
});
