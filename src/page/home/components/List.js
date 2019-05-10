import React, { Component } from "react"
import { FlatList } from 'react-native';
import { observer, inject } from "mobx-react"
import Item from "./Item"
import { Loading, Empty } from "../../../components"
import Header from "./Header"
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
        const { list } = this.HomeStore
        if (!list.length) {
            this._getData(1, false)
        }
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

    _item = ({ item }) => {
        const { _onPress } = this.props
        return (<Item item={item} _onPress={_onPress} />)
    }

    _footer = () => {
        const { loading } = this.HomeStore
        if (loading) {
            return (<Loading loading={loading} />)
        } else {
            return null
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

    _header = () => <Header _onSearch={this.props._onSearch} />
    render() {
        const { refreshing } = this.state
        const { list } = this.HomeStore
        return (
            <FlatList
                extraData={this.HomeStore}
                data={list}
                ListEmptyComponent={this._empty}
                ListFooterComponent={this._footer}
                ListHeaderComponent={this._header}
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