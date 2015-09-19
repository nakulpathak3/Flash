'use strict';

var SaleView = require('./SaleView.js')
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
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  description: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
});

class SalesIndex extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        { title: 'Black Tshirt', image: 'http://uniqlo.scene7.com/is/image/UNIQLO/goods_133158_sub2?$pdp-detail$',
          description: 'cool black tshirt for cool guys' },
        { title: 'Maple Syrup', image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
          description: 'to dip your poutine' }
        ]),
    };
  }

  rowPressed() {
    this.props.navigator.push({
      component: SaleView,
      passProps: {image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg'}
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
          <Image style={styles.thumb} source={{ uri: rowData.image }} />
            <View  style={styles.textContainer}>
              <Text style={styles.title}>{rowData.title}</Text>
              <Text style={styles.description}
                    numberOfLines={1}>{rowData.description}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return(
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
    />
    );
  }

}

module.exports = SalesIndex;
