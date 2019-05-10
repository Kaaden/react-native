import React from "react"
import { createStackNavigator } from "react-navigation"
import Tab from "./Tab"
import { Header } from "../components"
import Search from "../page/search/index"
const Stack = createStackNavigator(
    {
        Tab: {
            screen: Tab,
            navigationOptions: ({ navigation }) => ({
                headerTitle: <Header title={"首页"} _onPress={() => navigation.navigate('Search')} />,
                gesturesEnabled: false,
            }),
        },
        Search: {
            screen: Search,

            navigationOptions: ({ navigation }) => ({
                headerTitle: null
            })
        },
    },
)

export default Stack
