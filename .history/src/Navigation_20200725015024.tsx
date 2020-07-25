import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from "./components/shared/Loading";
import ErrorView from "./components/shared/ErrorView";
import DeckListView from "./components/DeckListView";
import SingleDeckView from "./components/SingleDeckView";
import NewQuestionView from "./components/NewQuestionView";
import NewDeckView from "./components/NewDeckView";
import QuizView from "./components/QuizView";

const Stack = createStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Please wait');

  return (
    <NavigationContainer style={{backgroundColor: 'red'}}>
      <Stack.Navigator initialRouteName="DeckListView">
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            title: 'Loading',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="ErrorView"
          component={ErrorView}
          options={{
            title: 'Error',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="DeckListView"
          component={DeckListView}
          options={{
            title: 'Deck List',
            headerStyle: {
            backgroundColor: '#ba6b6c',
            },
            headerTintColor: '#000000',
          }}
        />

        <Stack.Screen
          name="NewDeckView"
          component={NewDeckView}
          options={{
            title: 'New deck',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="NewQuestionView"
          component={NewQuestionView}
          options={{
            title: 'New question',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="SingleDeckView"
          component={SingleDeckView}
          options={{
            title: 'Deck',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="QuizView"
          component={QuizView}
          options={{
            title: 'Quiz',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
