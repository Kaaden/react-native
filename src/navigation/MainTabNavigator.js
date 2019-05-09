import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from "../page/home/index"
import { PageSetting } from "./pageSet"

const HomeStack = PageSetting(Home, "首页", "md-home")

export default createBottomTabNavigator({
  HomeStack,
});



