import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { observer, inject } from "mobx-react"
import { Header } from "../../components"
import List from "./components/List"
@inject("rootStore")
@observer
export default class Home extends React.Component {
    // static navigationOptions = ({ navigation }) => ({

    //     headerTitle: <Header title={"首页"} _onPress={() => navigation.navigate('Search')} />,
    // });//配置标题
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <List />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
