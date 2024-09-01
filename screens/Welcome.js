<<<<<<< HEAD
import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export default function Welcome({ navigation }) {
  const [data, setData] = useState(null);
  const [strg, setStrg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from SecureStore
        const token = await SecureStore.getItemAsync('auth');
        setData(token);

        if (!token) {
          throw new Error('No auth token found');
        }

        // Fetch user data from the server
        const response = await fetch('https://backendrn-production.up.railway.app/api/user/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,  // Use the token directly
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const json = await response.json();
        console.log(json);
        setStrg(json);
      } catch (error) {
        console.error('Error retrieving data:', error);
        navigation.navigate('Home');  // Navigate to home page on error
      } finally {
        setLoading(false);  // Set loading to false when fetch is complete
      }
    };

    fetchData();
  }, [navigation]);  // Include `navigation` in the dependency array

  // Display a loading indicator while data is being fetched
  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  // If no data or strg is available, navigate to the home page
  if (!strg) {
    return (
      <SafeAreaView>
        <Text>Data not found. Redirecting to Home...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>{strg.name || 'No name available'}</Text>
      {strg.img ? (
        <Image
          source={{ uri: strg.img }}  // using the online image link from strg.img
          style={{ width: 150, height: 150 }}  // setting the width and height
        />
      ) : (
        <Text>No image available</Text>
      )}
    </SafeAreaView>
  );
}
=======
import { StyleSheet, Image, SafeAreaView, Dimensions, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.welcome}>
            <Image style={styles.wel_img} source={require("../assets/aaa.gif")} />
            <Text style={styles.wel_text}>Welcome to The <Text style={styles.italicText}>GENCO</Text></Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Categories"
                    onPress={() => navigation.navigate('Categories')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                />
                <Button
                    style={styles.button}
                    title="Community"
                    onPress={() => navigation.navigate('Signin')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                /></View>
            <View style={styles.buttonContainer1}>
                <Button
                    style={styles.button}
                    title="Quiz"
                    onPress={() => navigation.navigate('Login')}
                    color="purple"
                    textStyle={{ fontSize: 20 }}
                /><Button
                style={styles.button}
                title="Dost"
                onPress={() => navigation.navigate('Signin')}
                color="purple"
                textStyle={{ fontSize: 20 }}
            />
            </View>
        </SafeAreaView>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor: '#f8f8f8', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    wel_img: {
        width: width * 1, 
        // height: height , 
        resizeMode: 'contain', 
        marginBottom: 20, 
    },
    wel_text: {
        fontSize: 24,
        // fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
        fontWeight:"condensedBold",
        color: '#555', 
        marginBottom: 10,
        textTransform: 'uppercase', 
        letterSpacing: 1,
        lineHeight: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '90%', 
        marginTop: 20, 
        marginBottom: 20,
    },
    buttonContainer1: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '90%', 
        marginTop: 50, 
        // marginBottom: 40,
    },
    button: {
        flex: 1, 
        marginHorizontal: 10, 
    },
});
>>>>>>> 9fe9e2ae34a7cae327c08ba99c6b2ba4019c6f47
