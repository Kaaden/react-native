import React from "react"
import { createStackNavigator } from "react-navigation"
import Tab from "./Tab"
import Detail from "../page/Detail/index"
import { Header } from "../components"
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
            navigationOptions: () => ({
            })

        }
    },
)

export default Stack
