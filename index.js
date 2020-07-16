/**
 * @format
 */

import {AppRegistry, UIManager, Platform} from 'react-native';
import App from './src/views/App';

if (Platform.OS === 'android')
  UIManager.setLayoutAnimationEnabledExperimental(true);

//console.disableYellowBox = true;

AppRegistry.registerComponent('todolist', () => App);
