import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { observer, inject } from "mobx-react"
import Input from "./components/Input"
@inject("rootStore")
@observer
export default class Search extends React.Component {

    constructor(props) {
        super(props)
    }
    _onPress = () => {
        const { navigation } = this.props
        // const index = navigation.getParam("index")
        // console.log(index)
        navigation.navigate("Home")
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <Input _onPress={this._onPress} />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

})
