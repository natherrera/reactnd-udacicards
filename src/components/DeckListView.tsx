import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { useDispatch, shallowEqual, useSelector, useStore  } from 'react-redux';
import DeckAction from '../store/actions/deck';


const DeckListView = ({ navigation }) => {

  const { decks = {} } = useSelector(
    state => state[DeckAction.Key],
    shallowEqual
  );

  function singleCards(id)
    {
        navigation.navigate('SingleDeckView', { id });
    }

  return (
    <View style={styles.layoutContainer}>
      {
          Object.values(decks)
              .map((d: any) => d && (

                    <TouchableHighlight
                      key={1}
                      onPress={() => singleCards(d.id)}
                      style={styles.deckContainer}
                    >
                      <View key={ d.id }>
              <Text style={styles.deckTitle}>{d.title}</Text>
                        <Text style={styles.deckCardTitle}>{d.count ? d.count : '0'} Cards</Text>
                      </View>
                    </TouchableHighlight>

              ))
      }

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
    borderBottomColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 20,
  },
  deckTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333'
  },
  deckCardTitle: {
    fontSize: 16,
    color: '#bcbcbc'
  },
});


export default DeckListView;
