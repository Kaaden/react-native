import React from 'react';
import { View, Text } from 'react-native';
import { observer, inject } from "mobx-react"
@inject("rootStore")
@observer
export default class Home extends React.Component {
    static navigationOptions = {
        title: '首页',
    };//配置标题
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
    }
    render() {
        console.log(this.HomeStore)
        return (
            <View ><Text style={{ fontFamily: 'space-mono' }}>12441</Text></View>
        );
    }

}


