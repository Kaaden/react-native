import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { observer, inject } from "mobx-react"
import { Icon, Color } from "../../../components"
@inject("rootStore")
@observer
class Input extends React.Component {

    constructor(props) {
        super(props)
        const { SearchStore } = this.props.rootStore
        this.store = SearchStore
    }
    _search = (e) => {
        const title = e.nativeEvent.text
        this.store.fetchSearch(title)
    }
    _onChange = (e) => {
        if (!e) {
            this.store.clearResult()
        }
    }
    render() {
        const { _onPress } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.Input}>
                    <View style={styles.InputContain}>
                        <Icon size={18} name={"md-search"} color={"rgba(0, 0, 0, 0.36)"} />
                        <TextInput
                            autoCorrect={false}
                            returnKeyType={"search"}
                            clearButtonMode={"always"}
                            autoFocus={true}
                            style={styles.InputMain}
                            placeholder="搜索"
                            onChangeText={this._onChange}
                            onSubmitEditing={this._search} />
                    </View>
                    <TouchableOpacity onPress={_onPress} style={styles.btn}>
                        <Text style={styles.btnTitle}>取消</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#f0f0f0",
        height: 54
    },
    Input: {
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
    },
    InputContain: {
        height: 34,
        borderRadius: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 16,
    },
    InputMain: {
        height: "100%",
        fontSize: 17,
        flex: 1,
        marginLeft: 10
    },
    btn: {
        flexShrink: 0,
        marginLeft: 10,

    },
    btnTitle: {
        color: Color.tintColor,
        fontSize: 17,
    }

})
export default Input