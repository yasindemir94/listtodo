import { AppRegistry, UIManager, Platform } from 'react-native';
import App from './src/views/App';
import telefonH from './src/helper/tlfnH';

import 'react-native-console-time-polyfill';

if (telefonH.and) UIManager.setLayoutAnimationEnabledExperimental(true);

//console.disableYellowBox = true;

AppRegistry.registerComponent('todolist', () => App);
