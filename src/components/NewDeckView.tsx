import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { useDispatch } from 'react-redux';
import DeckAction from '../store/actions/deck';

const NewDeckView  = () : React.ReactElement  => {

  const dispatch = useDispatch();
  const [ title, setTitle ] = useState('');
  const [ inputValidation, setInputValidation ] = useState(false);
  const [ successForm, setSuccessForm ] = useState(false);

  function onSubmit()
    {
      if (!title) {
        setInputValidation(true)
        return;
      } else {
        setInputValidation(false)
        setSuccessForm(true)

        dispatch(DeckAction.Action(
            DeckAction.Type.GET_DECK,
            { title }
        ));
        return;
      }

    }


  return (
    <View style={styles.layoutContainer}>
      <View>
        <Text style={styles.title}>What is the title of your new deck</Text>
            <Text>Deck Title</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              placeholder="Deck Title"
              onChangeText={(text) => setTitle(text) }
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={ onSubmit }
              >
                <Text
                style={styles.buttonText}
                >Submit</Text>
              </TouchableOpacity>
            </View>
              { successForm && <Text style={styles.message}>Great!  {title}  is in your Decks!</Text>}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  primaryButton: {
    backgroundColor: '#29b6f6',
    margin:10,
    padding:10,
    width:150,
    borderRadius:3,
  },
  buttonText: {
    color:'#fff',
    textTransform:'uppercase',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 30,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    color: '#333'
  },
  message: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    padding:10,
    backgroundColor: '#6ce4c8',
    color: '#fff'
  }
});

export default NewDeckView;
