'use strict';

var React = require('react-native');
var Firebase = require('firebase');

var SalesIndex = require('./SalesIndex');

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
  container: {
    flex: 1,
    marginTop: 50
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
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

var FBLoginManager = require('NativeModules').FBLoginManager;
var FBLogin = require('react-native-facebook-login');
var ref = new Firebase("https://popping-heat-147.firebaseio.com");
console.log(ref);


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authToken: null,
    };
    console.log(ref);
  }

  goToSalesIndex() {
    this.props.navigator.push({
      component: SalesIndex
    });
  }

  afterLogin(data) {
    console.log("State was set.")
    this.setState({ authToken: data.credentials.token });
    console.log(this.authToken)
    this.props.navigator.push({
      component: SalesIndex
    });

    ref.authWithOAuthToken("facebook", data.credentials.token, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log('Chocolate powder');
      }
    });

  }

  render() {
    var _this = this;
    return (
      <View>
        <FBLogin style={{ marginTop: 80, }}
          permissions={["email","user_friends"]}
          onLogin={(data) => this.afterLogin(data)}
          onLogout={function(){
            console.log("Logged out.");
          }}
          onLoginFound={(data) => this.afterLogin(data)}
          onLoginNotFound={function(){
            console.log("No user logged in.");
            // _this.setState({ user : null });
          }}
          onError={function(data){
            console.log("ERROR");
            console.log(data);
          }}
          onCancel={function(){
            console.log("User cancelled.");
          }}
          onPermissionsMissing={function(data){
            console.log("Check permissions!");
            console.log(data);
          }} />
          <TouchableHighlight style={styles.button} underlayColor='#eeeeee' onPress={() => this.goToSalesIndex()}>
            <Text style={styles.buttonText}>Start buying!</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

module.exports = Login;