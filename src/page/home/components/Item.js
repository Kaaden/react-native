import React, { Component } from "react"
import { TouchableHighlight, Text, View, Image, StyleSheet } from 'react-native';
import { observer, inject } from "mobx-react"
import Color from "../../../components/Color"
const DEFAULT = { errImg: require("../../../../assets/images/idp.png") }
@inject("rootStore")
@observer
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 0
        }
    }


    render() {
        const { type } = this.state
        const { item } = this.props
        let url = { uri: item.img }
        if (type === 1) {
            url = require("../../../../assets/images/idp.png")
        }
        return (
            <TouchableHighlight >
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.top}>
                            <Text style={styles.authors}>{item.authors}</Text>
                            <Text style={styles.cate}>{item.category}</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                        <Text numberOfLines={3} style={styles.desc}>{item.description}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Image source={url} style={styles.img} onError={(error) => { this.setState({ type: 1 }) }}
                    />
                </View>
            </TouchableHighlight>
        )
    }
}
export default List
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#fff",
        marginBottom: 10
    },

    top: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    authors: {
        fontSize: 14,
        color: Color.tintColor
    },
    cate: {
        fontFamily: "space-mono",
        fontSize: 12,
        color: Color.desc
    },
    content: {
        flex: 1,
        flexDirection: "column",
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    desc: {
        fontSize: 14,
        color: Color.desc,
    },
    time: {
        fontSize: 12,
        color: Color.desc,
        marginTop: 10
    },
    img: {
        width: 100,
        height: 100,
        flexShrink: 0,
        borderRadius: 2
    }
})