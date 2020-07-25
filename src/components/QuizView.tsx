import * as React from 'react';
import { Button, View } from 'react-native';
import { Content, Input, Item } from 'native-base';

export default function QuizView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Content>
          <Item regular>
            <Input placeholder='Regular Textbox' />
          </Item>
        </Content>
    </View>
  );
}
