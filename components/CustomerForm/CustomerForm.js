import React, { Component } from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import t from 'tcomb-form-native';
//import { createStackNavigator } from 'react-navigation';
//import { getTypeName } from '../../node_modules/tcomb';

const Form = t.form.Form;

var petEnum = t.enums({
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5'
});


const Customer = t.struct({
  ownerNameF: t.String,
  ownerNameL: t.String,
  phoneNum1: t.Number,
  phoneNum2: t.maybe(t.Number),             //Second ph. number is optional.  Remove the "t.maybe" function if Kate doesn't like this.
  numPets: petEnum,
});

const custOptions = {
  label: 'Customer Contact Form',
  fields: {
    ownerNameF: {
      label: 'First Name*',
      error: 'Please enter your name'
    },
    ownerNameL: {
      label: 'Last Name*',
      error: 'Please enter your name'
    },
    /*
    petName: {
      label: 'Pet Name',
      error: "Please enter your pet's name"
    },
    */
    phoneNum1: {
      label: 'Primary Phone*',
      error: 'We need a way to contact you'
    },
    phoneNum2: {
      label: 'Secondary Phone (optional)',
    },
    numPets: {
      label: 'How many pets?*',
      error: 'Please select one'
    }
  }
};


export default class CustomerForm extends Component {
/*
  handleSubmit = () => {
  const value = this._form.getValue();
  console.log('value: ', value);
}
*/

constructor (props) {
  super(props);

  this.openPetForm = this.openPetForm.bind(this);

  this.state = {
    
  }
}

openPetForm() {
  this.props.navigation.navigate('PetForm');
}

  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={Customer}
          options={custOptions}     //Pass labels via props
        />
        <Button
          title="Submit"
          onPress={ this.openPetForm }
        />
      </View>
    );
  }
}

