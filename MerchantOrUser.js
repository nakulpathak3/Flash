'use strict';

var Login = require('./Login.js');

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

var styles =  StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1,
    marginTop: 80
  },
  buttonSquare: {
    height: 180,
    width: 180,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginTop: 30,
    marginLeft: 40
  },
  textSquare: {
    fontSize: 36,
    color: 'black',
    alignSelf: 'center'
  }
});

class MerchantOrUser extends Component {

  userPressed() {
    this.props.navigator.push({
      component: Login,
      passProps: { type: 'user' }
    });
  }

  merchantPressed() {
    this.props.navigator.push({
      component: Login,
      passProps: { type: 'merchant' }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.buttonSquare} onPress={() => this.userPressed()}
            underlayColor='#dddddd'>
            <Text style={styles.textSquare}>User</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonSquare} onPress={() => this.merchantPressed()}
            underlayColor='#dddddd'>
            <Text style={styles.textSquare}>Merchant</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = MerchantOrUser;