import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function NewDeckView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New Deck Screen</Text>
      <Button
        title="Go to Decks"
        onPress={() => navigation.navigate('DeckListView')}
      />
    </View>
  );
}
