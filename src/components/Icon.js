import React from 'react';
import { Ionicons } from '@expo/vector-icons';

class Icon extends React.Component {
    render() {
        const { color, style, name, size } = this.props
        return (
            <Ionicons
                name={name}
                size={size}
                style={style}
                color={color}
            />
        );
    }
}
export default Icon