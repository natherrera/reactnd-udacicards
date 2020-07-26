import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Content, Form, Item, Input, Label, Picker, Icon } from 'native-base';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import DeckAction from '../store/actions/deck';


const NewQuestionView = ({ route: { params: { id } } }) : React.ReactElement  => {

  const dispatch = useDispatch();
  const [ questionQuiz, setquestionQuiz ] = useState('');
  const [ answerQuiz, setAnswerQuiz ] = useState('');
  const [ questionValidation, setQuestionValidation ] = useState(false);
  const [ answerValidation, setAnswerValidation ] = useState(false);

  function onSubmit()
    {
      if(!questionQuiz) {setQuestionValidation(true); return};
      if(!answerQuiz) {setAnswerValidation(true); return};


      dispatch(DeckAction.Action(
          DeckAction.Type.GET_QUIZ,
          { deckId:id, questionQuiz, answerQuiz }
      ));
    }

  return (
    <View style={styles.layoutContainer}>
      <Content>
          <Form>

            <Item stackedLabel error={questionValidation}>
              <Label>Question</Label>
              <Input onChangeText={(text) => setquestionQuiz(text) } />
            </Item>

            <Picker
              mode="dropdown"
              style={{marginTop:20}}
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your answer"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              onValueChange={(value) => setAnswerQuiz(value) }
            >
              <Picker.Item label="Select your answer" value="None" />
              <Picker.Item label="Correct" value="correct" />
              <Picker.Item label="Incorrect" value="incorrect" />

            </Picker>

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
