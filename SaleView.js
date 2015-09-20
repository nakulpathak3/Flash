'use strict';

var BuyPage = require('./BuyPage.js')
var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  },
  container: {
    marginTop: 65,
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  }
});

class SaleView extends Component {

  buyButtonPressed() {
    this.props.navigator.push({
      component: BuyPage
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.image }} style={styles.backgroundImage} />
        <TouchableHighlight underlayColor='#eeeeee' onPress={() => this.buyButtonPressed()}>
          <Text style={styles.title}>Buy now!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = SaleView;