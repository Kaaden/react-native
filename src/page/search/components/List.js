import React, { Component } from "react"
import { FlatList } from 'react-native';
import { observer, inject } from "mobx-react"
import Item from "../../home/components/Item"
import { Empty, Loading } from "../../../components"
// import Header from "./Header"
const ITEM_HEIGHT = 82
@inject("rootStore")
@observer
class List extends Component {
    constructor(props) {
        super(props)
    }

    // 列表key值
    _keyExtractor = (item, index) => `${index}`



    _getItemLayout = (data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })

    _item = ({ item }) => {
        const { _onPress } = this.props
        return (<Item item={item} _onPress={_onPress} />)
    }

    _empty = () => {
        const { loading, isok } = this.props
        if (!loading && !isok) {
            return (<Empty />)
        } else {
            return null
        }
    }
    _footer = () => {
        const { loading } = this.props
        if (loading) {
            return (<Loading loading={loading} />)
        } else {
            return null
        }
    }
    render() {
        const { list } = this.props
        return (
            <FlatList
                extraData={this.props}
                data={list}
                ListEmptyComponent={this._empty}
                ListFooterComponent={this._footer}
                keyExtractor={this._keyExtractor}
                renderItem={this._item}
                getItemLayout={this._getItemLayout}
                initialNumToRender={10}
                onEndReachedThreshold={0.1}
                removeClippedSubviews
            />
        )
    }
}
export default List