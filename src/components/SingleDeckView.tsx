import React from 'react';
import { TouchableHighlight,TouchableOpacity,StyleSheet, View, Text } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import DeckAction from '../store/actions/deck';

const SingleDeckView = ({ route: { params: { id } }, navigation }) => {

  const { decks: { [id]: deck } } = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
  );

  function newQuestionView()
  {
      navigation.navigate('NewQuestionView', { id: deck.id, title: deck.title });
  }

  function quizView()
  {
    navigation.navigate('QuizView', { id: deck.id });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableHighlight
        onPress={() => navigation.navigate('SingleDeckView')}
        style={styles.deckContainer}
      >
        <View style={{alignItems: 'center'}}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCardTitle}>{deck.count ? deck.count : '0'} Cards</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => newQuestionView()}
        >
          <Text
          style={styles.buttonText}
          >Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => quizView()}
        >
          <Text
          style={styles.buttonText}
          >Start Quiz</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
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
  secondaryButton: {
    backgroundColor: '#81d4fa',
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
  deckContainer: {
    width: 500,
    alignItems: 'center',
    padding: 10
  },
  deckTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:10
  },
  deckCardTitle: {
    fontSize: 20,
    color: '#bcbcbc'
  },
  buttonContainer: {
    marginTop: 30,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
});


export default SingleDeckView;
