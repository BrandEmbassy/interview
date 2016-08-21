import app from './app/reducer';
import config from './config/reducer';
import device from './device/reducer';
import intl from './intl/reducer';
import contacts from './contacts/reducer';
import nativeRouting from '../native/routing/reducer';
import { combineReducers } from 'redux';
import { routerReducer as browserRouting } from 'react-router-redux';
import { updateStateOnStorageLoad } from './configureStorage';

export default function configureReducer(initialState) {
  // One day we will have universal routing, but we are not there yet.
  // jmurzy/react-router-native
  const routing = initialState.device.isReactNative
    ? nativeRouting
    : browserRouting;
  let reducer = combineReducers({
    app,
    config,
    device,
    intl,
    contacts,
    routing,
  });

  // The power of higher-order reducers, http://slides.com/omnidan/hor
  reducer = updateStateOnStorageLoad(reducer);

  return reducer;
}
