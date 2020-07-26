import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Content, Form, Item, Input, Label } from 'native-base';
import DeckAction from '../store/actions/deck';


const QuizView = ({ route: { params: { id } } }) => {

  const dispatch = useDispatch();
  const [answered, setAnswered] = React.useState(false);
  const [answerResult, setAnswerResult] = React.useState(true);
  const [hasQuiz, setHasQuiz] = React.useState(false);
  const [question, setQuestion] = React.useState([]);
  let questions: any = null;
  let questionAvailable: any = null;

  const { decks: { [id]: deck } } = useSelector(
    store => store[DeckAction.Key],
    shallowEqual
  );

  if (deck.questions) {
    questions = Object.values(deck.questions);
    questionAvailable= Object.values(questions).filter((e:any) => e.available)[0];
  }

  useEffect(() => {
    setHasQuiz(questionAvailable ? true : false)
  });






  function answerQuiz({ answerQuiz, idQuiz }, value: string)
  {
    if (answerQuiz === value) {
      setAnswerResult(true)
    } else {
      setAnswerResult(false)
    }

    setAnswered(true)

    dispatch(DeckAction.Action(
        DeckAction.Type.ANSWER_QUIZ,
        { deckId: id, quizId: idQuiz }
    ));
  }

  return (
    <View style={styles.layoutContainer}>
      {
          hasQuiz ? (

                <Content>
                <View style={styles.titleContainer}>

                { !answered ? <>
                <Text style={styles.title}>{questionAvailable.questionQuiz}</Text>
                    <Text style={styles.text}>Question</Text>
                  </>
                  : <>
                  <Text style={styles.title}>{answerResult ? 'Yes!' : 'No!'}</Text>
                  <Text style={styles.text}>Answer</Text>
                </>
                }

                </View>
                  <Form>

                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => answerQuiz(questionAvailable, 'correct') }
                      >
                        <Text
                        style={styles.buttonText}
                        >Correct</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => answerQuiz(questionAvailable, 'incorrect') }
                      >
                        <Text
                        style={styles.buttonText}
                        >Incorrect</Text>
                      </TouchableOpacity>
                    </View>
                  </Form>
                </Content>

              ) : (
                <View>
                  <Text>Sorry, you cannot take a quiz because there are no cards in the deck</Text>
                </View>
              )}

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
    backgroundColor: '#00e676',
    margin:10,
    padding:10,
    width:150,
    borderRadius:3,
  },
  secondaryButton: {
    backgroundColor: '#f44336',
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#607d8b'
  },
  titleContainer: {
    alignItems: 'center'
  }
});

export default QuizView;
