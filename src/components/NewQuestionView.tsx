import  React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { useDispatch } from 'react-redux';
import DeckAction from '../store/actions/deck';


const NewQuestionView = ({ route: { params: { id } } }) : React.ReactElement  => {

  const dispatch = useDispatch();
  const [ questionQuiz, setquestionQuiz ] = useState('');
  const [ answerQuiz, setAnswerQuiz ] = useState<string>('');
  const [ questionValidation, setQuestionValidation ] = useState(false);

  function onSubmit()
    {
      dispatch(DeckAction.Action(
          DeckAction.Type.GET_QUIZ,
          { deckId:id, questionQuiz, answerQuiz }
      ));
    }



  return (
    <View style={styles.layoutContainer}>
      <View>

            <View>
              <Text>Question</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setquestionQuiz(text) }

              />

              <Text>Answer: (Please write: "correct/incorrect")</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setAnswerQuiz(text) }

              />
            </View>

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
  }
});

export default NewQuestionView;
