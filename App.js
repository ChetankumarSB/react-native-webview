import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <WebView source={{ uri: 'https://www.google.com'  }} style={{ marginTop: 20 }}></WebView>
     // <WebView source={{ html: '<h1>Hello World!!</h1>' }} style={{ marginTop: 20 }}></WebView>
    );
  }
}