import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animation] = useState(new Animated.Value(0)); // For button animation

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://backendrn-production.up.railway.app/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        }),
      });
      const json = await response.json();
      if (json.success) {
        navigation.navigate('Card');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const animatedStyle = {
    opacity: animation,
    transform: [{ scale: animation }],
  };

  return (
    <SafeAreaView style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.animationWrapper}>
            <LottieView
              source={require('../assets/login_animation.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
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
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f8f8f8',
},
keyboardAvoidingView: {
  flex: 1,
},
scrollContainer: {
  flexGrow: 1,
  justifyContent: 'flex-end', // Push content to bottom
  alignItems: 'center',
  paddingHorizontal: 20,
},
animationWrapper: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: height * 0.5, // Covering half of the screen
  overflow: 'hidden',
},
animation: {
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
},
formContainer: {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 20,
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 10,
  marginBottom: 30,
},
title: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 20,
  textAlign: 'center',
},
inputContainer: {
  marginBottom: 20,
},
input: {
  height: 50,
  borderColor: '#ddd',
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 15,
  marginBottom: 10,
  backgroundColor: '#fff',
  fontSize: 16,
},
button: {
  backgroundColor: '#007BFF',
  borderRadius: 10,
  paddingVertical: 15,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
});


export default Login;