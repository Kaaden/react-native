import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from "../page/home/index"
import Search from "../page/search/index"
import { PageSetting } from "./pageSet"
import { createStackNavigator } from 'react-navigation';
const HomeStack = PageSetting(Home, "首页", "md-home")

const Stack = createStackNavigator({
  Stack: Search,
})
Stack.navigationOptions = {
  tabBarLabel: "Search",
};
export default createBottomTabNavigator({
  HomeStack,
});



