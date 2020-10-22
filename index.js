/**
 * @format
 */

import {AppRegistry} from 'react-native';


import News from './src/News';
import MenuList from './src/MenuList';
import ClarusShop from './src/ClarusShop';
// import App from './src/App';
import Flex from './src/Flex';
import LoginPage from './src/LoginPage';
import MyNewsPage from './src/MyNewsPage';
import ToDoApp from './src/ToDoApp';
import Shopping from './src/Shopping';



import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyNewsPage);
