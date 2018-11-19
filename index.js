/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/component/Login';
import LoginNavigator from './src/component/LoginNavigator';

AppRegistry.registerComponent(appName, () => LoginNavigator);
