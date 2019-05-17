import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, Text, Dimensions, Alert, ScrollView, WebView } from 'react-native';
import { observer, inject } from "mobx-react"
import { Img, Color } from "../../components"

const BaseScript =
    `
    (function () {
        var height = null;
        function changeHeight() {
          if (document.body.scrollHeight != height) {
            height = document.body.scrollHeight;
            if (window.postMessage) {
              window.postMessage(JSON.stringify({
                type: 'setHeight',
                height: height,
              }))
            }
          }
        }
        setTimeout(changeHeight, 300);
    } ())
    `

const HTMLTEXT = `<h1>This HTML snippet is now rendered with native components !</h1>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />`
@inject("rootStore")
@observer
class Detail extends React.Component {

    constructor(props) {
        super(props)
        const { DetailStore } = this.props.rootStore
        this.store = DetailStore
        this.state = ({
            webViewHeight: 0,
            webLoading: true,
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
    LoadView = (loading) => (loading && <View style={styles.loading}><Text style={styles.loadingText}>正在加载中...</Text></View>)

    getHtml = (content) => {
        let html = `<!DOCTYPE html>
        <html>
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    
        <body>
        ${content}
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
        }
        </script></body></html>`
        return html
    }
    onMessage(event) {
        console.log(event)
        try {
            const action = JSON.parse(event.nativeEvent.data)
            if (action.type === 'setHeight' && action.height > 0) {
                this.setState({ webViewHeight: action.height })
            }
        } catch (error) {
            // pass
        }
    }
    render() {
        const { webLoading, webViewHeight } = this.state
        const { data, loading } = this.store
      
        return (

            <ScrollView style={styles.container}>
                <StatusBar
                    animated
                    translucent
                    barStyle={'dark-content'}
                    networkActivityIndicatorVisible={true}
                />
                <Img propsImg={data.img} styles={styles.topImg} />
                <SafeAreaView style={styles.bottom}>
                    {this.LoadView(loading)}
                    {!loading && <View style={styles.content}
                        horizontal={false}>
                        <View style={styles.bottomTop}>
                            <Text style={styles.title}>{data.title}</Text>
                            <View style={styles.more}>
                                <Text style={styles.author}>{data.authors}</Text>
                                <Text style={styles.time}>{data.time}</Text>
                            </View>
                        </View>

                        <View style={{ paddingLeft: 20, marginTop: 20 }}>
                            <View style={styles.desc}>
                                <Text style={{ color: Color.desc }}>{data.description}</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, width: Dimensions.get("window").width }}>
                       
                            <WebView
                                style={{height:Dimensions.get("window").height}}
                                source={{ uri: 'http://kaaden.orrzt.com/#/detail?id=1' }}
                            />
                        </View>

                    </View>}
                </SafeAreaView>
            </ScrollView>
        );
    }

}
export default Detail
const styles = StyleSheet.create({
    container: {
        width: "100%",
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
    },



})
