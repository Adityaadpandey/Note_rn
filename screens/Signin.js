import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Signin({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const signIn = async () => {
      if (isSubmitting) {
        try {
          const response = await fetch('https://backendrn-production.up.railway.app/api/user/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "name": name,
              "email": email,
              "password": password,
            }),
          });

            const json = await response.json();
            console.log(json);

          if (json.success) {
            Alert.alert('Success', 'Sign-in Successful!');
            navigation.navigate('Card');
          } else {
            Alert.alert('Error', json.message || 'Sign-in Failed');
          }
        } catch (error) {
          Alert.alert('Error', 'An error occurred. Please try again.');
          console.error(error);
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    signIn();
  }, [isSubmitting]);

  const handleSignIn = () => {
    if (name && email && password) {
      setIsSubmitting(true);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isSubmitting ? 'Signing In...' : 'Sign In'}
        onPress={handleSignIn}
        disabled={isSubmitting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
