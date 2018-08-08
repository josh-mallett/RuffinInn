import React, { Component } from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import t from 'tcomb-form-native';

const Form = t.form.Form;

var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var feedingTime = t.enums({
  M: 'Morning',
  N: 'Night',
  B: 'Both'
});

var petEnum = t.enums({
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5'
});

const Pet = t.struct({
  breed: t.String,
  age: t.Number,
  gender: Gender,
  dropoffDate: t.Date,
  pickupDate: t.Date,
  isSpayedNeutered: t.Boolean,
  isHouseTrained: t.Boolean,
  isAgressive: t.Boolean,
  playsWellWithOthers: t.Boolean,
  anyTreatOk: t.Boolean,
  okTreats: t.list(t.String),
  hasAllergies: t.Boolean,
  allergies: t.list(t.String),
  hasSpecialNeeds: t.Boolean,
  specialNeeds: t.String,
  itemsCheckedIn: t.maybe(t.list(t.String)),
  vetName: t.String,
  vetPhone: t.Number
});

const petOptions = {
  label: 'Pet Info Form',
  fields: {

  }
};

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
handleSubmit = () => {
  const value = this._form.getValue();
  console.log('value: ', value);
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
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}