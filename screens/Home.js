import { StyleSheet, Image, SafeAreaView, Dimensions, Text } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const { width, height } = Dimensions.get('window');


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.welcome}>
            <Image style={styles.wel_img} source={require("../assets/welcome.png")} />
            <Text style={styles.wel_text}>Welcome to The <Text style={styles.italicText}>n-Notes</Text> App</Text>
            <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
        color="green" 
        textStyle={{ fontSize: 20 }}
      />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor: '#f8f8f8', // Background color for the app
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
    },
    wel_img: {
        width: width * 0.7, // 70% of the screen width
        height: height * 0.3, // 30% of the screen height
        resizeMode: 'contain', // Maintain aspect ratio
        marginBottom: 20, // Add some vertical space
    },
    wel_text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
        color: '#555', // Dark gray color for the italic text
        marginBottom: 10,
        textTransform: 'uppercase', // Convert text to uppercase
        letterSpacing: 1, // Add some spacing between letters
        lineHeight: 30, // Adjust line height for better readability
    },
});
