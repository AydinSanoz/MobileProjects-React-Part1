/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginPage from './src/LoginPage';
import Flex from './src/Flex';
import MyNewsPage from './src/MyNewsPage';
import News from './src/News';
import Main from './src/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => News);
