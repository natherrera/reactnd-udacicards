import * as React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';


const DeckListView = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e1e2e1' }}>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('DeckListView')}
      >
        <Text
        style={styles.buttonText}
        >Deck List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('NewDeckView')}
      >
        <Text
        style={styles.buttonText}
        >New deck</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('NewQuestionView')}
      >
        <Text
        style={styles.buttonText}
        >New question</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('DeckView')}
      >
        <Text
        style={styles.buttonText}
        >Deck</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('SingleDeckView')}
      >
        <Text
        style={styles.buttonText}
        >Deck</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('QuizView')}
      >
        <Text
        style={styles.buttonText}
        >Quiz</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#ef9a9a',
    margin:10,
    padding:10,
    width:150,
    borderRadius:3,
  },
  secondaryButton: {
    backgroundColor: '#ba6b6c',
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
  section: {
    backgroundColor: 'red'
  },
  container: {
    // flex: 1,
  },
  item: {
    padding: 20,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24
  }
});


export default DeckListView;
