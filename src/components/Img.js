import React, { Component } from "react"
import { Image } from 'react-native';
import { observer, inject } from "mobx-react"
@inject("rootStore")
@observer
class Img extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 0,
        }
    }
    render() {
        const { type } = this.state
        const { propsImg, styles } = this.props
        let url = { uri: propsImg }
        if (type) {
            url = require("../../assets/images/idp.png")
        }
        return (
            <Image
                resizeMode="cover"
                source={url}
                style={styles}
                defaultSource={require("../../assets/images/idp.png")} //默认图片
                onError={(error) => { this.setState({ type: 1 }) }}
            />
        )
    }
}
export default Img
