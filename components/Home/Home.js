import React, { Component } from 'react';
import { View, Button } from 'react-native';



export default class Home extends Component {
  constructor (props) {
    super(props);

    this.openCustomerForm = this.openCustomerForm.bind(this);

    this.state = {
      
    }
  }

  openCustomerForm() {
    this.props.navigation.navigate('CustomerForm');
  }

  render() {
    return (
      <View>
        <Button 
          title="Customer Form" 
          onPress={ this.openCustomerForm }
        />
      </View>
    );
  }
}
