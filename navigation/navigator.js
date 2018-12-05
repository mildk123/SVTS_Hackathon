import { createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator';
import authScreen from '../screens/authScreen'
import ParentScreen from '../screens/ParentScreen';
import DriverScreen from '../screens/DriverScreen';

export default AppStackNavigator = createStackNavigator({
    Auth: authScreen,
    Parent: ParentScreen,
    Driver : DriverScreen,
    Main: MainTabNavigator,
},{
    navigationOptions : {
        gesturesEnabled: false,
        header: null
    }
})