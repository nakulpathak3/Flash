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
        { title: "Shoeless Joe's T", image: 'http://uniqlo.scene7.com/is/image/UNIQLO/goods_133158_sub2?$pdp-detail$',
          description: 'cool black tshirt for cool guys' },
        { title: 'Food for thought maple syrup', image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
          description: 'to dip your poutine' },
        { title: "Nancy's Tea Cups", image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
          description: 'tea cups to eat poutine and maple syrup' },
        { title: "Mart's Wheat Beers", image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
          description: 'Made with maple syrup' },
        { title: "Nike Yeezy's", image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
          description: 'Kanye keep up with deeezys' },
        { title: "Organic Ice Cream Store", image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
        description: 'Made by organic cows and what not' },
        { title: "Happiness Pills", image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
        description: 'Amazing deal especially for midterms' },
        { title: "5 Caffeines", image: 'http://www.foodforthought.net/wp-content/uploads/maple-syrup-big.jpg',
        description: 'Stay awake at this hacakthon weekend with these deals' }
        ]),
    };
  }

  rowPressed() {
    this.props.navigator.push({
      component: SaleView,
      passProps: {product: { title: 'Food for thought maple syrup', image: 'http://uniqlo.scene7.com/is/image/UNIQLO/goods_133158_sub2?$pdp-detail$',
          description: 'to dip your poutine' }}
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
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
      renderRow={this.renderRow.bind(this)} />
    );
  }

}

module.exports = SalesIndex;
