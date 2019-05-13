import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, Text, Alert } from 'react-native';
import { observer, inject } from "mobx-react"
import { Icon, Color } from "../../components"
@inject("rootStore")
@observer
class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Icon style={{ paddingHorizontal: 16 }} color={Color.tintColor} name="md-arrow-back" size={26} _onPress={() => navigation.goBack()} />,
    })
    constructor(props) {
        super(props)
        const { DetailStore } = this.props.rootStore
        this.store = DetailStore
    }
    componentDidMount() {
        const { id } = this.props.navigation.state.params
        if (id) {
            this._getData(id)
        } else {
            this._WarnId()
        }
    }
    _getData = (id) => {
        this.store.fetchDetail({ id })
    }
    _WarnId = () => {
        Alert.alert(
            '温馨提示',
            '啊哦~文章不见了~',
            [
                { text: '确定', onPress: () => this.props.navigation.goBack() },
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.top}>
                    <StatusBar
                        animated
                        barStyle={"dark-content"}
                        backgroundColor={"#FFFFFF"}
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.bottom}>
                    <View style={styles.loading}>正在加载中</View>
                    {/* <Text>1</Text> */}
                </SafeAreaView>
            </View>
        );
    }

}
export default Detail
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: "#FFFFFF",
    },
    bottom: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    },
    loading: {
        width: "100%",
    }

})
