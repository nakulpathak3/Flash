'use strict';

var BraintreePage = require('./BraintreePage');
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

var PickerItemIOS = PickerIOS.Item;

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
  button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

class BuyPage extends Component {

  moreDealsPressed() {
    this.props.navigator.push({
      component: BraintreePage,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Size</Text>
        <PickerIOS>
            <PickerItemIOS key="XS" value="XS" label="XS" />
            <PickerItemIOS key="S" value="S" label="S" />
            <PickerItemIOS key="M" value="M" label="M" />
            <PickerItemIOS key="L" value="L" label="L" />
            <PickerItemIOS key="XL" value="XL" label="XL" />
        </PickerIOS>
        <Text style={styles.title}>Color</Text>
        <PickerIOS>
            <PickerItemIOS key="Black" value="Black" label="Black" />
            <PickerItemIOS key="White" value="White" label="White" />
            <PickerItemIOS key="Grey" value="Grey" label="Grey" />
        </PickerIOS>
        <TouchableHighlight style={styles.button} onPress={() => this.moreDealsPressed()} underlayColor='#eeeeee' >
          <Text style={styles.buttonText}>Buy now</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
module.exports = BuyPage;