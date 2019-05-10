import React from "react"
import { createBottomTabNavigator } from "react-navigation"
import Home from "../page/home/index"
import { TabBarIcon } from '../components';
const Tab = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({
                tabBarLabel: "首页",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        name="md-home"
                        focused={focused}
                    />
                ),
            }),
        }

    },
  
)

export default Tab
