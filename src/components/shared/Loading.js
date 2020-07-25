import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Loading({message}) {

    useEffect(() => {
        setInterval(() => {
            setSpinner(!spinner)
          }, 3000);
    })

    const [spinner, setSpinner] = useState(false);

    return (
        <View style={styles.container}>
        <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{message}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      margin: 10
    },
    instructions: {
      color: '#333333',
      marginBottom: 5
    }
  });



