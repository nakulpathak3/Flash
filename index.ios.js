'use strict';

var MerchantOrUser = require('./MerchantOrUser.js');

var React = require('react-native');
var styles =  React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class FlashApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Flash',
        component: MerchantOrUser
      }}/>
    );
    //This constructs a navigation controller,
    // applies a style and sets the initial route to the HelloWorld component.
  }
}

React.AppRegistry.registerComponent('Flash', function() { return FlashApp });
// AppRegistry defines the entry point to the application and provides the root component.
