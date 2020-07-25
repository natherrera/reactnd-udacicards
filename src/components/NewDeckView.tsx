import * as React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Content, Form, Item, Input, Label } from 'native-base';


const NewDeckView = ({ navigation }) => {
  return (
    <View style={styles.layoutContainer}>
      <Content>
        <Text style={styles.title}>What is the title of your new deck</Text>
          <Form>
            <Item fixedLabel>
              <Label>Deck Title</Label>
              <Input />
            </Item>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => navigation.navigate('DeckListView')}
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
    backgroundColor: '#ef9a9a',
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

export default NewDeckView;
