import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import DeckListView from './DeckListView';
import NewDeckView from './NewDeckView';


const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'deck', title: 'DECK' },
    { key: 'newDeck', title: 'NEW DECK' },
  ]);

  const renderScene = SceneMap({
    deck: DeckListView,
    newDeck: NewDeckView,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    >
    </TabView>
  );
}
