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