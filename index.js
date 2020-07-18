/**
 * @format
 */

import {AppRegistry, UIManager, Platform} from 'react-native';
import App from './src/views/App';
import telefonH from './src/helper/telefonH';

if (telefonH.and) UIManager.setLayoutAnimationEnabledExperimental(true);

//console.disableYellowBox = true;

AppRegistry.registerComponent('todolist', () => App);
