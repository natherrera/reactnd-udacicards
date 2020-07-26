import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from "./components/shared/Loading";
import ErrorView from "./components/shared/ErrorView";
import SingleDeckView from "./components/SingleDeckView";
import NewQuestionView from "./components/NewQuestionView";
import DeckView from "./components/DeckView";
import QuizView from "./components/QuizView";

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="DeckView">
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
          name="DeckView"
          component={DeckView}
          options={{
            title: 'Deck',
            headerStyle: {
              backgroundColor: '#80deea',
            },
            headerTintColor: '#333333',
          }}
        />

        <Stack.Screen
          name="NewQuestionView"
          component={NewQuestionView}
          options={{
            title: 'New question',
            headerStyle: {
              backgroundColor: '#80deea',
            },
            headerTintColor: '#333333',
          }}
        />

        <Stack.Screen
          name="SingleDeckView"
          component={SingleDeckView}
          options={{
            title: 'Deck',
            headerStyle: {
              backgroundColor: '#80deea',
            },
            headerTintColor: '#333333',
          }}
        />

        <Stack.Screen
          name="QuizView"
          component={QuizView}
          options={{
            title: 'Quiz',
            headerStyle: {
              backgroundColor: '#80deea',
            },
            headerTintColor: '#333333',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
