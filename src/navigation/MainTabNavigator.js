import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Home from "../page/home/index"
import { PageSetting } from "./pageSet"

const HomeStack = PageSetting(Home, "首页", "md-home")

const LinksStack = PageSetting(LinksScreen, 'Links', "ios-link")

const SettingsStack = PageSetting(SettingsScreen, 'Settings', "ios-options")


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});



