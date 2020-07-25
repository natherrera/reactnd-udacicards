import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function ErrorView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sorry, you cannot take a quiz because there are no cards in the deck</Text>
      <Button style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate('DeckListView')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red'
    },
});

