import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from './Color';

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused } = this.props
    return (
      <Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}