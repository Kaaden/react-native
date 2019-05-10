import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text } from 'react-native';
import { observer, inject } from "mobx-react"
import { Header } from "../../components"
@inject("rootStore")
@observer
export default class Search extends React.Component {
    static navigationOptions = ({
        headerTitle: <Header title={"搜索"} />,
    });//配置标题
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <Text>12313</Text>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    },

})
