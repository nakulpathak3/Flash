'use strict';

var React = require('react-native');
var {
  PickerIOS,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

let PickerItemIOS = PickerIOS.Item;

var styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  }
});

class BuyPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Size</Text>
        <Text style={styles.title}>Color</Text>
        <TouchableHighlight underlayColor='#eeeeee' onPress={() => this.buyButtonPressed()}>
          <Text style={styles.title}>Pay</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
module.exports = BuyPage;