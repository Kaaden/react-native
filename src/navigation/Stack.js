import React from "react"
import { createStackNavigator } from "react-navigation"
import Tab from "./Tab"
import Detail from "../page/Detail/index"
import { Header, Icon, Color } from "../components"
const Stack = createStackNavigator(
    {
        Tab: {
            screen: Tab,
            navigationOptions: ({ navigation }) => ({
                headerTitle: <Header title={"首页"} _onPress={() => navigation.navigate('Search')} />,
                gesturesEnabled: false,
            }),
        },
        Detail: {
            screen: Detail,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "文章详情",
                tabBarVisible: false, // 隐藏底部导航栏

                // header: null,  //隐藏顶部导航栏
                headerLeft: <Icon style={{ paddingHorizontal: 16 }} color={Color.tintColor} name="md-arrow-back" size={26} _onPress={() => navigation.goBack()} />,
            }),

        }
    },
    {
        defaultNavigationOptions: () => ({
            headerStyle: {
                backgroundColor: 'rgb(245,245,245)',
            },
        })
    }
)

export default Stack
