import React, { Component } from "react"
import { AppLoading, Asset, Font, Icon } from 'expo';
import Switch from './src/navigation/Switch';
import store from "./src/mobx/store"
import { Provider } from "mobx-react"
import { createAppContainer } from "react-navigation"
const AppContainer = createAppContainer(Switch)
class App extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state
    if (!isLoading) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider rootStore={store}>
          <AppContainer />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoading: true });
  };
}
export default App