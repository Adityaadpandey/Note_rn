import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            const loginUser = async () => {
                const url = "https://backendrn-production.up.railway.app/api/user/login"; // Replace with your API URL
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "email": email,
                            "password": password,
                        }),
                    });

                  const data = await response.json();
                  console.log(data);

                    if (data.success) {
                        // Handle successful login
                        Alert.alert("Login Successful", `Welcome back, ${data.name}!`);
                        navigation.navigate('Card'); // Navigate to Home or another screen
                    } else {
                        // Handle login failure
                        Alert.alert("Login Failed", "Invalid credentials");
                    }
                } catch (error) {
                    Alert.alert("Error", "Something went wrong. Please try again.");
                } finally {
                    setLoading(false);
                }
            };

            loginUser();
        }
    }, [loading]);

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }
        setLoading(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signupText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        color: '#333',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#28a745',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupText: {
        color: '#333',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
