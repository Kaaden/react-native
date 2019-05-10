import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, } from 'react-native';
class Icon extends React.Component {
    render() {
        const { color, style, name, size, _onPress } = this.props
        return (
            <TouchableOpacity onPress={_onPress}>

                <Ionicons
                    name={name}
                    size={size}
                    style={style}
                    color={color}
                />
            </TouchableOpacity>
        );
    }
}
export default Icon