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
  },
  button: {
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
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
        <Image source={{ uri: this.props.product.image }} style={styles.backgroundImage} />
        <Text>Original Price: $80 </Text>
        <Text>Discounted Price: $35 </Text>
        <TouchableHighlight style={styles.button} underlayColor='#eeeeee' onPress={() => this.buyButtonPressed()}>
          <Text style={styles.buttonText}>Buy now!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = SaleView;