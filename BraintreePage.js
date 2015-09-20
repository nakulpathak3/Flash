'use strict';

var SalesIndex = require('./SalesIndex');
var React = require('react-native');
var {
  PickerIOS,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component,
  WebView
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  webView: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 350,
  },
});

class BraintreePage extends Component {

  moreDealsPressed() {
    this.props.navigator.push({
      component: SalesIndex
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref='webview'
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          url={"http://localhost:8000/index.html"}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState={true}
          scalesPageToFit={true} />
      </View>
    );
  }
}
module.exports = BraintreePage;