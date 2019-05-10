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
    }
    componentDidMount() {
        const { id } = this.props.navigation.state.params
        if (id) {
            console.log(id)
        } else {

            // Alert.alert("啊哦~文章不见了~")
            Alert.alert(
                '温馨提示',
                '啊哦~文章不见了~',
                [
                    { text: '确定', onPress: () => this.props.navigation.goBack() },

                ],
                { cancelable: false }
            );
        }
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
                    <Text>1</Text>
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
    }

})
