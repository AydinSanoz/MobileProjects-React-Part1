/**
 * @format
 */

import {AppRegistry} from 'react-native';
import News from './src/News';
import Main from './src/Main';
import App from './src/App';
import Flex from './src/Flex';
import LoginPage from './src/LoginPage';
import MyNewsPage from './src/MyNewsPage';
import ToDoApp from './src/ToDoApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ToDoApp);
