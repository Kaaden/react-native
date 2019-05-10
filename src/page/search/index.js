import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import { observer, inject } from "mobx-react"
import Input from "./components/Input"
import List from "./components/List"
@inject("rootStore")
@observer
export default class Search extends React.Component {

    constructor(props) {
        super(props)
        const { SearchStore } = this.props.rootStore
        this.store = SearchStore
    }
    _onPress = () => {
        const { navigation } = this.props
        navigation.navigate("Home")
    }
    _Detail = (id) => {
        const { navigation } = this.props
        navigation.navigate("Detail", { id })
    }
    render() {
        const { loading, result, isok } = this.store
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.top}>
                    <StatusBar
                        animated
                        barStyle={"dark-content"}
                        backgroundColor={"#FFFFFF"}
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.bottom}>
                    <Input _onPress={this._onPress} />
                    <List
                        _onPress={this._Detail}
                        list={result}
                        loading={loading}
                        isok={isok} />
                </SafeAreaView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: "#FFFFFF"
    },
    bottom: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    }

})
