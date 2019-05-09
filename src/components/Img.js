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
            load: false
        }
    }
    render() {
        const { type, load } = this.state
        const { propsImg, styles } = this.props
        let url = require("../../assets/images/idp.png")
        if (load && !type) {
            url = { uri: propsImg }
        }
        return (
            <Image
                resizeMode="cover"
                source={url}
                style={styles}
                onLoad={() => { this.setState({ load: true }) }}
                onError={(error) => { this.setState({ type: 1 }) }}
            />
        )
    }
}
export default Img
