import React, { Component } from 'react';
import {View, Button, ScrollView} from 'react-native';
import styles from './styles';
import t from 'tcomb-form-native';
import moment from 'moment'

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

const Pet = t.struct({
    petName: t.String,
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
    okTreats: t.maybe(t.list(t.String)),
    hasAllergies: t.Boolean,
    allergies: t.maybe(t.list(t.String)),
    hasSpecialNeeds: t.Boolean,
    specialNeeds: t.maybe(t.list(t.String)),
    itemsCheckedIn: t.maybe(t.list(t.String)),
    vetName: t.String,
    vetPhone: t.Number
  });

const petOptions = {
    label: 'Pet Info Form',
    fields: {
        petName: {
            label: 'Name of Pet',
            error: "This is a required field."
        },
        breed: {
            label: "Breed",
            error: "This is a required field."
        },
        age: {
            label: "Age (best estimate)",
            error: "This is a required field."
        },
        gender: {
            label: "Gender",
            error: "This is a required field."
        },
        dropoffDate: {
            label: "Pet Arrival Date",
            mode: 'date',
            config: {
                format: (date) => moment(date).subtract(0, 'days').calendar()
            },
            error: "This is a required field."
        },
        pickupDate: {
            label: "Pet Pickup Date",
            mode: 'date',
            config: {
                format: (date) => moment(date).subtract(0, 'days').calendar()
            },
            error: "This is a required field."
        },
        isSpayedNeutered: {
            label: "Is Pet Spayed/Neutered?",
            error: "This is a required field."
        },
        isHouseTrained: {
            label: "Is Pet House Trained?",
            error: "This is a required field."
        },
        isAgressive: {
            label: "Is Pet Aggressive?",
            error: "This is a required field."
        },
        playsWellWithOthers: {
            label: "Does Pet Play Well With Others?",
            error: "This is a required field."
        },
        anyTreatOk: {
            label: "Any Treat Acceptable?",
            error: "This is a required field."
        },
        okTreats: {
            label: "Which Treats Are Acceptable?",
            //error: "This is a required field."
        },
        hasAllergies: {
            label: "Any Allergies?",
            error: "This is a required field."
        },
        allergies: {
            label: "List Allergies",
            //error: "This is a required field."
        },
        hasSpecialNeeds: {
            label: "Any Special Needs?",
            error: "This is a required field."
        },
        specialNeeds: {
            label: "List Special Needs",
            //error: "This is a required field."
        },
        itemsCheckedIn: {
            label: "Items Checked In",
            //error: "This is a required field."
        },
        vetName: {
            label: "Vet's Name",
            error: "This is a required field."
        },
        vetPhone: {
            label: "Vet's Phone #",
            error: "This is a required field."
        }
    }
  };



  export default class PetForm extends Component {
    handleSubmit = () => {
      const value = this._form.getValue();
      console.log('value: ', value);
    }
      render() {
        return (
          <View style={styles.container}>
          <ScrollView>
            <Form 
              ref={c => this._form = c}
              type={Pet}
              options={petOptions}     //Pass labels via props
            />
            <Button
              title="Submit"
              onPress={this.handleSubmit}
            />
            </ScrollView>
          </View>
        );
      }
    }