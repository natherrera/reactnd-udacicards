import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Content, Form, Item, Input, Label } from 'native-base';


const QuizView = ({ navigation }) => {

  const [answered, setAnswered] = React.useState(false);
    const [answerResult, setAnswerResult] = React.useState(true);


  return (
    <View style={styles.layoutContainer}>
      <Content>
        <View style={styles.titleContainer}>

        { !answered ? <>
            <Text style={styles.title}>Does React Native work with Android?</Text>
            <Text style={styles.text}>Answer</Text>
          </>
          : <>
          <Text style={styles.title}>{answerResult ? 'Yes!' : 'No!'}</Text>
          <Text style={styles.text}>Question</Text>
        </>
        }

        </View>
          <Form>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => (setAnswered(true), setAnswerResult(true)) }
              >
                <Text
                style={styles.buttonText}
                >Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => (setAnswered(true), setAnswerResult(false))}
              >
                <Text
                style={styles.buttonText}
                >Incorrect</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </Content>
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
