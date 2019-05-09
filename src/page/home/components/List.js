import React, { Component } from "react"
import { FlatList } from 'react-native';
import { observer, inject } from "mobx-react"
import Item from "./Item"
@inject("rootStore")
@observer
class List extends Component {
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
    }
    componentDidMount() {
        this.HomeStore.fetchList(1)
    }
    // 列表key值
    _keyExtractor = (item) => `${item.id}`

    _item = ({ item }) => {
        return (
            <Item item={item} />
        )
    }
    render() {
        const { list } = this.HomeStore
        return (
            <FlatList
                data={list}
                keyExtractor={this._keyExtractor}
                renderItem={this._item}
            />
        )
    }
}
export default List