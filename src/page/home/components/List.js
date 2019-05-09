import React, { Component } from "react"
import { FlatList } from 'react-native';
import { observer, inject } from "mobx-react"
import Item from "./Item"
import { Loading, Empty } from "../../../components"
const ITEM_HEIGHT = 82
@inject("rootStore")
@observer
class List extends Component {
    constructor(props) {
        super(props)
        const { HomeStore } = this.props.rootStore
        this.HomeStore = HomeStore
        this.state = {
            page: 1,
            refreshing: false,
        }
    }

    componentDidMount() {
        this._getData(1, false)
    }

    _getData = (pageindex, flesh) => {
        this.HomeStore.fetchList({ pageindex, flesh })
        this.setState({ page: pageindex, })
    }

    // 列表key值
    _keyExtractor = (item, index) => `${index}`

    // 上拉加载
    _onLoad = () => {
        let { page } = this.state
        page = page + 1
        this._getData(page, false)
    }

    // 刷新
    _onRefresh = async () => {
        this.setState({ refreshing: true })
        await this._getData(1, true)
        const that = this
        setTimeout(() => {
            that.setState({ refreshing: false })
        }, 1000);
    }

    _getItemLayout = (data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })

    _item = ({ item }) => <Item item={item} />

    _footer = () => {
        const { list, loading } = this.HomeStore
        if (!list.length) {
            return null
        } else {
            return (<Loading loading={loading} />)
        }
    }

    _empty = () => {
        const { loading } = this.HomeStore
        if (!loading) {
            return (<Empty />)
        } else {
            return null
        }
    }
    render() {
        const { refreshing } = this.state
        const { list } = this.HomeStore
        return (
            <FlatList
                data={list}
                ListEmptyComponent={this._empty}
                ListFooterComponent={this._footer}
                keyExtractor={this._keyExtractor}
                renderItem={this._item}
                onEndReached={this._onLoad}
                getItemLayout={this._getItemLayout}
                initialNumToRender={10}
                onEndReachedThreshold={0.1}
                removeClippedSubviews
                onRefresh={this._onRefresh}
                refreshing={refreshing}
            />
        )
    }
}
export default List