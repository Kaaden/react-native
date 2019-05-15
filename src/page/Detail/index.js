import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, Text, Dimensions, Alert } from 'react-native';
import { observer, inject } from "mobx-react"
import { Img, Icon, Color } from "../../components"
@inject("rootStore")
@observer
class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title:"",
        headerLeft: <Icon style={{ paddingHorizontal: 16 }} color={Color.tintColor} name="md-arrow-back" size={26} _onPress={() => navigation.goBack()} />,
    })
    constructor(props) {
        super(props)
        const { DetailStore } = this.props.rootStore
        this.store = DetailStore
    }
    componentDidMount() {
        const { id, title } = this.props.navigation.state.params
        console.log(title)
        this._changeTitle(title)
        if (id) {
            this._getData(id)
        } else {
            this._WarnId()
        }
    }
    _changeTitle = (title) => {
        this.props.navigation.setParams({ title })
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
        const { data, loading } = this.store
        console.log(loading)
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
                    {loading && <View style={styles.loading}><Text style={styles.loadingText}>正在加载中...</Text></View>}
                    {!loading && <View>
                        <Img propsImg={data.img} styles={styles.topImg} />
                    </View>}
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
        height: Dimensions.get("window").height / 2,
        alignItems: "center",
        justifyContent: "center",

    },
    loadingText: {
        color: Color.desc,
    },
    topImg: {
        width: "100%",
        height: 200
    }


})
