import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function SingleDeckView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Card Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DeckListView')}
      />
    </View>
  );
}
