import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, Text, Dimensions, Alert, ScrollView, WebView } from 'react-native';
import { observer, inject } from "mobx-react"
import { Img, Icon, Color } from "../../components"
@inject("rootStore")
@observer
class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "文章详情",
        headerLeft: <Icon style={{ paddingHorizontal: 16 }} color={Color.tintColor} name="md-arrow-back" size={26} _onPress={() => navigation.goBack()} />,
    })
    constructor(props) {
        super(props)
        const { DetailStore } = this.props.rootStore
        this.store = DetailStore
        this.state = ({
            webViewHeight: 0
        })
    }
    componentDidMount() {
        const { id } = this.props.navigation.state.params
        if (id) {
            this._getData(id)
        } else {
            this._warning()
        }
    }
    _getData = (id) => {
        this.store.fetchDetail({ id })
    }
    _warning = () => {
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
                    {!loading && <ScrollView style={styles.content}
                        horizontal={false}>
                        <View style={styles.bottomTop}>
                            <Text style={styles.title}>{data.title}</Text>
                            <View style={styles.more}>
                                <Text style={styles.author}>{data.authors}</Text>
                                <Text style={styles.time}>{data.time}</Text>
                            </View>
                        </View>
                        <Img propsImg={data.img} styles={styles.topImg} />
                        <View style={{ paddingLeft: 20, marginTop: 20 }}>
                            <View style={styles.desc}>
                                <Text style={{ color: Color.desc }}>{data.description}</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, height: this.state.webViewHeight, width: Dimensions.get("window").width }}>
                            {/* <WebView
                                scalesPageToFit={false}
                                automaticallyAdjustContentInsets={true}
                                injectedJavaScript={BaseScript}
                                style={{
                                    width: Dimensions.get('window').width,
                                    height: this.state.height
                                }}
                                originWhitelist={['*']}
                                source={{ html: data.content }}
                            /> */}


                            <WebView
                                source={{
                                    html:
                                        `<!DOCTYPE html>
                                                <html>
                                                <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                                            
                                                <body>
                                                ${data.content}
                                                <script>
                                                function ResizeImages(){
                                                    var myimg;
                                                    for(i=0;i <document.images.length;i++){
                                                   
                                                    myimg = document.images[i];
                                                    myimg.width = ${ Dimensions.get("window").width};
                                                    }
                                                }
                                                window.onload=function(){ 
                                                    ResizeImages()
                                                    window.location.hash = '#' + document.body.clientHeight;
                                                    document.title = document.body.clientHeight;
                                                }
                                                </script></body></html>`
                                }}
                                style={{ flex: 1 }}
                                bounces={false}
                                scrollEnabled={false}
                                javaScriptEnabled={true}
                                automaticallyAdjustContentInsets={true}
                                contentInset={{ top: 0, left: 0 }}
                                onNavigationStateChange={(device) => {

                                    if (device.title) {
                                        this.setState({
                                            webViewHeight: (parseInt(device.title) + 520)
                                        })
                                    }
                                }}
                            />
                        </View>

                    </ScrollView>}
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
        backgroundColor: "#FFFFFF"
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
    },
    bottomTop: {
        width: "100%",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    more: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    author: {
        fontSize: 12,
        color: Color.tintColor
    },
    time: {
        fontSize: 12,
        color: Color.desc
    },
    desc: {
        paddingHorizontal: 20,
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderLeftColor: "#d9d8d9",
    },
    content: {
        width: "100%",
        height: Dimensions.get("window").height,
    },



})
