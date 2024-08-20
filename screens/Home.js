import { StyleSheet, Image, SafeAreaView, Dimensions, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.welcome}>
            <Image style={styles.wel_img} source={require("../assets/welcome.png")} />
            <Text style={styles.wel_text}>Welcome to The <Text style={styles.italicText}>n-Notes</Text> App</Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                />
                <Button
                    style={styles.button}
                    title="Signin"
                    onPress={() => navigation.navigate('Signin')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor: '#f8f8f8', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    wel_img: {
        width: width * 0.7, 
        height: height * 0.3, 
        resizeMode: 'contain', 
        marginBottom: 20, 
    },
    wel_text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
        color: '#555', 
        marginBottom: 10,
        textTransform: 'uppercase', 
        letterSpacing: 1,
        lineHeight: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '80%', 
        marginTop: 20, 
    },
    button: {
        flex: 1, 
        marginHorizontal: 10, 
    },
});
