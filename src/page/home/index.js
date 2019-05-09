import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { observer, inject } from "mobx-react"
import Header from "../../components/Header"
import List from "./components/List"
@inject("rootStore")
@observer
export default class Home extends React.Component {
    static navigationOptions = ({
        headerTitle: <Header title={"首页"} />,
    });//配置标题
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
    }
    componentDidMount() {
        // this.HomeStore.fetchBing()
        // this.HomeStore.fetchList(1)
    }


    render() {
        // const { pic, list } = this.HomeStore
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <List />
                {/* <Image source={{ uri: pic }} style={{ width: "100%", height: 400 }} /> */}
                {/* <FlatList
                    data={list}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
                /> */}
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f0f0f0"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
