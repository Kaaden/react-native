import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

export const PageSetting = (page, name, icon) => {
    const Stack = createStackNavigator({
        Stack: page,
    })
    Stack.navigationOptions = {
        tabBarLabel: name,
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={icon}
            />
        ),
    };
    return Stack
}