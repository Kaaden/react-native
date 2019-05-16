import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import { observer, inject } from "mobx-react"
import List from "./components/List"
@inject("rootStore")
@observer
export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }
    _onSearch = () => {
        this.props.navigation.navigate("Search", { index: "home" })
    }
    _detail = (item) => {
        this.props.navigation.navigate("Detail", { id: item.id})
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated
                    barStyle={"dark-content"}
                    backgroundColor="#FFFFFF"
                    translucent={true}
                />
                <View style={styles.main}>

                    <List
                        _onSearch={this._onSearch}
                        _onPress={this._detail} />
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    },
})
